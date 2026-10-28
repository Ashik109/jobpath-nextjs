import Link from "next/link";
import type { DetailRecord } from "@/data/details";
export default function Section({ detailContent }: { detailContent: DetailRecord }) {
  return (
    <div className={"rts__section section__padding"}>
      <div className={"container"}>
        <div className={"row g-30"}>
          <div className={"col-lg-7 col-xl-8"}>
            <div className={"rts__job__details"}>
              <div className={"rts__tab active__link mb-30"}>
                <nav>
                  <div className={"nav nav-tabs"}>
                    <a className={"nav-link active"} href={"#all"}>
All
                    </a>
                    <a className={"nav-link"} href={"#description"}>
Job Description
                    </a>
                    <a className={"nav-link"} href={"#responsibility"}>
Responsibilities
                    </a>
                    <a className={"nav-link"} href={"#requirements"}>
Requirements
                    </a>
                    <a className={"nav-link"} href={"#skill"}>
Skill &amp; Experience
                    </a>
                    <a className={"nav-link"} href={"#salary"}>
Salary &amp; Benefits
                    </a>
                  </div>
                </nav>
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
              <div className={"d-flex flex-wrap gap-4 mt-40 mb-30"}>
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
            <div className={"job__location"}>
              <h6 className={"fw-semibold mb-30"}>
Job Location
              </h6>
              <div className={"gmap height-500"}>
                <iframe src={"https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Reacthemes+(ReacThemes)&t=&z=14&ie=UTF8&iwloc=B&output=embed"}>

                </iframe>
              </div>
            </div>
          </div>
          <div className={"col-lg-5 col-xl-4 d-flex flex-column gap-40"}>
            <div className={"job__overview"}>
              <h6 className={"fw-semibold mb-20"}>
Job Overview
              </h6>
              <div className={"job__overview__content"}>
                <ul>
                  <li className={"d-flex flex-wrap gap-3 gap-sm-0 align-items-center justify-content-between"}>
                    <span className={"left-text"}>
                      <i className={"rt-calender"}>

                      </i>
 Date Posted
                    </span>
                    <span className={"text"}>{detailContent.date}</span>
                  </li>
                  <li className={"d-flex flex-wrap gap-3 gap-sm-0 align-items-center justify-content-between"}>
                    <span className={"left-text"}>
                      <i className={"rt-user"}>

                      </i>
 Vacancy
                    </span>
                    <span className={"text"}>
: 5
                    </span>
                  </li>
                  <li className={"d-flex flex-wrap gap-3 gap-sm-0 align-items-center justify-content-between"}>
                    <span className={"left-text"}>
                      <i className={"rt-experience"}>

                      </i>
 Experience
                    </span>
                    <span className={"text"}>{detailContent.experience}</span>
                  </li>
                  <li className={"d-flex flex-wrap gap-3 gap-sm-0 align-items-center justify-content-between"}>
                    <span className={"left-text"}>
                      <i className={"rt-price-tag"}>

                      </i>
 Offered Salary
                    </span>
                    <span className={"text"}>{detailContent.salary}</span>
                  </li>
                  <li className={"d-flex flex-wrap gap-3 gap-sm-0 align-items-center justify-content-between"}>
                    <span className={"left-text"}>
                      <i className={"rt-loading"}>

                      </i>
 Job Deadline
                    </span>
                    <span className={"text"}>
: 01 July 2024
                    </span>
                  </li>
                  <li className={"d-flex flex-wrap gap-3 gap-sm-0 align-items-center justify-content-between"}>
                    <span className={"left-text"}>
                      <i className={"rt-qualification"}>

                      </i>
 Qualification
                    </span>
                    <span className={"text"}>
: Bachelor Degree
                    </span>
                  </li>
                  <li className={"d-flex flex-wrap gap-3 gap-sm-0 align-items-center justify-content-between"}>
                    <span className={"left-text"}>
                      <i className={"fa-sharp fa-thin fa-location-dot"}>

                      </i>
 Location
                    </span>
                    <span className={"text"}>{detailContent.location}</span>
                  </li>
                  <li className={"d-flex flex-wrap gap-3 gap-sm-0 align-items-center justify-content-between"}>
                    <span className={"left-text"}>
                      <i className={"rt-user"}>

                      </i>
 Gender
                    </span>
                    <span className={"text"}>
: Both
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={"video__section "}>
              <h6 className={"mb-30 d-block fw-semibold"}>
Job apply Process video
              </h6>
              <div className={"video__section__content style__two"}>
                <img src={"/assets/img/pages/video-bg.webp"} alt={""} />
                <a href={"https://www.youtube.com/watch?v=C9U1U15GSlM"} className={"video__play__btn"} title={"Play Video"} data-lightbox={""}>
                  <i className={"fa-sharp fa-solid fa-play"}>

                  </i>
                </a>
              </div>
            </div>
            <div className={"job__contact"}>
              <h6 className={"fw-semibold mb-20"}>
Contact apple.com
              </h6>
              <form action={"#"} className={"d-flex flex-column gap-4"}>
                <div className={"search__item"}>
                  <label htmlFor={"gemail"} className={"mb-3 font-20 fw-medium text-dark text-capitalize"}>
Your Email
                  </label>
                  <div className={"position-relative"}>
                    <input type={"email"} id={"gemail"} placeholder={"Enter your email"} />
                    <i className={"rt-mailbox"}>

                    </i>
                  </div>
                </div>
                <div className={"search__item"}>
                  <label htmlFor={"phone"} className={"mb-3 font-20 fw-medium text-dark text-capitalize"}>
Phone
                  </label>
                  <div className={"position-relative"}>
                    <input type={"text"} id={"phone"} placeholder={"(+88)154-678789"} />
                    <i className={"rt-phone"}>

                    </i>
                  </div>
                </div>
                <div className={"search__item"}>
                  <label className={"mb-3 font-20 fw-medium text-dark text-capitalize"} htmlFor={"message"}>
Your Message
                  </label>
                  <textarea name={"message"} id={"message"} placeholder={"Message"}>

                  </textarea>
                  <i className={"fa-thin fa-comment-lines"}>

                  </i>
                </div>
                <button type={"submit"} className={"rts__btn apply__btn w-100"}>
Send a Message
                </button>
              </form>
            </div>
            <div className={"recent__post"}>
              <h6 className={"fw-semibold mb-30"}>
Recent Job Post
              </h6>
              <div className={"d-flex flex-column gap-30"}>
                <div className={"d-flex gap-4 align-items-center flex-sm-row flex-column mx-auto mx-sm-0"}>
                  <div className={"company__icon recent__post"}>
                    <img className={""} src={"/assets/img/home-1/company/apple.svg"} alt={""} />
                  </div>
                  <div className={"job__meta w-100 d-flex text-center text-sm-start flex-column gap-2"}>
                    <div className={""}>
                      <Link href={"/job/senior-ui-designer-apple"} className={"job__title h6 fw-semibold mb-0"} prefetch={false}>
Senior UI Designer, Apple
                      </Link>
                    </div>
                    <div className={"d-flex gap-3 justify-content-center justify-content-sm-start flex-wrap"}>
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
                <div className={"d-flex gap-4 align-items-center flex-sm-row flex-column mx-auto mx-sm-0"}>
                  <div className={"company__icon recent__post"}>
                    <img className={""} src={"/assets/img/home-1/company/amazon.svg"} alt={""} />
                  </div>
                  <div className={"job__meta w-100 d-flex text-center text-sm-start flex-column gap-2"}>
                    <div className={""}>
                      <Link href={"/job/data-analysis-amazon"} className={"job__title h6 fw-semibold mb-0"} prefetch={false}>
Data Analysis, Amazon
                      </Link>
                    </div>
                    <div className={"d-flex gap-3 justify-content-center justify-content-sm-start flex-wrap"}>
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
                <div className={"d-flex gap-4 align-items-center flex-sm-row flex-column mx-auto mx-sm-0"}>
                  <div className={"company__icon recent__post"}>
                    <img className={""} src={"/assets/img/home-1/company/udemy.svg"} alt={""} />
                  </div>
                  <div className={"job__meta w-100 d-flex text-center text-sm-start flex-column gap-2"}>
                    <div className={""}>
                      <Link href={"/job/online-trainer-udemy"} className={"job__title h6 fw-semibold mb-0"} prefetch={false}>
Online Trainer, Udemy
                      </Link>
                    </div>
                    <div className={"d-flex gap-3 justify-content-center justify-content-sm-start flex-wrap"}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
