"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { notify } from "@/lib/saved-records";

type Control = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
const normalize = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const formValues = (root: Element) => {
  const values: Record<string, string> = {};
  root.querySelectorAll<Control>("input, textarea, select").forEach((control, i) => {
    if (control instanceof HTMLInputElement && ["password", "file", "hidden"].includes(control.type)) return;
    values[control.id || control.name || `field-${i}`] = control.value;
  });
  return values;
};

function InteractionController() {
  const pathname = usePathname();
  const params = useSearchParams();
  const router = useRouter();
  const [message, setMessage] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const notice = (event: Event) => {
      setMessage((event as CustomEvent<string>).detail);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setMessage(""), 6500);
    };
    window.addEventListener("jobpath:notice", notice);
    return () => { window.removeEventListener("jobpath:notice", notice); if (timer.current) clearTimeout(timer.current); };
  }, []);

  useEffect(() => {
    let draft: Record<string, string> = {};
    try { draft = JSON.parse(localStorage.getItem(`jobpath:draft:${pathname}`) || "{}"); } catch {}
    const controls = document.querySelectorAll<Control>(".dash__content input, .dash__content textarea, .dash__content select");
    controls.forEach((control, i) => {
      const value = draft[control.id || control.name || `field-${i}`];
      if (value !== undefined && !(control instanceof HTMLInputElement && ["password", "file"].includes(control.type))) control.value = value;
    });
  }, [pathname]);

  useEffect(() => {
    const isListing = /^\/(job-list|candidate-\d|employer-\d|blog-\d)/.test(pathname);
    const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-record-slug]"));
    const query = normalize(params.get("q") || "");
    const location = normalize(params.get("location") || "");
    const type = normalize(params.get("type") || "");
    const company = normalize(params.get("company") || "");
    if (isListing) {
      let matches = 0;
      cards.forEach(card => {
        const valid = (!query || normalize(card.textContent || "").includes(query)) && (!location || normalize(card.dataset.recordLocation || "").includes(location)) && (!type || normalize(card.dataset.recordType || "") === type) && (!company || normalize(card.textContent || "").includes(company));
        const container = card.parentElement?.className.match(/\bcol-/) ? card.parentElement : card;
        container.classList.toggle("jobpath-filtered-out", !valid);
        if (valid) matches++;
      });
      document.getElementById("jobpath-search-summary")?.remove();
      if (query || location || type || company) {
        const notice = document.createElement("p");
        notice.id = "jobpath-search-summary";
        notice.className = "container py-3 jobpath-search-summary";
        notice.setAttribute("role", "status");
        notice.textContent = matches ? "Showing matching results." : "No results match your search. Clear the filters and try again.";
        (document.querySelector(".breadcrumb__background") || document.querySelector("header"))?.after(notice);
      }
    }
    return () => { cards.forEach(card => { card.classList.remove("jobpath-filtered-out"); card.parentElement?.classList.remove("jobpath-filtered-out"); }); document.getElementById("jobpath-search-summary")?.remove(); };
  }, [pathname, params]);

  useEffect(() => {
    const abort = new AbortController();
    function search(form: HTMLFormElement) {
      const values = new URLSearchParams();
      const input = form.querySelector<HTMLInputElement>('input[type="search"], input[type="text"], input:not([type])');
      if (input?.value.trim()) values.set("q", input.value.trim());
      form.querySelectorAll<HTMLSelectElement>("select").forEach(select => {
        const option = select.selectedOptions[0];
        if (!option || select.selectedIndex === 0 || !select.value) return;
        const name = normalize(select.name + " " + select.id + " " + (select.getAttribute("aria-label") || ""));
        if (/location|country|city/.test(name)) values.set("location", option.textContent!.trim());
        else if (/type/.test(name)) values.set("type", option.textContent!.trim());
        else values.set("q", option.textContent!.trim());
      });
      const route = /blog/.test(pathname) ? "/blog-1" : /candidate/.test(pathname) ? "/candidate-1" : /employer/.test(pathname) && !/dash/.test(pathname) ? "/employer-1" : "/job-list-1";
      router.push(`${route}?${values.toString()}`);
    }
    document.addEventListener("submit", event => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      event.preventDefault();
      if (form.closest(".modal")) {
        notify("This template is in preview mode. Connect an authentication service to enable sign-in and password recovery.");
        return;
      }
      if (form.closest(".rts__job__search") || /search/i.test(form.className) || form.querySelector('button[aria-label="Search"]') || /search/i.test(form.querySelector('button[type="submit"]')?.textContent || "")) {
        search(form); return;
      }
      if (form.querySelector('input[type="password"]')) { notify("Password changes require an authentication service."); return; }
      const root = form.closest(".dash__content") || form;
      localStorage.setItem(`jobpath:draft:${pathname}`, JSON.stringify(formValues(root)));
      if (/message/.test(pathname)) {
        const input = form.querySelector<HTMLInputElement>('input[type="text"], textarea, input:not([type])');
        if (input?.value.trim()) {
          const bubble = document.createElement("p"); bubble.className = "jobpath-draft-message bg-light p-3 rounded-3";
          bubble.textContent = input.value; form.before(bubble); input.value = "";
        }
        notify("Message draft saved in this browser. It has not been sent.");
      } else if (/dash|candidate-profile|candidate-resume/.test(pathname)) notify("Your changes have been saved in this browser.");
      else notify("Your draft has been saved in this browser. No email or submission has been sent.");
    }, { signal: abort.signal });

    document.addEventListener("click", event => {
      const target = event.target instanceof Element ? event.target : null;
      const control = target?.closest<HTMLAnchorElement | HTMLButtonElement>('a[href="#"], button');
      if (!control || control.dataset.bsToggle || control.dataset.bsDismiss) return;
      const label = (control.textContent || "").replace(/\s+/g, " ").trim();
      if (control.closest(".is__social")) { event.preventDefault(); notify("Connect an authentication provider to enable social sign-in."); }
      if (/^search (job|blog|employee)$/i.test(label) && control instanceof HTMLAnchorElement) { event.preventDefault(); const form = control.closest("form"); if (form) search(form); }
      if (/^(log out|logout)$/i.test(label)) { event.preventDefault(); router.push("/"); }
      if (/^choose plan$/i.test(label)) { event.preventDefault(); notify("Plan selection is a preview. Connect a payment provider to accept subscriptions."); }
      if (/^save profile$/i.test(label) && !control.closest("form")) {
        event.preventDefault(); const panel = control.closest(".dash__content");
        if (panel) { localStorage.setItem(`jobpath:draft:${pathname}`, JSON.stringify(formValues(panel))); notify("Your profile has been saved in this browser."); }
      }
      if (/^add (skill|portfolio|award|another network|another member)$/i.test(label)) {
        event.preventDefault();
        const row = document.createElement("div"); row.className = "rt-input-group my-3 jobpath-added-field";
        const fieldLabel = document.createElement("label"); fieldLabel.textContent = label.replace(/^add /i, "");
        const field = document.createElement("input"); field.type = /network|portfolio/i.test(label) ? "url" : "text"; field.className = "form-control";
        field.name = `extra-${Date.now()}`; field.placeholder = /network|portfolio/i.test(label) ? "https://" : "Enter details";
        const remove = document.createElement("button"); remove.type = "button"; remove.className = "btn btn-link"; remove.textContent = "Remove"; remove.addEventListener("click", () => row.remove());
        fieldLabel.append(field); row.append(fieldLabel, remove); control.parentElement?.before(row); field.focus();
      }
      if (/^delete profile$/i.test(label)) { event.preventDefault(); localStorage.removeItem(`jobpath:draft:${pathname.replace("deleteprofile", "profile")}`); notify("Browser profile draft cleared. No server account was deleted."); }
      if (control.closest(".rts__pagination")) { event.preventDefault(); notify("All available template results are shown on this page."); }
    }, { signal: abort.signal });
    return () => abort.abort();
  }, [pathname, router]);

  return message ? <div role="status" className="jobpath-notice">{message}<button type="button" aria-label="Dismiss notification" onClick={() => setMessage("")}>×</button></div> : null;
}

export default function Interactions() {
  return <Suspense fallback={null}><InteractionController /></Suspense>;
}
