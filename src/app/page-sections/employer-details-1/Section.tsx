import Link from "next/link";
import type { DetailRecord } from "@/data/details";
export default function Section({ detailContent }: { detailContent: DetailRecord }) {
  return (
    <div className={"rts__section section__padding"}>
      <div className={"container"}>
        <div className={"row g-30"}>
          <div className={"col-xl-8 col-lg-7"}>
            <div className={"employer__details"}>
              <h6 className={"fw-semibold mb-20"}>
About Company
              </h6>
              <p>{detailContent.description}</p>
              <h6 className={"fw-semibold mb-20 mt-30"}>
We see what you do
              </h6>
              <p>

                            I have personally seen the passion and commitment that every user puts into their work here.
                            Whether it’s a quick powerpoint presentation or a multi-year development project - both
                            talent on Upwork and our clients care about doing really good work because they love what
                            they do.
                            In fact, we designed it that way. Our work marketplace aligns the goals of our clients with
                            the goals of talent on Upwork so that outcomes are better and everyone grows in the same
                            direction. You’ll find tools to develop your skills, evolve your business, and gain the
                            control and freedom you need for success.
                        
              </p>
              <h6 className={"fw-semibold mb-30 mt-30"}>
Our Office Gallery
              </h6>
              <div className={"row g-30 row-cols-lg-2 row-cols-xl-3 row-cols-sm-2 row-cols-1"}>
                <div className={"col"}>
                  <img className={"rounded-2"} src={"/assets/img/pages/g-1.webp"} alt={""} />
                </div>
                <div className={"col"}>
                  <img className={"rounded-2"} src={"/assets/img/pages/g-2.webp"} alt={""} />
                </div>
                <div className={"col"}>
                  <img className={"rounded-2"} src={"/assets/img/pages/g-3.webp"} alt={""} />
                </div>
              </div>
              <h6 className={"fw-semibold mb-30 mt-30"}>
Our Team
              </h6>
              <div className={"row row-cols-xl-3 row-cols-lg-2 row-cols-sm-2 row-cols-1 g-30"}>
                <div className={"col"}>
                  <div className={"team__member text-center"}>
                    <a href={"#"}>
                      <img className={"rounded-3"} src={"/assets/img/team/1.webp"} alt={""} />
                    </a>
                    <div className={"team__member__meta mt-3"}>
                      <Link href={"/candidate/al-amin-bali"} className={"font-20 fw-medium text-dark mb-0 d-block"} prefetch={false}>
Al Amin Bali
                      </Link>
                      <span className={"font-sm fw-medium"}>
UX Designer
                      </span>
                      <div className={"social__link d-flex gap-2 justify-content-center align-items-center"}>
                        <a className={"text-body"} href={"#"}>
                          <i className={"rt-facebook"}>

                          </i>
                        </a>
                        <a className={"text-body"} href={"#"}>
                          <i className={"fa-brands fa-linkedin"}>

                          </i>
                        </a>
                        <a className={"text-body"} href={"#"}>
                          <i className={"fa-brands fa-skype"}>

                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"col"}>
                  <div className={"team__member text-center"}>
                    <a href={"#"}>
                      <img className={"rounded-3"} src={"/assets/img/team/2.webp"} alt={""} />
                    </a>
                    <div className={"team__member__meta mt-3"}>
                      <Link href={"/candidate/jonathon-doe"} className={"font-20 fw-medium text-dark mb-0 d-block"} prefetch={false}>
Jonathon Doe
                      </Link>
                      <span className={"font-sm fw-medium"}>
UI/UX Designer
                      </span>
                      <div className={"social__link d-flex gap-2 justify-content-center align-items-center"}>
                        <a className={"text-body"} href={"#"}>
                          <i className={"rt-facebook"}>

                          </i>
                        </a>
                        <a className={"text-body"} href={"#"}>
                          <i className={"fa-brands fa-linkedin"}>

                          </i>
                        </a>
                        <a className={"text-body"} href={"#"}>
                          <i className={"fa-brands fa-skype"}>

                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"col"}>
                  <div className={"team__member text-center"}>
                    <a href={"#"}>
                      <img className={"rounded-3"} src={"/assets/img/team/3.webp"} alt={""} />
                    </a>
                    <div className={"team__member__meta mt-3"}>
                      <a href={"#"} className={"font-20 fw-medium text-dark mb-0 d-block"}>
Emma Elizabeth
                      </a>
                      <span className={"font-sm fw-medium"}>
Software Engineer
                      </span>
                      <div className={"social__link d-flex gap-2 justify-content-center align-items-center"}>
                        <a className={"text-body"} href={"#"}>
                          <i className={"rt-facebook"}>

                          </i>
                        </a>
                        <a className={"text-body"} href={"#"}>
                          <i className={"fa-brands fa-linkedin"}>

                          </i>
                        </a>
                        <a className={"text-body"} href={"#"}>
                          <i className={"fa-brands fa-skype"}>

                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"col-lg-5 col-xl-4  d-flex flex-column gap-40 "}>
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
 Founded in
                    </span>
                    <span className={"text"}>
:  10,July, 2023
                    </span>
                  </li>
                  <li className={"d-flex flex-wrap gap-3 gap-sm-0 align-items-center justify-content-between"}>
                    <span className={"left-text"}>
                      <i className={"fa-light fa-user"}>

                      </i>
 Team Member
                    </span>
                    <span className={"text"}>
: 20
                    </span>
                  </li>
                  <li className={"d-flex flex-wrap gap-3 gap-sm-0 align-items-center justify-content-between"}>
                    <span className={"left-text"}>
                      <i className={"rt-price-tag"}>

                      </i>
 Project Budget
                    </span>
                    <span className={"text"}>
: $2000-$3000
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
                      <i className={"rt-briefcase"}>

                      </i>
 Company Field
                    </span>
                    <span className={"text"}>
:  Freelancing
                    </span>
                  </li>
                  <li className={"d-flex flex-wrap gap-3 gap-sm-0 align-items-center justify-content-between"}>
                    <span className={"left-text"}>
                      <i className={"rt-branch"}>

                      </i>
 Office Branches
                    </span>
                    <span className={"text"}>
: 10
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={"job__contact"}>
              <h6 className={"fw-semibold mb-20"}>
Contact Google.com
              </h6>
              <form action={"#"} className={"d-flex flex-column gap-4"}>
                <div className={"search__item"}>
                  <label htmlFor={"email"} className={"mb-3 font-20 fw-medium text-dark text-capitalize"}>
Your Email
                  </label>
                  <div className={"position-relative"}>
                    <input type={"email"} id={"email"} placeholder={"Enter your email"} />
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
            <div className={"job__location"}>
              <h6 className={"fw-semibold mb-20"}>
Job Location
              </h6>
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
