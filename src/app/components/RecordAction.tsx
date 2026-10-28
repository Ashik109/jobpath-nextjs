"use client";

import type { DetailRecord } from "@/data/details";
import { notify, saveRecord, useSavedRecords, type SavedGroup } from "@/lib/saved-records";

export default function RecordAction({ record, action, className, children }: {
  record: DetailRecord;
  action: SavedGroup | "download";
  className?: string;
  children: React.ReactNode;
}) {
  const group = action === "download" ? "shortlist" : action;
  const saved = useSavedRecords(group).some(item => item.kind === record.kind && item.slug === record.slug);
  function activate() {
    if (action === "download") {
      const content = [record.title, record.category, record.location, "", record.description, "", "Skills", ...record.tags, "", "Sample profile from the Jobpath template."].join("\n");
      const url = URL.createObjectURL(new Blob([content], { type: "text/plain;charset=utf-8" }));
      const anchor = document.createElement("a");
      anchor.href = url; anchor.download = `${record.slug}-cv.txt`; anchor.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      return;
    }
    if (action === "applications" && saved) return;
    saveRecord(action, record, saved);
    notify(saved ? "Removed from your saved list." : action === "applications" ? "Application saved in this browser. No application has been sent to an employer." : "Saved in this browser.");
  }
  const label = saved && action !== "download" ? action === "applications" ? "Application Saved" : action === "following" ? "Following" : "Shortlisted" : children;
  return <button type="button" className={className} onClick={activate} aria-pressed={action === "download" ? undefined : saved}>{label}</button>;
}
