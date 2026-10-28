import RecordAction from "@/app/components/RecordAction";
import type { DetailRecord } from "@/data/details";
export default function Breadcrumb({ detailContent }: { detailContent: DetailRecord }) {
  return (
    <div className={"rts__section breadcrumb__background"}>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-lg-12 position-relative d-flex justify-content-between align-items-center"}>
            <div className={"breadcrumb__area max-content breadcrumb__padding"}>
              <div className={"rts__job__card__big bg-transparent p-0 position-relative z-1 flex-wrap justify-content-between d-flex gap-4 align-items-center"}>
                <div className={"d-flex gap-4 gap-md-5 align-items-center flex-md-row flex-column mx-auto mx-md-0"}>
                  <div className={"author__icon rounded-2"}>
                    <img className={""} src={detailContent.image} alt={""} />
                  </div>
                  <div className={"job__meta w-100 d-flex text-center text-md-start flex-column gap-2"}>
                    <div className={""}>
                      <h3 className={"job__title h3 mb-0"}>{detailContent.title}</h3>
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
                      <div className={"d-flex gap-2 align-items-center"}>
                        <i className={"fa-light rt-briefcase"}>

                        </i>
 {detailContent.employmentType}
                                    
                      </div>
                    </div>
                    <div className={"job__tags d-flex justify-content-center justify-content-md-start flex-wrap gap-3"}>{detailContent.tags.map((tag, tagIndex) => <span className="job__tag" key={`${tag}-${tagIndex}`}>{tag}</span>)}</div>
                  </div>
                </div>
              </div>
              <div className={"breadcrumb__apply d-flex gap-3 max-content"}>
                <RecordAction record={detailContent} action="shortlist" className={"rts__btn apply__btn no__fill__btn"}>
Shortlist
                </RecordAction>
                <RecordAction record={detailContent} action="download" className={"rts__btn be-1 apply__btn fill__btn"}>
Cv Download
                </RecordAction>
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
