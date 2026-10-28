import Link from "next/link";
import type { DetailRecord } from "@/data/details";
export default function Section({ detailContent }: { detailContent: DetailRecord }) {
  return (
    <div className={"rts__section section__padding"}>
      <div className={"container"}>
        <div className={"row justify-content-center"}>
          <div className={"col-lg-8"}>
            <div className={"rts__blog__details"}>
              <img src={detailContent.image} alt={""} className={"rounded-3 mb-30 mb-md-5"} />
              <p>{detailContent.description}</p>
              <h6 className={"sub__heading mb-30 mt-20"}>
What you’ll learn
              </h6>
              <div className={"rts__listing is__3 "}>
                <div className={"single__listing d-flex align-items-center gap-4"}>
                  <span className={"icon"}>
                    <i className={"fa-regular fa-check"}>

                    </i>
                  </span>
                  <span>
Design 3 different logos.
                  </span>
                </div>
                <div className={"single__listing d-flex align-items-center gap-4"}>
                  <span className={"icon"}>
                    <i className={"fa-regular fa-check"}>

                    </i>
                  </span>
                  <span>
Reach 100s contacts
                  </span>
                </div>
                <div className={"single__listing d-flex align-items-center gap-4"}>
                  <span className={"icon"}>
                    <i className={"fa-regular fa-check"}>

                    </i>
                  </span>
                  <span>
Quality Job
                  </span>
                </div>
                <div className={"single__listing d-flex align-items-center gap-4"}>
                  <span className={"icon"}>
                    <i className={"fa-regular fa-check"}>

                    </i>
                  </span>
                  <span>
Work with colors &amp; fonts.   
                  </span>
                </div>
                <div className={"single__listing d-flex align-items-center gap-4"}>
                  <span className={"icon"}>
                    <i className={"fa-regular fa-check"}>

                    </i>
                  </span>
                  <span>
Internation job
                  </span>
                </div>
                <div className={"single__listing d-flex align-items-center gap-4"}>
                  <span className={"icon"}>
                    <i className={"fa-regular fa-check"}>

                    </i>
                  </span>
                  <span>
No Extra Charge
                  </span>
                </div>
              </div>
              <h6 className={"sub__heading mb-20 mt-20"}>
Career Compass: Navigating Your Path to Success
              </h6>
              <p>

                            Welcome to Career Compass, your ultimate destination for career advice, job search strategies, and professional development insights. Whether you're a recent graduate, seasoned professional, or someone considering a career change, our blog is your trusted guide to help you navigate the ever-evolving landscape of the job market.
                        
              </p>
              <blockquote className={"rts__blockquote my-30"}>
                <h6 className={"fw-semibold fst-italic"}>
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College is more then best in Virginia
                </h6>
              </blockquote>
              <p>

                            At Career Compass, we understand that finding the right career path can be daunting. That's why we offer a wealth of resources to empower you on your journey. From resume writing tips and interview techniques to networking advice and skill-building strategies, our expert contributors share their knowledge and expertise to equip you with the tools you need to succeed.
                        
              </p>
              <h6 className={"mt-30 mb-20 font-20 fw-medium"}>
Tags
              </h6>
              <div className={"job__tags is__blog__details mb-30 d-flex flex-wrap gap-3"}>
                <a href={"#"}>
Course
                </a>
                <a href={"#"}>
Design
                </a>
                <a href={"#"}>
Web Development
                </a>
                <a href={"#"}>
Business
                </a>
                <a href={"#"}>
UI/UX
                </a>
              </div>
              <div className={"d-flex gap-4 mb-20 align-items-center"}>
                <h6 className={"fw-semibold"}>
Share
                </h6>
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
              <h6 className={"fw-semibold mb-30"}>
Comment
              </h6>
              <ul className={"comment__list"}>
                <li>
                  <div className={"is__content"}>
                    <div className={"d-flex gap-3"}>
                      <img height={"60"} width={"60"} src={"/assets/img/author/1.svg"} alt={""} className={"rounded-2 mb-3"} />
                      <div className={"d-flex flex-column"}>
                        <Link href={"/candidate/jonathon-doe"} className={"font-20 text-dark fw-medium"} prefetch={false}>
Jonathon Doe
                        </Link>
                        <span>
a week ago
                        </span>
                      </div>
                    </div>
                    <p>
I still have a lot of studying to do using this course and the other practice exams, but so far it's been great! I have not taken my Security+ exam as well, so I'll update this at a later time.
                    </p>
                    <a href={"#"} className={"rts__btn reply__btn mt-3"}>
Reply
                    </a>
                  </div>
                </li>
                <li>
                  <div className={"is__content"}>
                    <div className={"d-flex gap-3"}>
                      <img height={"60"} width={"60"} src={"/assets/img/author/1.svg"} alt={""} className={"rounded-2 mb-3"} />
                      <div className={"d-flex flex-column"}>
                        <Link href={"/candidate/jonathon-doe"} className={"font-20 text-dark fw-medium"} prefetch={false}>
Jonathon Doe
                        </Link>
                        <span>
a week ago
                        </span>
                      </div>
                    </div>
                    <p>
I still have a lot of studying to do using this course and the other practice exams, but so far it's been great! I have not taken my Security+ exam as well, so I'll update this at a later time.
                    </p>
                    <a href={"#"} className={"rts__btn reply__btn mt-3"}>
Reply
                    </a>
                  </div>
                </li>
              </ul>
              <div className={"review__form job__contact mt-40"}>
                <h6 className={"fw-semibold mb-30"}>
Leave a Comment
                </h6>
                <form action={"#"} className={"d-flex flex-column gap-4"}>
                  <div className={"row row-cols-lg-2 row-cols-1 gap-3 gap-lg-0"}>
                    <div className={"search__item"}>
                      <label htmlFor={"name"} className={"mb-3 font-20 fw-medium text-dark text-capitalize"}>
Name
                      </label>
                      <div className={"position-relative"}>
                        <input type={"text"} id={"name"} placeholder={"Your Name"} />
                        <i className={"fa-light fa-user"}>

                        </i>
                      </div>
                    </div>
                    <div className={"search__item"}>
                      <label htmlFor={"bemail"} className={"mb-3 font-20 fw-medium text-dark text-capitalize"}>
Your Email
                      </label>
                      <div className={"position-relative"}>
                        <input type={"email"} id={"bemail"} placeholder={"Enter your email"} />
                        <i className={"rt-mailbox"}>

                        </i>
                      </div>
                    </div>
                  </div>
                  <div className={"search__item"}>
                    <label className={"mb-3 font-20 fw-medium text-dark text-capitalize"} htmlFor={"message"}>
Your Comment
                    </label>
                    <textarea name={"message"} id={"message"} placeholder={"Message"}>

                    </textarea>
                    <i className={"fa-thin fa-comment-lines"}>

                    </i>
                  </div>
                  <button type={"submit"} className={"rts__btn fill__btn be-1 max-content apply__btn"}>
Submit Comment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
