"use client";

import Link from "next/link";
import { saveRecord, useSavedRecords, type SavedGroup } from "@/lib/saved-records";

export default function SavedRecords({ group }: { group: SavedGroup }) {
  const records = useSavedRecords(group);
  return <section className="bg-white radius-16 p-4 mb-4 jobpath-saved-records">
    <h5>{group === "applications" ? "Your Applications" : group === "following" ? "Companies You Follow" : "Your Shortlist"}</h5>
    <p className="text-muted">Saved in this browser.</p>
    {records.length ? <ul className="list-unstyled m-0">
      {records.map(record => <li key={`${record.kind}:${record.slug}`} className="d-flex align-items-center gap-3 border-top py-3">
        <img src={record.image} alt="" width={48} height={48} />
        <Link className="flex-grow-1" href={`/${record.kind}/${record.slug}`}>{record.title}</Link>
        <button type="button" className="btn btn-outline-secondary" onClick={() => saveRecord(group, record, true)}>Remove</button>
      </li>)}
    </ul> : <p>No saved records yet. <Link href={group === "following" ? "/employer-1" : "/job-list-1"}>Browse opportunities</Link></p>}
  </section>;
}
