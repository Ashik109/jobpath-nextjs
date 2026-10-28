import type { DetailRecord } from "@/data/details";
import Link from "next/link";

export default function Section2({ detailContent }: { detailContent: DetailRecord }) {
  return (
    <div className={"rts__section pb-120"}>
      <div className={"container"}>
        <div className={"row justify-content-center mb-60"}>
          <div className={"col-xl-6 col-lg-10"}>
            <div className={"rts__section__content text-center"}>
              <h3 className={"rts__section__title section__mb"}>
3 Opening Jobs
              </h3>
              <p className={"rts__section__desc"}>{detailContent.description}</p>
            </div>
          </div>
        </div>
        <div className={"row g-30"}>
          <div className={"col-lg-12"}>
            <div className={"rts__job__card__big style__gradient__two \n                    flex-wrap d-flex justify-content-between align-items-center gap-2"} data-record-slug={"senior-ui-designer-apple"} data-record-kind={"job"} data-record-title={"Senior UI Designer, Apple"} data-record-location={"Newyork, USA"} data-record-type={"Full Time"} data-record-category={"Design"}>
              <div className={"d-flex gap-4 flex-column flex-md-row mb-3 mb-md-0 justify-content-start align-items-center"}>
                <div className={"company__icon"}>
                  <img src={"/assets/img/home-1/company/apple.svg"} alt={""} />
                </div>
                <div className={"job__meta"}>
                  <div className={"d-flex align-items-center gap-3"}>
                    <Link href={"/job/senior-ui-designer-apple"} className={"job__title h6 fw-semibold"} prefetch={false}>
Senior UI Designer, Apple
                    </Link>
                  </div>
                  <div className={"d-flex gap-3 flex-wrap gap-lg-4 fw-medium"}>
                    <div className={"d-flex gap-2 align-items-center"}>
                      <i className={"fa-light fa-location-dot"}>

                      </i>
 Newyork, USA
                                    
                    </div>
                    <div className={"d-flex gap-2 align-items-center"}>
                      <i className={"fa-light rt-briefcase"}>

                      </i>
 Full Time
                                    
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
          </div>
          <div className={"col-lg-12"}>
            <div className={"rts__job__card__big style__gradient__two \n                    flex-wrap d-flex justify-content-between align-items-center gap-2"} data-record-slug={"software-engineer-google"} data-record-kind={"job"} data-record-title={"Software Engineer, Google"} data-record-location={"Newyork, USA"} data-record-type={"Full Time"} data-record-category={"Development"}>
              <div className={"d-flex gap-4 flex-column flex-md-row mb-3 mb-md-0 justify-content-start align-items-center"}>
                <div className={"company__icon"}>
                  <img src={"/assets/img/home-1/company/google.svg"} alt={""} />
                </div>
                <div className={"job__meta"}>
                  <div className={"d-flex align-items-center gap-3"}>
                    <Link href={"/job/software-engineer-google"} className={"job__title h6 fw-semibold"} prefetch={false}>
Software Engineer, Google
                    </Link>
                  </div>
                  <div className={"d-flex gap-3 flex-wrap gap-lg-4 fw-medium"}>
                    <div className={"d-flex gap-2 align-items-center"}>
                      <i className={"fa-light fa-location-dot"}>

                      </i>
 Newyork, USA
                                    
                    </div>
                    <div className={"d-flex gap-2 align-items-center"}>
                      <i className={"fa-light rt-briefcase"}>

                      </i>
 Full Time
                                    
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
                  <a href={"#"}>
React
                  </a>
                  <a href={"#"}>
javascript
                  </a>
                  <a href={"#"}>
web ui
                  </a>
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
          </div>
          <div className={"col-lg-12"}>
            <div className={"rts__job__card__big style__gradient__two \n                    flex-wrap d-flex justify-content-between align-items-center gap-2"} data-record-slug={"web-developer-upwork"} data-record-kind={"job"} data-record-title={"Web Developer, Upwork"} data-record-location={"Newyork, USA"} data-record-type={"Full Time"} data-record-category={"Development"}>
              <div className={"d-flex gap-4 flex-column flex-md-row mb-3 mb-md-0 justify-content-start align-items-center"}>
                <div className={"company__icon"}>
                  <img src={"/assets/img/home-1/company/upwork.svg"} alt={""} />
                </div>
                <div className={"job__meta"}>
                  <div className={"d-flex align-items-center gap-3"}>
                    <Link href={"/job/web-developer-upwork"} className={"job__title h6 fw-semibold"} prefetch={false}>
Web Developer, Upwork
                    </Link>
                  </div>
                  <div className={"d-flex gap-3 flex-wrap gap-lg-4 fw-medium"}>
                    <div className={"d-flex gap-2 align-items-center"}>
                      <i className={"fa-light fa-location-dot"}>

                      </i>
 Newyork, USA
                                    
                    </div>
                    <div className={"d-flex gap-2 align-items-center"}>
                      <i className={"fa-light rt-briefcase"}>

                      </i>
 Full Time
                                    
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
                  <a href={"#"}>
Html
                  </a>
                  <a href={"#"}>
css
                  </a>
                  <a href={"#"}>
php
                  </a>
                </div>
                <div className={"d-flex gap-3 flex-wrap"}>
                  <div className={"job__sallery d-flex gap-2 align-items-center"}>
                    <i className={"fa-sharp rt-price-tag"}>

                    </i>
 $600 
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
          </div>
        </div>
      </div>
    </div>
  );
}
