import Link from "next/link";
import RecordAction from "@/app/components/RecordAction";
import type { DetailRecord } from "@/data/details";
export default function Breadcrumb({ detailContent }: { detailContent: DetailRecord }) {
  return (
    <div className={"rts__section breadcrumb__background"}>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-lg-12 position-relative d-flex justify-content-md-between justify-content-center align-items-center"}>
            <div className={"breadcrumb__area max-content breadcrumb__padding"}>
              <div className={"rts__job__card__big bg-transparent p-0 position-relative z-1 flex-wrap justify-content-between d-flex gap-4 align-items-center"}>
                <div className={"d-flex gap-4 align-items-center flex-md-row flex-column mx-auto mx-md-0"}>
                  <div className={"company__icon rounded-2 bg-white"}>
                    <img className={""} src={detailContent.image} alt={""} />
                  </div>
                  <div className={"job__meta w-100 d-flex text-center text-md-start flex-column gap-2"}>
                    <div className={""}>
                      <h3 className={"job__title fw-bold h3 mb-0"}>{detailContent.title}</h3>
                    </div>
                    <div className={"d-flex gap-3 justify-content-center justify-content-md-start flex-wrap mb-3 mt-2"}>
                      <div className={"d-flex gap-2 align-items-center"}>

                                        {detailContent.category}
                                    
                      </div>
                      <div className={"d-flex gap-2 align-items-center"}>
                        <i className={"fa-light fa-location-dot"}>

                        </i>
 {detailContent.location}
                                    
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"breadcrumb__apply max-content d-flex gap-3 flex-wrap"}>
                <Link href={"/job-list-1?company=" + encodeURIComponent(detailContent.title.replace(/\.(com|inc)$/i, ""))} data-detail-slug={detailContent.slug} data-detail-kind={detailContent.kind} className={"rts__btn apply__btn be-1 fill__btn"}>View Open Jobs</Link>
                <RecordAction record={detailContent} action="following" className="rts__btn no__fill__btn">Follow Company</RecordAction>
              </div>
            </div>
            <div className={"breadcrumb__area__shape d-flex gap-4 justify-content-end align-items-center"}>
              <div className={"shape__one common"}>

              </div>
              <div className={"shape__two common"}>
                <img src={"/assets/img/breadcrumb/shape-2.svg"} alt={""} />
              </div>
              <div className={"shape__three common"}>
                <img src={"/assets/img/breadcrumb/shape-3.svg"} alt={""} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
