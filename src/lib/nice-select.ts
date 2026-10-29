let library: Promise<JQueryStatic> | undefined;

async function loadNiceSelect() {
  if (!library) library = import("jquery").then(async ({ default: $ }) => {
    window.jQuery = $;
    await import("jquery-nice-select");
    return $;
  });
  return library;
}

type Entry = { signature: string; dropdown: HTMLElement; style: string | null; tabindex: string | null; hidden: string | null };
let nextId = 0;

function signature(select: HTMLSelectElement) {
  return JSON.stringify([select.selectedIndex, select.disabled, select.className, Array.from(select.options).map(option => [option.value, option.text, option.selected, option.disabled])]);
}

export async function mountNiceSelects(signal: AbortSignal) {
  const $ = await loadNiceSelect();
  if (signal.aborted) return () => {};
  const entries = new Map<HTMLSelectElement, Entry>();
  let frame = 0;
  let disposed = false;

  function decorate(select: HTMLSelectElement, dropdown: HTMLElement) {
    const label = select.getAttribute("aria-label") || select.labels?.[0]?.textContent?.trim() || select.name || "Select an option";
    dropdown.setAttribute("role", "combobox");
    dropdown.setAttribute("aria-label", label);
    dropdown.setAttribute("aria-haspopup", "listbox");
    dropdown.setAttribute("aria-expanded", String(dropdown.classList.contains("open")));
    dropdown.setAttribute("aria-disabled", String(select.disabled));
    dropdown.setAttribute("aria-required", String(select.required));
    if (select.validity.valid) dropdown.removeAttribute("aria-invalid");
    dropdown.querySelector<HTMLElement>(".list")?.setAttribute("role", "listbox");
    const list = dropdown.querySelector<HTMLElement>(".list");
    if (list) {
      list.id ||= `jobpath-select-${++nextId}`;
      dropdown.setAttribute("aria-controls", list.id);
    }
    dropdown.querySelectorAll<HTMLElement>(".option").forEach((option, index) => {
      option.setAttribute("role", "option");
      option.setAttribute("aria-selected", String(select.options[index]?.selected || false));
      option.setAttribute("aria-disabled", String(select.options[index]?.disabled || false));
    });
  }

  function remove(select: HTMLSelectElement, entry: Entry) {
    $(select).off(".jobpathNiceSelect").niceSelect("destroy");
    entry.dropdown.remove();
    for (const [name, value] of [["style", entry.style], ["tabindex", entry.tabindex], ["aria-hidden", entry.hidden]] as const) {
      if (value === null) select.removeAttribute(name); else select.setAttribute(name, value);
    }
    entries.delete(select);
  }

  function synchronize() {
    frame = 0;
    if (disposed) return;
    entries.forEach((entry, select) => { if (!select.isConnected) remove(select, entry); });
    const added: HTMLSelectElement[] = [];
    document.querySelectorAll<HTMLSelectElement>("select").forEach(select => {
      const entry = entries.get(select);
      if (!entry) {
        const previous = { style: select.getAttribute("style"), tabindex: select.getAttribute("tabindex"), hidden: select.getAttribute("aria-hidden") };
        $(select).niceSelect();
        const dropdown = select.nextElementSibling as HTMLElement;
        entries.set(select, { ...previous, dropdown, signature: signature(select) });
        select.setAttribute("tabindex", "-1");
        select.setAttribute("aria-hidden", "true");
        $(select).on("change.jobpathNiceSelect", event => {
          // jQuery change events must also reach React's delegated onChange handlers.
          if (!event.originalEvent) select.dispatchEvent(new Event("change", { bubbles: true }));
          schedule();
        });
        added.push(select);
      } else if (entry.signature !== signature(select)) {
        $(select).niceSelect("update");
        entry.dropdown = select.nextElementSibling as HTMLElement;
        entry.signature = signature(select);
      }
      const current = entries.get(select)!;
      decorate(select, current.dropdown);
    });
    if (added.length) {
      // Preserve option indices, including template options that share the same value.
      $(document).off("click.nice_select", ".nice-select .option:not(.disabled)");
    }
    document.body.dataset.niceSelectReady = "true";
  }

  function schedule() { if (!disposed && !frame) frame = requestAnimationFrame(synchronize); }
  function selectOption(event: JQuery.ClickEvent) {
    const option = event.currentTarget as HTMLElement;
    const dropdown = option.closest<HTMLElement>(".nice-select");
    const select = dropdown?.previousElementSibling;
    if (!(select instanceof HTMLSelectElement) || select.disabled) return;
    const index = Array.from(dropdown!.querySelectorAll(".option")).indexOf(option);
    if (index < 0 || select.options[index].disabled) return;
    select.selectedIndex = index;
    dropdown!.querySelectorAll(".option").forEach((item, i) => item.classList.toggle("selected", i === index));
    const current = dropdown!.querySelector(".current");
    if (current) current.textContent = select.options[index].dataset.display || select.options[index].text;
    select.dispatchEvent(new Event("change", { bubbles: true }));
    schedule();
  }

  $(document).on("click.jobpathNiceSelect", ".nice-select .option:not(.disabled)", selectOption);
  // An enclosing label otherwise forwards the click to the hidden select and closes the dropdown.
  $(document).on("click.jobpathNiceSelect", ".nice-select", event => event.preventDefault());
  $(document).on("click.jobpathNiceSelect keydown.jobpathNiceSelect", schedule);
  document.addEventListener("reset", schedule, true);
  const onInvalid = (event: Event) => {
    const select = event.target;
    if (!(select instanceof HTMLSelectElement)) return;
    const entry = entries.get(select);
    if (!entry) return;
    event.preventDefault();
    entry.dropdown.setAttribute("aria-invalid", "true");
    entry.dropdown.focus();
  };
  document.addEventListener("invalid", onInvalid, true);
  const observer = new MutationObserver(schedule);
  observer.observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ["selected", "disabled", "value", "label"] });
  synchronize();
  const cleanup = () => {
    if (disposed) return;
    disposed = true;
    cancelAnimationFrame(frame);
    observer.disconnect();
    document.removeEventListener("reset", schedule, true);
    document.removeEventListener("invalid", onInvalid, true);
    $(document).off(".jobpathNiceSelect");
    entries.forEach((entry, select) => remove(select, entry));
    delete document.body.dataset.niceSelectReady;
    signal.removeEventListener("abort", cleanup);
  };
  signal.addEventListener("abort", cleanup, { once: true });
  if (signal.aborted) cleanup();
  return cleanup;
}
