import Link from "next/link";
import type { DetailRecord } from "@/data/details";
export default function Section({ detailContent }: { detailContent: DetailRecord }) {
  return (
    <div className={"rts__section section__padding"}>
      <div className={"container"}>
        <div className={"row g-30"}>
          <div className={"col-xl-8 col-lg-7"}>
            <div className={"job__overview no-border-bottom mb-30"}>
              <h6 className={"fw-semibold mb-30"}>
Company Overview
              </h6>
              <div className={"job__overview__content"}>
                <ul className={"d-grid grid-style company__overview"}>
                  <li className={"d-flex flex-column gap-3 gap-sm-0 align-items-center justify-content-between"}>
                    <div className={"d-flex gap-3"}>
                      <span className={"icon"}>
                        <i className={"rt-calender"}>

                        </i>
                      </span>
                      <div>
                        <span className={"left-text"}>
Founded in
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
Team Member
                        </span>
                        <span className={"text"}>
20
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
Project Budget
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
                        <i className={"rt-briefcase"}>

                        </i>
                      </span>
                      <div>
                        <span className={"left-text"}>
Company Field
                        </span>
                        <span className={"text"}>
Freelancing Platform
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className={"d-flex flex-column gap-3 gap-sm-0 align-items-center justify-content-between"}>
                    <div className={"d-flex gap-3"}>
                      <span className={"icon"}>
                        <i className={"rt-branch"}>

                        </i>
                      </span>
                      <div>
                        <span className={"left-text"}>
Office Branches
                        </span>
                        <span className={"text"}>
10
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
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
            </div>
            <div className={"video__section mt-20"}>
              <h5 className={"mb-30 d-block"}>
Job apply Process video
              </h5>
              <div className={"video__section__content"}>
                <img src={"/assets/img/pages/video-bg-2.webp"} alt={""} />
                <a href={"https://www.youtube.com/watch?v=C9U1U15GSlM"} className={"video__play__btn"} title={"Play Video"} data-lightbox={""}>
                  <i className={"fa-sharp fa-solid fa-play"}>

                  </i>
                </a>
              </div>
            </div>
            <div className={"employer__review mt-40"}>
              <h6 className={"fw-semibold mb-20"}>
Employer Review
              </h6>
              <div className={"swiper-data swiper dot__style"} data-swiper={"{\n                            \"slidesPerView\": 2,\n                            \"autoplay\": true,\n                            \"loop\": true,\n                            \"pagination\": {\n                                \"el\": \".rts__pagination\",\n                                \"clickable\": true\n                            },\n                            \"breakpoints\": {\n                                \"0\": {\n                                    \"slidesPerView\": 1\n                                },\n                                \"768\": {\n                                    \"slidesPerView\": 1.5\n                                },\n                                \"1024\": {\n                                    \"slidesPerView\": 1.2    \n                                },\n                                \"1200\": {\n                                    \"slidesPerView\": 2\n                                }\n\n                            }\n                        }"}>
                <div className={"swiper-wrapper"}>
                  <div className={"swiper-slide"}>
                    <div className={"review__card"}>
                      <div className={"d-flex align-items-center flex-wrap gap-3"}>
                        <img src={"/assets/img/author/5.svg"} alt={""} className={"author__thumb"} />
                        <div>
                          <span className={"font-20 mb-2 fw-semibold d-block text-dark"}>
Jhon Doe
                          </span>
                          <div className={"rating d-flex gap-1"}>
                            <i className={"fa-sharp fa-solid fa-star"}>

                            </i>
                            <i className={"fa-sharp fa-solid fa-star"}>

                            </i>
                            <i className={"fa-sharp fa-solid fa-star"}>

                            </i>
                            <i className={"fa-sharp fa-solid fa-star"}>

                            </i>
                            <i className={"fa-sharp fa-regular fa-star"}>

                            </i>
                          </div>
                        </div>
                        <span className={"fw-medium align-self-end"}>
a week ago
                        </span>
                      </div>
                      <p className={"mt-20 fw-medium"}>
I still have a lot of studying to do using this course and the other practice exams, but so far it's been great!
                                        
                      </p>
                    </div>
                  </div>
                  <div className={"swiper-slide"}>
                    <div className={"review__card"}>
                      <div className={"d-flex align-items-center flex-wrap gap-3"}>
                        <img src={"/assets/img/author/6.svg"} alt={""} className={"author__thumb"} />
                        <div>
                          <span className={"font-20 mb-2 fw-semibold d-block text-dark"}>
Jhon Doe
                          </span>
                          <div className={"rating d-flex gap-1"}>
                            <i className={"fa-sharp fa-solid fa-star"}>

                            </i>
                            <i className={"fa-sharp fa-solid fa-star"}>

                            </i>
                            <i className={"fa-sharp fa-solid fa-star"}>

                            </i>
                            <i className={"fa-sharp fa-solid fa-star"}>

                            </i>
                            <i className={"fa-sharp fa-regular fa-star"}>

                            </i>
                          </div>
                        </div>
                        <span className={"fw-medium align-self-end"}>
a week ago
                        </span>
                      </div>
                      <p className={"mt-20 fw-medium"}>
I still have a lot of studying to do using this course and the other practice exams, but so far it's been great!
                                        
                      </p>
                    </div>
                  </div>
                  <div className={"swiper-slide"}>
                    <div className={"review__card"}>
                      <div className={"d-flex align-items-center flex-wrap gap-3"}>
                        <img src={"/assets/img/author/3.svg"} alt={""} className={"author__thumb"} />
                        <div>
                          <span className={"font-20 mb-2 fw-semibold d-block text-dark"}>
Al Amin Bali
                          </span>
                          <div className={"rating d-flex gap-1"}>
                            <i className={"fa-sharp fa-solid fa-star"}>

                            </i>
                            <i className={"fa-sharp fa-solid fa-star"}>

                            </i>
                            <i className={"fa-sharp fa-solid fa-star"}>

                            </i>
                            <i className={"fa-sharp fa-solid fa-star"}>

                            </i>
                            <i className={"fa-sharp fa-regular fa-star"}>

                            </i>
                          </div>
                        </div>
                        <span className={"fw-medium align-self-end"}>
a week ago
                        </span>
                      </div>
                      <p className={"mt-20 fw-medium"}>
I still have a lot of studying to do using this course and the other practice exams, but so far it's been great!
                                        
                      </p>
                    </div>
                  </div>
                  <div className={"swiper-slide"}>
                    <div className={"review__card"}>
                      <div className={"d-flex align-items-center flex-wrap gap-3"}>
                        <img src={"/assets/img/author/2.svg"} alt={""} className={"author__thumb"} />
                        <div>
                          <span className={"font-20 mb-2 fw-semibold d-block text-dark"}>
Jhon Doe
                          </span>
                          <div className={"rating d-flex gap-1"}>
                            <i className={"fa-sharp fa-solid fa-star"}>

                            </i>
                            <i className={"fa-sharp fa-solid fa-star"}>

                            </i>
                            <i className={"fa-sharp fa-solid fa-star"}>

                            </i>
                            <i className={"fa-sharp fa-solid fa-star"}>

                            </i>
                            <i className={"fa-sharp fa-regular fa-star"}>

                            </i>
                          </div>
                        </div>
                        <span className={"fw-medium align-self-end"}>
a week ago
                        </span>
                      </div>
                      <p className={"mt-20 fw-medium"}>
I still have a lot of studying to do using this course and the other practice exams, but so far it's been great!
                                        
                      </p>
                    </div>
                  </div>
                </div>
                <div className={"rts__slider__control style__two mt-40 dot__style"}>
                  <div className={"rts__pagination"}>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"col-lg-5 col-xl-4  d-flex flex-column gap-40 "}>
            <div className={"job__location"}>
              <h6 className={"fw-semibold mb-30"}>
Job Location
              </h6>
              <div className={"gmap"}>
                <iframe src={"https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Reacthemes+(ReacThemes)&t=&z=14&ie=UTF8&iwloc=B&output=embed"}>

                </iframe>
              </div>
            </div>
            <div className={"recent__post"}>
              <h6 className={"fw-semibold mb-30"}>
3 Job vacancies
              </h6>
              <div className={"d-flex flex-column gap-30"}>
                <div className={"d-flex gap-4 align-items-center flex-md-row flex-column mx-auto mx-md-0"}>
                  <div className={"company__icon recent__post"}>
                    <img className={""} src={"/assets/img/home-1/company/apple.svg"} alt={""} />
                  </div>
                  <div className={"job__meta w-100 d-flex text-center text-md-start flex-column gap-2"}>
                    <div className={""}>
                      <Link href={"/job/senior-ui-designer-apple"} className={"job__title h6 fw-semibold mb-0"} prefetch={false}>
Senior UI Designer, Apple
                      </Link>
                    </div>
                    <div className={"d-flex gap-3 justify-content-center justify-content-md-start flex-wrap"}>
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
                <div className={"d-flex gap-4 align-items-center flex-md-row flex-column mx-auto mx-md-0"}>
                  <div className={"company__icon recent__post"}>
                    <img className={""} src={"/assets/img/home-1/company/amazon.svg"} alt={""} />
                  </div>
                  <div className={"job__meta w-100 d-flex text-center text-md-start flex-column gap-2"}>
                    <div className={""}>
                      <Link href={"/job/data-analysis-amazon"} className={"job__title h6 fw-semibold mb-0"} prefetch={false}>
Data Analysis, Amazon
                      </Link>
                    </div>
                    <div className={"d-flex gap-3 justify-content-center justify-content-md-start flex-wrap"}>
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
                <div className={"d-flex gap-4 align-items-center flex-md-row flex-column mx-auto mx-md-0"}>
                  <div className={"company__icon recent__post"}>
                    <img className={""} src={"/assets/img/home-1/company/udemy.svg"} alt={""} />
                  </div>
                  <div className={"job__meta w-100 d-flex text-center text-md-start flex-column gap-2"}>
                    <div className={""}>
                      <Link href={"/job/online-trainer-udemy"} className={"job__title h6 fw-semibold mb-0"} prefetch={false}>
Online Trainer, Udemy
                      </Link>
                    </div>
                    <div className={"d-flex gap-3 justify-content-center justify-content-md-start flex-wrap"}>
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
          </div>
        </div>
      </div>
    </div>
  );
}
