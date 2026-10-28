"use client";

import Link from "next/link";
import { Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getDetails, type DetailKind, type DetailRecord } from "@/data/details";
import { originalCards } from "./original-cards";

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const pageSize = 6;

function ResultCard({ record, list }: { record: DetailRecord; list?: boolean }) {
  const href = `/${record.kind}/${record.slug}`;
  if (record.kind === "blog") return <article className="rts__single__blog blog__style__four">
    <Link href={href} className="blog__img"><img src={record.image} alt={record.title} className="rounded-3" /></Link>
    <div className="blog__meta">
      <div className="blog__meta__info d-flex gap-3 my-3"><span>{record.date}</span><span>{record.author}</span></div>
      <Link href={href} className="h6 fw-semibold">{record.title}</Link>
      <Link href={href} className="readmore__btn d-flex mt-3 gap-2 align-items-center">Read More <i className="fa-light fa-arrow-right" /></Link>
    </div>
  </article>;
  if (record.kind === "candidate") return <article className={`rts__author__card style__default d-flex gap-3 ${list ? "flex-row align-items-center" : "flex-column align-items-center text-center"}`}>
    <Link className="author_icon" href={href}><img src={record.image} alt={record.title} width={80} height={80} className="rounded-circle" /></Link>
    <div className="job__meta w-100 d-flex flex-column gap-3">
      <div><Link href={href} className="job__title h6 mb-0">{record.title}</Link><p className="mt-2 mb-0">{record.category}</p></div>
      <div className="d-flex gap-3 flex-wrap"><span><i className="fa-light fa-location-dot" /> {record.location}</span><span>{record.employmentType}</span></div>
      <div className="job__tags d-flex flex-wrap gap-2">{record.tags.map((tag, tagIndex) => <span className="job__tag" key={`${tag}-${tagIndex}`}>{tag}</span>)}</div>
      <Link href={href} className="rts__btn no__fill__btn">View Profile</Link>
    </div>
  </article>;
  const DefaultCard = originalCards[record.kind === "employer" ? "employer-1" : "job-list-1"].Grid;
  return <DefaultCard record={record} />;
}

function Results({ kind, tabs }: { kind: DetailKind; tabs: boolean }) {
  const params = useSearchParams();
  const pathname = usePathname();
  const original = originalCards[pathname.slice(1) as keyof typeof originalCards];
  const router = useRouter();
  const query = normalize(params.get("q") || "");
  const location = normalize(params.get("location") || "");
  const employmentType = normalize(params.get("type") || "");
  const company = normalize(params.get("company") || "");
  const sort = params.get("sort") || "default";
  const filtered = getDetails(kind).filter(record => (!query || normalize([record.title, record.category, record.description, ...record.tags].join(" ")).includes(query)) && (!location || normalize(record.location).includes(location)) && (!employmentType || normalize(record.employmentType) === employmentType) && (!company || normalize(record.company).includes(company)));
  if (sort === "title") filtered.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "title-desc") filtered.sort((a, b) => b.title.localeCompare(a.title));
  const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = Math.min(pages, Math.max(1, Math.floor(Number(params.get("page"))) || 1));
  const visible = filtered.slice((current - 1) * pageSize, current * pageSize);
  function pathFor(page: number) { const next = new URLSearchParams(params.toString()); next.set("page", String(page)); return `${pathname}?${next}`; }
  const cards = (list = false) => {
    const Card = original ? list ? original.List : original.Grid : ResultCard;
    return <div className={original?.row || "row g-30"}>
      {visible.map(record => <div className={original ? list ? original.listColumn : original.gridColumn : list ? "col-12" : "col-md-6"} key={record.slug}><Card record={record} list={list} /></div>)}
    </div>;
  };
  return <section className="jobpath-catalog-results" aria-label={`${kind} search results`}>
    <div className="d-flex align-items-center justify-content-between gap-3 mb-4 flex-wrap">
      <p className="mb-0" role="status">{filtered.length ? `Showing ${(current - 1) * pageSize + 1}–${Math.min(current * pageSize, filtered.length)} of ${filtered.length} results` : "No results match your search."}</p>
      <label className="d-flex align-items-center gap-2">Sort by
        <select className="form-select" aria-label="Sort results" value={sort} onChange={event => { const next = new URLSearchParams(params.toString()); next.set("sort", event.target.value); next.delete("page"); router.push(`${pathname}?${next}`); }}>
          <option value="default">Default</option><option value="title">Name: A–Z</option><option value="title-desc">Name: Z–A</option>
        </select>
      </label>
    </div>
    {!visible.length && <Link href={pathname} className="rts__btn no__fill__btn">Clear filters</Link>}
    {tabs ? <div className="tab-content" id="myTabContent"><div className={original?.gridPane || "tab-pane fade show active"} role="tabpanel" id="grid">{cards()}</div><div className={original?.listPane || "tab-pane fade"} role="tabpanel" id="list">{cards(true)}</div></div> : cards()}
    {pages > 1 && <nav className="rts__pagination pt-40" aria-label="Results pagination"><ul className="d-flex gap-2">
      {Array.from({ length: pages }, (_, i) => <li key={i}><Link href={pathFor(i + 1)} className={current === i + 1 ? "active" : ""} aria-current={current === i + 1 ? "page" : undefined}>{i + 1}</Link></li>)}
    </ul></nav>}
  </section>;
}

export default function CatalogResults({ kind, tabs = false }: { kind: DetailKind; tabs?: boolean }) {
  return <Suspense fallback={<p>Loading results…</p>}><Results kind={kind} tabs={tabs} /></Suspense>;
}
