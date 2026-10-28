import { useSyncExternalStore } from "react";

export type SavedGroup = "shortlist" | "applications" | "following";
export type SavedRecord = { kind: string; slug: string; title: string; image: string };
const key = (group: SavedGroup) => `jobpath:${group}`;
const subscribe = (callback: () => void) => {
  window.addEventListener("jobpath:saved", callback);
  window.addEventListener("storage", callback);
  return () => { window.removeEventListener("jobpath:saved", callback); window.removeEventListener("storage", callback); };
};

export function useSavedRecords(group: SavedGroup): SavedRecord[] {
  const value = useSyncExternalStore(subscribe, () => localStorage.getItem(key(group)) || "[]", () => "[]");
  try { return JSON.parse(value); } catch { return []; }
}

export function saveRecord(group: SavedGroup, record: SavedRecord, remove = false) {
  let records: SavedRecord[] = [];
  try { records = JSON.parse(localStorage.getItem(key(group)) || "[]"); } catch {}
  records = records.filter(item => item.slug !== record.slug || item.kind !== record.kind);
  if (!remove) records.push(record);
  localStorage.setItem(key(group), JSON.stringify(records));
  window.dispatchEvent(new Event("jobpath:saved"));
}

export function notify(message: string) {
  window.dispatchEvent(new CustomEvent("jobpath:notice", { detail: message }));
}
