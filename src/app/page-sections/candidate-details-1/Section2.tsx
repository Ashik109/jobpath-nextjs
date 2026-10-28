import type { DetailRecord } from "@/data/details";
import Link from "next/link";

export default function Section2({ detailContent }: { detailContent: DetailRecord }) {
  return (
    <div className={"rts__section pb-120 overflow-hidden"}>
      <div className={"container"}>
        <div className={"row justify-content-center position-relative"}>
          <div className={"col-xl-6 col-lg-10"}>
            <div className={"rts__section__content text-center mb-60"}>
              <h3 className={"rts__section__title section__mb"}>
Related Candidates
              </h3>
              <p className={"rts__section__desc"}>{detailContent.description}</p>
            </div>
          </div>
        </div>
        <div className={"row g-30"}>
          <div className={"col-lg-12"}>
            <div className={"rts__author__card__big py-3 flex-wrap flex-xl-nowrap style__gradient__two d-flex justify-content-between align-items-center gap-3"} data-record-slug={"elizabeth"} data-record-kind={"candidate"} data-record-title={"Elizabeth"} data-record-location={"Newyork, USA"} data-record-type={"Full Time"} data-record-category={"Software Engineer"}>
              <div className={"d-flex gap-4 flex-column flex-md-row \n                        justify-content-start align-items-md-center align-items-start"}>
                <div className={"author__icon small__thumb"}>
                  <img src={"/assets/img/author/6.svg"} alt={""} />
                </div>
                <div className={"job__meta"}>
                  <div className={"d-flex flex-wrap flex-column flex-md-row gap-2 gap-lg-3 gap-xxl-5"}>
                    <div>
                      <Link href={"/candidate/elizabeth"} className={"job__title mb-0 h6 fw-semibold"} prefetch={false}>
Elizabeth
                      </Link>
                      <span className={"d-block fw-medium"}>
UI Designer
                      </span>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className={"d-flex gap-4 flex-wrap align-items-center"}>
                <div className={"job__tags style__default d-flex flex-wrap gap-3"}>
                  <a href={"#"}>
Creative
                  </a>
                  <a href={"#"}>
User Interface
                  </a>
                </div>
                <button className={"apply__btn"} aria-label={"View Profile"}>
View Profile
                </button>
              </div>
            </div>
          </div>
          <div className={"col-lg-12"}>
            <div className={"rts__author__card__big py-3 flex-wrap flex-xl-nowrap style__gradient__two d-flex justify-content-between align-items-center gap-3"} data-record-slug={"addison-bekar"} data-record-kind={"candidate"} data-record-title={"Addison Bekar"} data-record-location={"Newyork, USA"} data-record-type={"Full Time"} data-record-category={"Software Engineer"}>
              <div className={"d-flex gap-4 flex-column flex-md-row \n                        justify-content-start align-items-md-center align-items-start"}>
                <div className={"author__icon small__thumb"}>
                  <img src={"/assets/img/author/7.svg"} alt={""} />
                </div>
                <div className={"job__meta"}>
                  <div className={"d-flex flex-wrap flex-column flex-md-row gap-2 gap-lg-3 gap-xxl-5"}>
                    <div>
                      <Link href={"/candidate/addison-bekar"} className={"job__title mb-0 h6 fw-semibold"} prefetch={false}>
Addison Bekar
                      </Link>
                      <span className={"d-block fw-medium"}>
Produc t Manager
                      </span>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className={"d-flex gap-4 flex-wrap align-items-center"}>
                <div className={"job__tags style__default d-flex flex-wrap gap-3"}>
                  <a href={"#"}>
Creative
                  </a>
                  <a href={"#"}>
User Interface
                  </a>
                </div>
                <button className={"apply__btn"} aria-label={"View Profile"}>
View Profile
                </button>
              </div>
            </div>
          </div>
          <div className={"col-lg-12"}>
            <div className={"rts__author__card__big py-3 flex-wrap flex-xl-nowrap style__gradient__two d-flex justify-content-between align-items-center gap-3"} data-record-slug={"anastacia-alice"} data-record-kind={"candidate"} data-record-title={"Anastacia Alice"} data-record-location={"Newyork, USA"} data-record-type={"Full Time"} data-record-category={"Software Engineer"}>
              <div className={"d-flex gap-4 flex-column flex-md-row \n                        justify-content-start align-items-md-center align-items-start"}>
                <div className={"author__icon small__thumb"}>
                  <img src={"/assets/img/author/8.svg"} alt={""} />
                </div>
                <div className={"job__meta"}>
                  <div className={"d-flex flex-wrap flex-column flex-md-row gap-2 gap-lg-3 gap-xxl-5"}>
                    <div>
                      <Link href={"/candidate/anastacia-alice"} className={"job__title mb-0 h6 fw-semibold"} prefetch={false}>
Anastacia Alice
                      </Link>
                      <span className={"d-block fw-medium"}>
Digital Marketer
                      </span>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className={"d-flex gap-4 flex-wrap align-items-center"}>
                <div className={"job__tags style__default d-flex flex-wrap gap-3"}>
                  <Link href={"/blog-1"} prefetch={false}>
Blog Post
                  </Link>
                  <a href={"#"}>
E-books
                  </a>
                </div>
                <button className={"apply__btn"} aria-label={"View Profile"}>
View Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
