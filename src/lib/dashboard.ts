import { notify } from "./saved-records";

type Field = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
type Extra = { name: string; label: string; type: string; value: string; section: string };
type Job = { id: string; values: Record<string, string> };
const text = (element: Element | null) => element?.textContent?.replace(/\s+/g, " ").trim() || "";
function read<T>(key: string, fallback: T): T {
  try { return JSON.parse(localStorage.getItem(key) || "null") ?? fallback; } catch { return fallback; }
}
function write(key: string, value: unknown) {
  try { localStorage.setItem(key, JSON.stringify(value)); return true; }
  catch { notify("Browser storage is unavailable or full. Your changes could not be saved."); return false; }
}
function button(label: string, action: () => void) {
  const node = document.createElement("button");
  node.type = "button"; node.className = "btn btn-outline-secondary"; node.textContent = label;
  node.addEventListener("click", action); return node;
}
function download(name: string, content: string) {
  const url = URL.createObjectURL(new Blob([content], { type: "text/plain;charset=utf-8" }));
  const a = document.createElement("a"); a.href = url; a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/** Adds behavior to the original dashboard markup without replacing its layout. */
export function initializeDashboard(pathname: string, navigate: (url: string) => void) {
  const panel = document.querySelector<HTMLElement>(".dash__content");
  if (!panel) return () => {};
  const abort = new AbortController();
  const options = { signal: abort.signal, capture: true };
  const prefix = `jobpath:dashboard:${pathname}`;
  const draftKey = `jobpath:draft:${pathname}`;
  const dialogs = new Set<HTMLDialogElement>();
  function dialog(title: string, content: string, edit?: (value: string) => void) {
    const modal = document.createElement("dialog"); modal.className = "jobpath-dashboard-dialog";
    const heading = document.createElement("h5"); heading.textContent = title;
    modal.setAttribute("aria-label", title); modal.append(heading);
    if (edit) {
      const form = document.createElement("form"); const input = document.createElement("textarea");
      input.className = "form-control mb-3"; input.rows = 6; input.value = content; input.required = true;
      input.setAttribute("aria-label", title);
      const save = document.createElement("button"); save.type = "submit"; save.className = "btn btn-success me-2"; save.textContent = "Save changes";
      form.append(input, save);
      form.addEventListener("submit", e => { e.preventDefault(); e.stopPropagation(); edit(input.value.trim()); modal.close(); });
      modal.append(form);
    } else { const body = document.createElement("p"); body.style.whiteSpace = "pre-wrap"; body.textContent = content; modal.append(body); }
    modal.append(button("Close", () => modal.close()));
    modal.addEventListener("close", () => { dialogs.delete(modal); modal.remove(); });
    document.body.append(modal); dialogs.add(modal); modal.showModal();
  }

  // Restore dynamically added fields before the existing draft restoration runs.
  function extraField(extra: Extra) {
    const row = document.createElement("div"); row.className = "rt-input-group my-3 jobpath-added-field";
    const label = document.createElement("label"); label.textContent = extra.label;
    const input = document.createElement("input"); input.type = extra.type; input.name = extra.name; input.value = extra.value;
    input.className = "form-control"; input.dataset.extraLabel = extra.label; input.dataset.extraSection = extra.section;
    label.append(input); row.append(label, button("Remove", () => row.remove()));
    (document.getElementById(extra.section) || panel)?.append(row); return input;
  }
  const extras = read<Extra[]>(`${prefix}:extras`, []);
  if (Array.isArray(extras)) extras.forEach(extraField);
  const removedBlocks = new Set(read<string[]>(`${prefix}:removed-blocks`, []));
  const blocks = panel.querySelectorAll<HTMLElement>(".accordion-item, .single__portfolio, .skill__tags li, .cv__included .single__item");
  function removeBlock(block: HTMLElement) {
    const id = block.dataset.dashboardBlock!;
    if (!write(`${prefix}:removed-blocks`, [...removedBlocks, id])) return;
    removedBlocks.add(id); block.hidden = true;
    block.querySelectorAll<Field>("input,textarea,select").forEach(field => { field.disabled = true; });
  }
  blocks.forEach((block, i) => {
    block.dataset.dashboardBlock = String(i);
    if (removedBlocks.has(String(i))) { block.hidden = true; block.querySelectorAll<Field>("input,textarea,select").forEach(field => { field.disabled = true; }); }
    const icon = block.querySelector<HTMLElement>(".fa-xmark");
    if (icon && !icon.closest("button")) icon.parentElement?.replaceWith(button("Remove", () => removeBlock(block)));
    block.querySelector<HTMLButtonElement>(".single__portfolio > button")?.setAttribute("aria-label", "Remove portfolio");
  });
  const addSkill = panel.querySelector<HTMLElement>(".skill__item__add");
  if (addSkill) addSkill.replaceWith(button("Add skill", () => extraField({ name: `extra-${crypto.randomUUID()}`, label: "Skill", type: "text", value: "", section: "education-1" }).focus()));
  function values() {
    const result: Record<string, string> = {};
    panel!.querySelectorAll<Field>("input, textarea, select").forEach((field, i) => {
      if (field instanceof HTMLInputElement && ["password", "file", "hidden"].includes(field.type)) return;
      result[field.id || field.name || `field-${i}`] = field.value;
    });
    return result;
  }
  function saveProfile() {
    // Fields outside the original form must participate in validation too.
    const invalid = Array.from(panel!.querySelectorAll<Field>("input,textarea,select")).find(field => {
      if (field.disabled) return false;
      if (field.closest(".accordion-collapse:not(.show)")) return field.value !== "" && !field.checkValidity();
      return !field.checkValidity();
    });
    if (invalid) { invalid.reportValidity(); return; }
    const extraValues = Array.from(panel!.querySelectorAll<HTMLInputElement>("[data-extra-label]")).map(input => ({
      name: input.name, label: input.dataset.extraLabel!, type: input.type, value: input.value, section: input.dataset.extraSection!,
    }));
    if (write(`${prefix}:extras`, extraValues) && write(draftKey, values())) notify("Your changes have been saved in this browser.");
  }
  if (pathname === "/candidate-resume") {
    const save = button("Save Resume", saveProfile); save.classList.add("mt-4"); panel.append(save);
  }

  // Persist edits/deletions of sample rows using stable positions in each route.
  const rowSelector = ".single__applied__job, .single__shortlist__item, .single__data__table, .single__meeting__item";
  const rows = Array.from(panel.querySelectorAll<HTMLElement>(rowSelector));
  const removed = new Set(read<string[]>(`${prefix}:removed`, []));
  const edits = read<Record<string, string>>(`${prefix}:edits`, {});
  const titleOf = (row: Element) => row.querySelector<HTMLElement>("h6, .data__title, h5");
  rows.forEach((row, i) => {
    row.dataset.dashboardRow = String(i);
    if (edits[i]) { const title = titleOf(row); if (title) title.textContent = edits[i]; }
    const actions = Array.from(row.querySelectorAll<HTMLButtonElement>(".action__btn, .action__item, .action__item__long"));
    actions.forEach((control, j) => {
      let action = "view";
      if (/download/i.test(text(control))) action = "download";
      else if (/create meeting/i.test(text(control))) action = "meeting";
      else if (control.querySelector('[fill="#FF5757"], [stroke="#FF5757"]') || j === actions.length - 1 && actions.length > 1) action = "delete";
      else if (control.querySelector('svg[width="19"]')) action = "edit";
      else if (control.querySelector(".notification__item")) action = "message";
      else if (control.querySelector('svg[width="24"]')) action = "shortlist";
      control.dataset.dashboardAction = action;
      control.type = "button";
      control.setAttribute("aria-label", `${action[0].toUpperCase() + action.slice(1)} ${text(titleOf(row)) || "record"}`);
    });
  });
  let query = "", category = "", currentPage = 1;
  const pageSize = 3;
  const pagination = Array.from(panel.querySelectorAll<HTMLElement>(".rts__pagination"));
  const summary = document.createElement("p"); summary.className = "text-muted mt-3"; summary.setAttribute("role", "status");
  if (rows.length) (panel.querySelector(".job__filter") || panel.firstElementChild)?.after(summary);
  function filterRows() {
    const matching = rows.filter(row => !removed.has(row.dataset.dashboardRow!) && text(row).toLowerCase().includes(query) && (!category || text(row).toLowerCase().includes(category)));
    const groups = new Map<Element, HTMLElement[]>();
    matching.forEach(row => { const group = row.closest(".tab-pane") || panel!; groups.set(group, [...(groups.get(group) || []), row]); });
    const totalPages = Math.max(1, ...Array.from(groups.values(), group => Math.ceil(group.length / pageSize))); currentPage = Math.min(currentPage, totalPages);
    const visible = new Set(Array.from(groups.values()).flatMap(group => {
      const page = Math.min(currentPage, Math.ceil(group.length / pageSize));
      return group.slice((page - 1) * pageSize, page * pageSize);
    }));
    rows.forEach(row => { row.hidden = !visible.has(row); });
    summary.textContent = matching.length ? `${matching.length} records · Page ${currentPage} of ${totalPages}` : "No records match your filters.";
    pagination.forEach(nav => {
      nav.replaceChildren(); nav.setAttribute("aria-label", "Dashboard pagination");
      for (let n = 1; n <= totalPages; n++) {
        const control = button(String(n), () => { currentPage = n; filterRows(); });
        control.classList.add("mx-1"); if (n === currentPage) control.setAttribute("aria-current", "page"); nav.append(control);
      }
    });
  }
  if (rows.length) filterRows(); else pagination.forEach(nav => { nav.hidden = true; });

  // Locally posted jobs remain drafts and can be reviewed, edited and removed.
  const jobsKey = "jobpath:dashboard:jobs";
  const meetingsKey = `jobpath:dashboard:meetings:${pathname.startsWith("/employer") ? "employer" : "candidate"}`;
  if (pathname.endsWith("meeting")) {
    const section = document.createElement("section"); section.className = "bg-white radius-16 p-4 mb-4 jobpath-meeting-drafts";
    const render = () => {
      section.replaceChildren(); const heading = document.createElement("h5"); heading.textContent = "Your meeting drafts (this browser)"; section.append(heading);
      const meetings = read<{ id: string; details: string }[]>(meetingsKey, []);
      if (!meetings.length) { const p = document.createElement("p"); p.textContent = "No meeting drafts yet. Create one from Recent Applicants."; section.append(p); }
      meetings.forEach(meeting => {
        const row = document.createElement("div"); row.className = "border-top py-3";
        const details = document.createElement("p"); details.textContent = meeting.details;
        row.append(details, button("Delete meeting draft", () => { if (write(meetingsKey, meetings.filter(item => item.id !== meeting.id))) render(); })); section.append(row);
      });
    }; render(); panel.prepend(section);
  }
  if (pathname === "/employer-dash-job") {
    const section = document.createElement("section"); section.className = "bg-white radius-16 p-4 mb-4 jobpath-job-drafts";
    const render = () => {
      section.replaceChildren(); const heading = document.createElement("h5"); heading.textContent = "Your job drafts (this browser)"; section.append(heading);
      const jobs = read<Job[]>(jobsKey, []);
      if (!jobs.length) { const p = document.createElement("p"); p.textContent = "No job drafts yet. Use Post Job to create one."; section.append(p); }
      jobs.forEach(job => {
        const row = document.createElement("div"); row.className = "border-top py-3 d-flex gap-2 align-items-center flex-wrap";
        const name = document.createElement("strong"); name.className = "me-auto"; name.textContent = job.values.jt;
        row.append(name, button("View", () => dialog(job.values.jt, `${job.values.cname}\n\n${job.values.jd}\n\n${job.values.pr}\nDeadline: ${job.values.ad}`)),
          button("Edit", () => { if (write(draftKey.replace("employer-dash-job", "employer-dash-jobpost"), job.values) && write("jobpath:dashboard:editing-job", job.id)) navigate("/employer-dash-jobpost"); }),
          button("Delete", () => { if (write(jobsKey, jobs.filter(item => item.id !== job.id))) render(); })); section.append(row);
      });
    }; render(); panel.prepend(section);
  }

  // Conversation drafts are stored separately for each recipient and account role.
  const messageForm = panel.querySelector<HTMLFormElement>(".input__msg form");
  const chat = panel.querySelector<HTMLElement>(".chat__content");
  const chatHeading = panel.querySelector<HTMLElement>(".chat__header h6");
  let recipient = text(panel.querySelector(".single__chat__person h6")) || text(chatHeading) || "John Smith";
  if (chatHeading) chatHeading.textContent = recipient;
  const initialRecipient = recipient;
  const sampleMessages = Array.from(chat?.querySelectorAll<HTMLElement>(".msg") || []);
  const readPeople = new Set(read<string[]>(`${prefix}:read`, []));
  let messageFilter = "All";
  function renderMessages() {
    if (!chat) return;
    chat.querySelectorAll(".jobpath-draft-message, .jobpath-conversation-note").forEach(node => node.remove());
    sampleMessages.forEach(message => { message.hidden = recipient !== initialRecipient; });
    const composer = chat.querySelector(".input__msg");
    const note = document.createElement("p"); note.className = "jobpath-conversation-note"; note.textContent = "Local conversation preview. Messages are saved as drafts and are not delivered."; chat.insertBefore(note, composer);
    const messages = read<string[]>(`${prefix}:messages:${recipient}`, []);
    messages.forEach(message => { const p = document.createElement("p"); p.className = "jobpath-draft-message bg-light p-3 rounded-3"; p.textContent = `${message} (draft)`; chat.insertBefore(p, composer); });
  }
  function filterPeople() {
    panel!.querySelectorAll<HTMLElement>(".single__chat__person").forEach(person => {
      const name = text(person.querySelector("h6")); const isRead = readPeople.has(name) || !person.querySelector(".count");
      person.hidden = !name.toLowerCase().includes(query) || (messageFilter === "Unread" && isRead) || (messageFilter === "Read" && !isRead);
    });
  }
  if (messageForm) { messageForm.querySelector("button")?.setAttribute("aria-label", "Save message draft"); renderMessages(); }
  panel.querySelectorAll<HTMLElement>(".single__chat__person").forEach(person => { person.tabIndex = 0; person.setAttribute("role", "button"); person.setAttribute("aria-label", `Conversation with ${text(person.querySelector("h6"))}`); });
  panel.addEventListener("keydown", event => {
    if (event.target instanceof HTMLElement && event.target.matches(".single__chat__person") && ["Enter", " "].includes(event.key)) { event.preventDefault(); event.target.click(); }
  }, { signal: abort.signal });

  panel.addEventListener("input", event => {
    const field = event.target;
    if (field instanceof HTMLInputElement && field.closest(".search__job")) { query = field.value.trim().toLowerCase(); currentPage = 1; filterRows(); filterPeople(); }
  }, { signal: abort.signal });
  panel.addEventListener("change", event => {
    const field = event.target;
    if (field instanceof HTMLSelectElement && field.matches(".filter__select")) { category = field.value.toLowerCase(); currentPage = 1; filterRows(); }
    if (field instanceof HTMLInputElement && field.type === "file" && field.files?.[0]) {
      const file = field.files[0];
      if (file.size > 10 * 1024 * 1024) { field.value = ""; notify("Choose a file smaller than 10 MB."); return; }
      if (messageForm) { notify(`Attachment selected: ${file.name}. Files are not uploaded in this preview.`); return; }
      const label = field.parentElement?.querySelector("label");
      if (label) label.textContent = `${file.name} selected (session only)`;
      notify("File selected for this session. File storage requires a backend.");
    }
  }, { signal: abort.signal });

  function submit(event: Event) {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || !panel!.contains(form)) return;
    event.preventDefault(); event.stopImmediatePropagation();
    if (/deleteprofile$/.test(pathname)) { notify("Account deletion requires an authentication service. No account or browser draft was deleted."); return; }
    if (/passwordchange$/.test(pathname)) {
      const next = form.querySelector<HTMLInputElement>("#Newpassword"), confirmation = form.querySelector<HTMLInputElement>("#Retypepassword");
      if (next && confirmation && next.value !== confirmation.value) { notify("New passwords do not match."); return; }
      notify("Password changes require an authentication service. No password was saved."); return;
    }
    if (form === messageForm) {
      const input = form.querySelector<HTMLInputElement>('input[type="text"]'); const value = input?.value.trim();
      if (!value) return;
      const key = `${prefix}:messages:${recipient}`;
      if (write(key, [...read<string[]>(key, []), value])) { input!.value = ""; renderMessages(); notify("Message draft saved in this browser. It has not been sent."); } return;
    }
    if (pathname === "/employer-dash-jobpost") {
      const invalid = Array.from(panel!.querySelectorAll<Field>("input,textarea,select")).find(field => !field.checkValidity());
      if (invalid) { invalid.reportValidity(); return; }
      const jobValues = values(), editing = read<string>("jobpath:dashboard:editing-job", "");
      const jobs = read<Job[]>(jobsKey, []); const id = editing || crypto.randomUUID();
      if (write(jobsKey, [...jobs.filter(job => job.id !== id), { id, values: jobValues }])) {
        localStorage.removeItem("jobpath:dashboard:editing-job"); localStorage.removeItem(draftKey);
        navigate("/employer-dash-job"); notify("Job draft saved in this browser. It has not been published.");
      } return;
    }
    saveProfile();
  }
  document.addEventListener("submit", submit, options);
  document.addEventListener("click", event => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target || !panel.contains(target)) return;
    const control = target.closest<HTMLElement>("button, a, [role=button]");
    const label = text(control);
    const stop = () => { event.preventDefault(); event.stopImmediatePropagation(); };
    if (control?.dataset.dashboardAction) {
      stop(); const row = control.closest<HTMLElement>(rowSelector)!; const id = row.dataset.dashboardRow!; const title = text(titleOf(row)) || "Record";
      switch (control.dataset.dashboardAction) {
        case "delete": if (write(`${prefix}:removed`, [...removed, id])) { removed.add(id); filterRows(); notify("Record removed from this browser preview."); } break;
        case "edit": dialog(`Edit ${title}`, title, value => { if (!value) return; if (write(`${prefix}:edits`, { ...edits, [id]: value })) { edits[id] = value; const heading = titleOf(row); if (heading) heading.textContent = value; filterRows(); } }); break;
        case "download": download(`${title}-cv.txt`, `${text(row.querySelector(".author__info"))}\n\nSample candidate profile from the Jobpath template.`); break;
        case "meeting": dialog(`Meeting draft with ${title}`, `${title}\nDate and time: \nMeeting URL: `, details => {
          if (write(meetingsKey, [...read<{ id: string; details: string }[]>(meetingsKey, []), { id: crypto.randomUUID(), details }])) { navigate("/employer-dash-meeting"); notify("Meeting draft saved. No invitation has been sent."); }
        }); break;
        case "shortlist": {
          const key = `${prefix}:shortlisted`; const saved = read<string[]>(key, []); const active = !saved.includes(id);
          if (write(key, active ? [...saved, id] : saved.filter(item => item !== id))) { control.setAttribute("aria-pressed", String(active)); notify(active ? "Candidate shortlisted in this browser." : "Candidate removed from this browser shortlist."); } break;
        }
        case "message": navigate(pathname.startsWith("/employer") ? "/employer-dash-message" : "/candidate-message"); break;
        default: dialog(title, `${text(row)}\n\nSample record. Meeting links, payments and live account data require a backend.`);
      } return;
    }
    if (control && /^(save (profile|resume|job)|post job)$/i.test(label)) { stop(); if (pathname.endsWith("jobpost")) panel.querySelector("form")?.requestSubmit(); else saveProfile(); return; }
    if (control && /^delete profile$/i.test(label)) { stop(); notify("Account deletion requires an authentication service. No account or browser draft was deleted."); return; }
    if (control && /^cancel$/i.test(label)) { stop(); navigate(pathname.startsWith("/employer") ? "/employer-dashboard" : "/candidate-dashboard"); return; }
    if (control && /^add (skill|portfolio|award|another network|another member)$/i.test(label)) {
      stop(); const section = control.closest("[id]")?.id || "social";
      extraField({ name: `extra-${crypto.randomUUID()}`, label: label.replace(/^add /i, ""), type: /portfolio|network/i.test(label) ? "url" : "text", value: "", section }).focus(); return;
    }
    if (control && (/^remove (education|experience|award|member)$/i.test(label) || control.closest(".single__portfolio"))) {
      stop(); const row = control.closest<HTMLElement>("[data-dashboard-block]"); if (row) removeBlock(row); return;
    }
    if (control?.closest(".message__filter")) { stop(); messageFilter = label; panel.querySelectorAll(".message__filter a").forEach(a => a.classList.toggle("active", text(a) === label)); filterPeople(); return; }
    const person = target.closest(".single__chat__person");
    if (person) {
      stop(); recipient = text(person.querySelector("h6")); readPeople.add(recipient); write(`${prefix}:read`, [...readPeople]);
      if (chatHeading) chatHeading.textContent = recipient;
      panel.querySelectorAll(".single__chat__person").forEach(p => { if (text(p.querySelector("h6")) === recipient) p.querySelector(".count")?.remove(); });
      renderMessages(); filterPeople(); return;
    }
    if (control?.matches(".action__operation")) { stop(); dialog("Record status", `${label}\n\nThis is sample status data. Live applications, payments and subscriptions require backend integration.`); }
  }, options);
  return () => { abort.abort(); dialogs.forEach(modal => modal.remove()); };
}
