import Link from "next/link";
import type { DetailRecord } from "@/data/details";

export default function JobList2List({ record }: { record: DetailRecord }) {
  return (
    <div className={"rts__job__card__big style__gradient flex-wrap justify-content-between d-flex gap-4 align-items-center"}>
      <div className={"d-flex flex-wrap flex-md-nowrap flex-lg-wrap flex-xl-nowrap gap-4 align-items-center"}>
        <div className={"company__icon rounded-2"}>
          <img src={record.image} alt={""} />
        </div>
        <div className={"job__meta w-100 d-flex flex-column gap-2"}>
          <div className={"d-flex justify-content-between align-items-center gap-3"}>
            <Link href={`/${record.kind}/${record.slug}`} className={"job__title h6 mb-0"}>
{record.title}
            </Link>
          </div>
          <div className={"d-flex gap-3 gap-md-4 flex-wrap mb-2"}>
            <div className={"d-flex gap-2 align-items-center"}>
              <i className={"fa-light fa-location-dot"}>

              </i>
{record.location}
            </div>
            <div className={"d-flex gap-2 align-items-center"}>
              <i className={"fa-light rt-briefcase"}>

              </i>
{record.employmentType}
            </div>
            <div className={"d-flex gap-2 align-items-center"}>
              <i className={"fa-light fa-clock"}>

              </i>
 1 Years Ago
                                                    
            </div>
          </div>
          <div className={"job__tags d-flex flex-wrap gap-3"}>
{record.tags.map((tag, tagIndex) => <a href="#" key={`${tag}-${tagIndex}`}>
{tag}
</a>)}
          </div>
        </div>
      </div>
      <div>
        <button type={"button"} className={"bookmark__btn"}>
          <i className={"rt-bookmark"}>

          </i>
        </button>
      </div>
    </div>
  );
}
