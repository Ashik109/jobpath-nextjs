import Link from "next/link";
import type { DetailRecord } from "@/data/details";

export default function Employer1Grid({ record }: { record: DetailRecord }) {
  return (
    <div className={"rts__job__card rounded-2 style__four"}>
      <div className={"company__icon mx-auto rounded-0"}>
        <img src={record.image} alt={""} />
      </div>
      <div className={"h6 job__title mt-3 mb-2"}>
        <Link href={`/${record.kind}/${record.slug}`} aria-label={"job"}>
{record.title}
        </Link>
      </div>
      <p>
{record.category}
      </p>
      <div className={"d-flex justify-content-center gap-3 mt-3"}>
        <div className={"d-flex gap-2 align-items-center"}>
          <i className={"fa-light fa-location-dot"}>

          </i>
{record.location}
        </div>
      </div>
      <Link href={`/job-list-1?company=${encodeURIComponent(record.company.replace(/\.(com|inc)$/i, ""))}`} className={"rts__btn fill__btn rounded-2"}>
{`open Job ${record.openJobs}`}
      </Link>
    </div>
  );
}
