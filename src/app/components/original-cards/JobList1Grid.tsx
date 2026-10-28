import Link from "next/link";
import type { DetailRecord } from "@/data/details";

export default function JobList1Grid({ record }: { record: DetailRecord }) {
  return (
    <div className={"rts__job__card"}>
      <div className={"d-flex align-items-center justify-content-between"}>
        <div className={"company__icon"}>
          <img src={record.image} alt={""} />
        </div>
        <div className={"featured__option"}>

        </div>
      </div>
      <div className={"d-flex gap-3 flex-wrap mt-4"}>
        <div className={"d-flex gap-1 align-items-center"}>
          <i className={"fa-light fa-location-dot"}>

          </i>
{record.location}
        </div>
        <div className={"d-flex gap-1 align-items-center"}>
          <i className={"fa-light fa-briefcase"}>

          </i>
{record.employmentType}
        </div>
      </div>
      <div className={"h6 job__title my-3"}>
        <Link href={`/${record.kind}/${record.slug}`} aria-label={"job"}>
{record.title}
        </Link>
      </div>
      <p>
{record.cardDescription ?? "Consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit mollitia eum ipsum."}
      </p>
      <div className={"job__tags d-flex flex-wrap gap-2 mt-4"}>
{record.tags.map((tag, tagIndex) => <a href="#" key={`${tag}-${tagIndex}`}>
{tag}
</a>)}
      </div>
    </div>
  );
}
