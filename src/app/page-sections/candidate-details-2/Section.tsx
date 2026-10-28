import Link from "next/link";
import type { DetailRecord } from "@/data/details";
export default function Section({ detailContent }: { detailContent: DetailRecord }) {
  return (
    <div className={"rts__section section__padding"}>
      <div className={"container"}>
        <div className={"row g-30"}>
          <div className={"col-lg-7 col-xl-8"}>
            <div className={"job__overview no-border-bottom mb-30"}>
              <h6 className={"fw-semibold mb-30"}>
Job Overview
              </h6>
              <div className={"job__overview__content candidate__info"}>
                <ul className={"d-grid grid-style"}>
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
                        <i className={"fa-light rt-experience"}>

                        </i>
                      </span>
                      <div>
                        <span className={"left-text"}>
 Experience
                        </span>
                        <span className={"text"}>
2 Year
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
 Offered Salary
                        </span>
                        <span className={"text"}>
$1000-$2000 M
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
New Yourk, USA
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
            <div className={"rts__job__details"}>
              <div id={"description"} className={"mb-30"}>
                <h6 className={"fw-semibold mb-20"}>
About Candidate
                </h6>
                <p>{detailContent.description}</p>
              </div>
              <div id={"responsibility"} className={"mb-30"}>
                <h6 className={"fw-semibold mb-20"}>
Education
                </h6>
                <ul className={"timeline"}>
                  <li>
                    <span className={"timeline__title d-block"}>
California Institute of Technology
                    </span>
                    <span className={"timeline__subtitle d-block"}>
Master of Science in Computer Science   (2014- 2015)
                    </span>
                    <p className={"mt-2 fw-medium"}>
CareerBuilder offers a complete career portal, helping job seekers find better career opportunities and bridge skill gaps through a partnership with Capella Learning Solutions.
                    </p>
                  </li>
                  <li>
                    <span className={"timeline__title d-block"}>
University of California, Berkeley
                    </span>
                    <span className={"timeline__subtitle d-block"}>
B. Sc. in Computer Science and Engineering   (2010- 2014)
                    </span>
                    <p className={"mt-2 fw-medium"}>
CareerBuilder offers a complete career portal, helping job seekers find better career opportunities and bridge skill gaps through a partnership with Capella Learning Solutions.
                    </p>
                  </li>
                  <li>
                    <span className={"timeline__title d-block"}>
University of California, Berkeley
                    </span>
                    <span className={"timeline__subtitle d-block"}>
B. Sc. in Computer Science and Engineering   (2010- 2014)
                    </span>
                    <p className={"mt-2 fw-medium"}>
CareerBuilder offers a complete career portal, helping job seekers find better career opportunities and bridge skill gaps through a partnership with Capella Learning Solutions.
                    </p>
                  </li>
                </ul>
              </div>
              <div id={"experience"} className={"mb-30"}>
                <h6 className={"fw-semibold mb-20 text-capitalize"}>
experience
                </h6>
                <ul className={"timeline"}>
                  <li>
                    <span className={"timeline__title d-block"}>
Software Engineer
                    </span>
                    <span className={"timeline__subtitle d-block"}>
Reactheme   (2016- Present)
                    </span>
                    <p className={"mt-2 fw-medium"}>
Software engineers apply engineering principles and knowledge of programming languages to build software solutions for end users.
                    </p>
                  </li>
                </ul>
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
              <h6 className={"fw-semibold text-capitalize mb-30 mt-30"}>
See My Latest Project
              </h6>
              <div className={"row g-30 row-cols-lg-3 row-cols-md-2 row-col-xl-3 row-cols-1"}>
                <div className={"col"}>
                  <img className={"rounded-2 d-shadow"} src={"/assets/img/pages/p-1.webp"} alt={""} />
                </div>
                <div className={"col"}>
                  <img className={"rounded-2 d-shadow"} src={"/assets/img/pages/p-2.webp"} alt={""} />
                </div>
                <div className={"col"}>
                  <img className={"rounded-2 d-shadow"} src={"/assets/img/pages/p-3.webp"} alt={""} />
                </div>
              </div>
              <h6 className={"fw-semibold text-capitalize mb-30 mt-30"}>
Awward
              </h6>
              <ul className={"timeline"}>
                <li>
                  <span className={"timeline__title d-block"}>
2015 IEEE CS TCSE Distinguished Education Award
                  </span>
                  <span className={"timeline__subtitle d-block"}>
2015
                  </span>
                  <p className={"mt-2 fw-medium"}>
In a world adorned with stars, where excellence glimmers like distant constellations, there exists a singular moment that transcends the ordinary, capturing the essence of brilliance in its purest form.
                  </p>
                </li>
                <li>
                  <span className={"timeline__title d-block"}>
2024 IEEE CS TCSE Rising Star Award
                  </span>
                  <span className={"timeline__subtitle d-block"}>
2014
                  </span>
                  <p className={"mt-2 fw-medium"}>
In a world adorned with stars, where excellence glimmers like distant constellations, there exists a singular moment that transcends the ordinary, capturing the essence of brilliance in its purest form.
                  </p>
                </li>
              </ul>
            </div>
            <div className={"review__form job__contact mt-40"}>
              <h6 className={"fw-semibold mb-30"}>
Add a review
              </h6>
              <form action={"#"} className={"d-flex flex-column gap-4"}>
                <div className={"row row-cols-lg-2 row-cols-1"}>
                  <div className={"search__item"}>
                    <label htmlFor={"remail"} className={"mb-3 font-20 fw-medium text-dark text-capitalize"}>
Your Email
                    </label>
                    <div className={"position-relative"}>
                      <input type={"email"} id={"remail"} placeholder={"Enter your email"} />
                      <i className={"rt-mailbox"}>

                      </i>
                    </div>
                  </div>
                  <div className={"search__item"}>
                    <label htmlFor={"rphone"} className={"mb-3 font-20 fw-medium text-dark text-capitalize"}>
Phone
                    </label>
                    <div className={"position-relative"}>
                      <input type={"text"} id={"rphone"} placeholder={"(+88)154-678789"} />
                      <i className={"rt-phone"}>

                      </i>
                    </div>
                  </div>
                </div>
                <div className={"search__item"}>
                  <label className={"mb-3 font-20 fw-medium text-dark text-capitalize"} htmlFor={"rmessage"}>
Your Message
                  </label>
                  <textarea name={"rmessage"} id={"rmessage"} placeholder={"Message"}>

                  </textarea>
                  <i className={"fa-thin fa-comment-lines"}>

                  </i>
                </div>
                <div className={"d-flex align-items-center gap-3 mt-2 mb-3"}>
                  <span className={"fw-medium text-dark"}>
Your Rating 
                  </span>
                  <div className={"rating"}>
                    <i className={"fa-sharp fa-solid fa-star"}>

                    </i>
                    <i className={"fa-sharp fa-solid fa-star"}>

                    </i>
                    <i className={"fa-sharp fa-solid fa-star"}>

                    </i>
                    <i className={"fa-sharp fa-solid fa-star"}>

                    </i>
                    <i className={"fa-solid fa-star-sharp-half-stroke"}>

                    </i>
                  </div>
                </div>
                <button type={"submit"} className={"rts__btn apply__btn w-100"}>
Submit Review
                </button>
              </form>
            </div>
          </div>
          <div className={"col-lg-5 col-xl-4 d-flex flex-column gap-40"}>
            <div className={"job__contact"}>
              <h6 className={"fw-semibold mb-20"}>
Contact Google.com
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
                  <label htmlFor={"gphone"} className={"mb-3 font-20 fw-medium text-dark text-capitalize"}>
Phone
                  </label>
                  <div className={"position-relative"}>
                    <input type={"text"} id={"gphone"} placeholder={"(+88)154-678789"} />
                    <i className={"rt-phone"}>

                    </i>
                  </div>
                </div>
                <div className={"search__item"}>
                  <label className={"mb-3 font-20 fw-medium text-dark text-capitalize"} htmlFor={"gmessage"}>
Your Message
                  </label>
                  <textarea name={"message"} id={"gmessage"} placeholder={"Message"}>

                  </textarea>
                  <i className={"fa-thin fa-comment-lines"}>

                  </i>
                </div>
                <button type={"submit"} className={"rts__btn apply__btn w-100"}>
Send a Message
                </button>
              </form>
            </div>
            <div className={"job__contact d-flex align-items-center gap-3"}>
              <h6 className={"fw-semibold mb-0"}>
Share
              </h6>
              <div className={"rts__social sidebar d-flex gap-3"}>
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
            <div className={"recent__post"}>
              <h5 className={"fw-bold mb-30"}>
Related Candidates
              </h5>
              <div className={"team__list flex-column d-flex gap-3"}>
                <div className={"border-bottom pb-3 d-flex justify-content-between align-items-center gap-3"}>
                  <div className={"d-flex gap-3 flex-wrap gap-xl-5"}>
                    <div className={"d-flex gap-4 flex-column flex-md-row mb-3 mb-md-0 justify-content-start align-items-start align-items-md-center"}>
                      <div className={"author__icon small__thumb"}>
                        <img src={"/assets/img/author/1.svg"} alt={""} />
                      </div>
                      <div className={"job__meta"}>
                        <div className={"d-flex align-items-start flex-column mb-2"}>
                          <Link href={"/candidate/michael-roy"} className={"job__title mb-0 h6 fw-semibold"} prefetch={false}>
Michael Roy
                          </Link>
                          <span className={"d-block fw-medium"}>
Software Engineer
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
                </div>
                <div className={"border-bottom pb-3 d-flex justify-content-between align-items-center gap-3"}>
                  <div className={"d-flex gap-3 flex-wrap gap-xl-5"}>
                    <div className={"d-flex gap-4 flex-column flex-md-row mb-3 mb-md-0 justify-content-start align-items-start align-items-md-center"}>
                      <div className={"author__icon small__thumb"}>
                        <img src={"/assets/img/author/2.svg"} alt={""} />
                      </div>
                      <div className={"job__meta"}>
                        <div className={"d-flex align-items-start flex-column mb-2"}>
                          <Link href={"/candidate/jack-alexander"} className={"job__title mb-0 h6 fw-semibold"} prefetch={false}>
Jack Alexander 
                          </Link>
                          <span className={"d-block fw-medium"}>
UX Design
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
                </div>
                <div className={"border-bottom-0 d-flex justify-content-between align-items-center gap-3"}>
                  <div className={"d-flex gap-3 flex-wrap gap-xl-5"}>
                    <div className={"d-flex gap-4 flex-column flex-md-row mb-3 mb-md-0 justify-content-start align-items-start align-items-md-center"}>
                      <div className={"author__icon small__thumb"}>
                        <img src={"/assets/img/author/3.svg"} alt={""} />
                      </div>
                      <div className={"job__meta"}>
                        <div className={"d-flex align-items-start flex-column mb-2"}>
                          <Link href={"/candidate/jonathon-doe"} className={"job__title mb-0 h6 fw-semibold"} prefetch={false}>
Jonathon Doe
                          </Link>
                          <span className={"d-block fw-medium"}>
Ui Designer
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
