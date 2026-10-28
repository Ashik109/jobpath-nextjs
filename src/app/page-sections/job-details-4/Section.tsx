import RecordAction from "@/app/components/RecordAction";
import type { DetailRecord } from "@/data/details";
export default function Section({ detailContent }: { detailContent: DetailRecord }) {
  return (
    <div className={"rts__section section__padding"}>
      <div className={"container"}>
        <div className={"row justify-content-center g-30"}>
          <div className={"col-lg-8"}>
            <div className={"rts__job__details"}>
              <div className={"mb-30"}>
                <img className={"rounded-3"} src={"/assets/img/pages/job-details-4.webp"} alt={""} />
              </div>
              <div className={"job__overview style__four no-border-bottom mb-40"}>
                <h6 className={"fw-semibold mb-30"}>
Job Overview
                </h6>
                <div className={"job__overview__content"}>
                  <ul className={"d-grid grid-style"}>
                    <li className={"d-flex flex-column gap-3 gap-sm-0 align-items-center justify-content-between"}>
                      <div className={"d-flex gap-3"}>
                        <span className={"icon"}>
                          <i className={"rt-calender"}>

                          </i>
                        </span>
                        <div>
                          <span className={"left-text"}>
 Date Posted
                          </span>
                          <span className={"text"}>
10,July, 2023
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className={"d-flex flex-column gap-3 gap-sm-0 align-items-center justify-content-between"}>
                      <div className={"d-flex gap-3"}>
                        <span className={"icon"}>
                          <i className={"fa-light fa-user"}>

                          </i>
                        </span>
                        <div>
                          <span className={"left-text"}>
 Vacancy
                          </span>
                          <span className={"text"}>
5
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className={"d-flex flex-column gap-3 gap-sm-0 align-items-center justify-content-between"}>
                      <div className={"d-flex gap-3"}>
                        <span className={"icon"}>
                          <i className={"rt-experience"}>

                          </i>
                        </span>
                        <div>
                          <span className={"left-text"}>
 Experience
                          </span>
                          <span className={"text"}>
5 Years
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className={"d-flex flex-column gap-3 gap-sm-0 align-items-center justify-content-between"}>
                      <div className={"d-flex gap-3"}>
                        <span className={"icon"}>
                          <i className={"rt-price-tag"}>

                          </i>
                        </span>
                        <div>
                          <span className={"left-text"}>
 Offered Salary
                          </span>
                          <span className={"text"}>
$2000-$3000
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className={"d-flex flex-column gap-3 gap-sm-0 align-items-center justify-content-between"}>
                      <div className={"d-flex gap-3"}>
                        <span className={"icon"}>
                          <i className={"rt-loading"}>

                          </i>
                        </span>
                        <div>
                          <span className={"left-text"}>
 Job Deadline
                          </span>
                          <span className={"text"}>
01 August 2024
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className={"d-flex flex-column gap-3 gap-sm-0 align-items-center justify-content-between"}>
                      <div className={"d-flex gap-3"}>
                        <span className={"icon"}>
                          <i className={"rt-qualification"}>

                          </i>
                        </span>
                        <div>
                          <span className={"left-text"}>
 Qualification
                          </span>
                          <span className={"text"}>
Bachelor Degree
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className={"d-flex flex-column gap-3 gap-sm-0 align-items-center justify-content-between"}>
                      <div className={"d-flex gap-3"}>
                        <span className={"icon"}>
                          <i className={"fa-sharp fa-thin fa-location-dot"}>

                          </i>
                        </span>
                        <div>
                          <span className={"left-text"}>
 Location
                          </span>
                          <span className={"text"}>
New York, USA
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className={"d-flex flex-column gap-3 gap-sm-0 align-items-center justify-content-between"}>
                      <div className={"d-flex gap-3"}>
                        <span className={"icon"}>
                          <i className={"fa-light fa-user"}>

                          </i>
                        </span>
                        <div>
                          <span className={"left-text"}>
 Gender
                          </span>
                          <span className={"text"}>
Both
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div id={"description"} className={"mb-30"}>
                <h6 className={"fw-semibold mb-20"}>
Job Description
                </h6>
                <p>{detailContent.description}</p>
              </div>
              <div id={"responsibility"} className={"mb-30"}>
                <h6 className={"fw-semibold mb-20"}>
Responsibility
                </h6>
                <ul className={"list-style-dot"}>{detailContent.responsibilities.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
              <div id={"requirements"} className={"mb-30"}>
                <h6 className={"fw-semibold mb-20"}>
Requirements
                </h6>
                <ul className={"list-style-dot"}>{detailContent.requirements.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
              <div id={"skill"} className={"mb-30"}>
                <h6 className={"fw-semibold mb-20"}>
Skills and Experience
                </h6>
                <div className={"job__tags job__details__tags"}>
                  <a href={"#"} className={"job__tag"}>
Javascript
                  </a>
                  <a href={"#"} className={"job__tag"}>
user interface
                  </a>
                  <a href={"#"} className={"job__tag"}>
Problem Solving
                  </a>
                </div>
              </div>
              <div id={"salary"} className={"mb-30"}>
                <h6 className={"fw-semibold mb-20"}>
Salary and Benefits
                </h6>
                <ul className={"list-style-dot"}>{detailContent.benefits.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
              <div className={"d-flex flex-wrap gap-4 mt-40 mb-60"}>
                <RecordAction record={detailContent} action="applications" className={"rts__btn apply__btn fill__btn be-1 fw-bold"}>
Apply This Possition
                </RecordAction>
                <div className={"d-flex gap-3 align-items-center"}>
                  <span className={"h6 fw-semibold"}>
Share
                  </span>
                  <div className={"rts__social d-flex gap-3"}>
                    <a href={"https://facebook.com"} aria-label={"facebook"}>
                      <i className={"fa-brands fa-facebook"}>

                      </i>
                    </a>
                    <a href={"https://instagram.com"} aria-label={"instagram"}>
                      <i className={"fa-brands fa-instagram"}>

                      </i>
                    </a>
                    <a href={"https://linkedin.com"} aria-label={"linkedin"}>
                      <i className={"fa-brands fa-linkedin"}>

                      </i>
                    </a>
                    <a href={"https://pinterest.com"} aria-label={"pinterest"}>
                      <i className={"fa-brands fa-pinterest"}>

                      </i>
                    </a>
                    <a href={"https://youtube.com"} aria-label={"youtube"}>
                      <i className={"fa-brands fa-youtube"}>

                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={"job__location__map"}>
              <h5 className={"fw-semibold mb-30"}>
Location
              </h5>
              <div className={"gmap"}>
                <iframe src={"https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Reacthemes+(ReacThemes)&t=&z=14&ie=UTF8&iwloc=B&output=embed"}>

                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
