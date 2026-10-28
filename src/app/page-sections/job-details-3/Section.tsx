import type { DetailRecord } from "@/data/details";
import RecordAction from "@/app/components/RecordAction";

export default function Section({ detailContent }: { detailContent: DetailRecord }) {
  return (
    <div className={"rts__section"}>
      <div className={"container"}>
        <div className={"row px-3"}>
          <div className={"video__section height-550"}>
            <div className={"video__section__content"}>
              <img src={"/assets/img/pages/video-bg.webp"} alt={""} />
              <a href={"https://www.youtube.com/watch?v=C9U1U15GSlM"} className={"video__play__btn"} title={"Play Video"} data-lightbox={""}>
                <i className={"fa-sharp fa-solid fa-play"}>

                </i>
              </a>
            </div>
          </div>
          <div className={"rts__job__card__big is__video__in bg-transparent p-0 position-relative z-1 flex-wrap justify-content-between  d-flex gap-4 align-items-center"}>
            <div className={"d-flex gap-4 w-100 flex-lg-row flex-column mx-auto mx-md-0 align-items-start align-items-lg-end"}>
              <div className={"company__icon is__height__240 bg-white"}>
                <img className={""} src={detailContent.image} alt={detailContent.company} />
              </div>
              <div className={"job__meta w-100 d-flex text-center text-sm-start flex-column gap-3"}>
                <div className={""}>
                  <h3 className={"job__title h3 mb-0"}>
{detailContent.title}
                  </h3>
                </div>
                <div className={"job__tags d-flex justify-content-center justify-content-sm-start flex-wrap gap-3"}>
                  <a href={"#"}>
Creative
                  </a>
                  <a href={"#"}>
user interface
                  </a>
                  <a href={"#"}>
web ui
                  </a>
                </div>
              </div>
              <div className={"breadcrumb__apply min-fit-content mx-auto mx-sm-0"}>
                <RecordAction record={detailContent} action="applications" className={"rts__btn apply__btn be-1 bg-primary"}>
Apply This Possition
                </RecordAction>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
