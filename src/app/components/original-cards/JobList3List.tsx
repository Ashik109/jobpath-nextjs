import Link from "next/link";
import type { DetailRecord } from "@/data/details";

export default function JobList3List({ record }: { record: DetailRecord }) {
  return (
    <div className={"rts__job__card__big style__gradient__two \n                            flex-wrap d-flex justify-content-between align-items-center gap-3"}>
      <div className={"d-flex gap-4 flex-column flex-md-row mb-3 mb-md-0 justify-content-start align-items-center"}>
        <div className={"company__icon"}>
          <img src={record.image} alt={""} />
        </div>
        <div className={"job__meta"}>
          <div className={"d-flex align-items-center gap-3"}>
            <Link href={`/${record.kind}/${record.slug}`} className={"job__title h6"}>
{record.title}
            </Link>
          </div>
          <div className={"d-flex gap-3 flex-wrap gap-lg-4 fw-medium"}>
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
 3 Days Ago
                                            
            </div>
          </div>
        </div>
      </div>
      <div className={"d-flex gap-4 flex-wrap align-items-center"}>
        <div className={"job__tags d-flex flex-wrap gap-3"}>
{record.tags.map((tag, tagIndex) => <a href="#" key={`${tag}-${tagIndex}`}>
{tag}
</a>)}
        </div>
        <div className={"d-flex gap-3 flex-wrap"}>
          <div className={"job__sallery d-flex gap-2 align-items-center"}>
            <i className={"fa-sharp rt-price-tag"}>

            </i>
 $500 
            <span>
Monthly
            </span>
          </div>
          <button className={"apply__btn"}>
Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
