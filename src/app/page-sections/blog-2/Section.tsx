import CatalogResults from "@/app/components/CatalogResults";
import Link from "next/link";

export default function Section() {
  return (
    <div className={"rts__section section__padding"}>
      <div className={"container"}>
        <div className={"row g-30"}>
          <div className={"col-xl-4 col-lg-5"}>
            <div className={"job__search__section mb-40"}>
              <div className={"d-flex flex-column gap-3"}>
                <div className={"search__item"}>
                  <label htmlFor={"search"} className={"mb-20 font-20 fw-medium text-dark text-capitalize"}>
Search By Job Title
                  </label>
                  <div className={"position-relative"}>
                    <form action={"#"}>
                      <input type={"text"} id={"search"} placeholder={"Enter Type Of job"} required={true} />
                      <i className={"fa-light fa-magnifying-glass"}>

                      </i>
                    </form>
                  </div>
                </div>
                <div className={"search__item"}>
                  <h6 className={"mb-20 font-20 fw-medium text-dark text-capitalize"}>
Category
                  </h6>
                  <div className={"search__item__list"}>
                    <div className={"d-flex align-items-center justify-content-between list"}>
                      <div className={"d-flex gap-2 align-items-center checkbox"}>
                        <input type={"checkbox"} name={"web"} id={"web"} />
                        <label htmlFor={"web"}>
Web Development
                        </label>
                      </div>
                      <span>
(130)
                      </span>
                    </div>
                    <div className={"d-flex align-items-center justify-content-between list"}>
                      <div className={"d-flex gap-2 align-items-center checkbox"}>
                        <input type={"checkbox"} name={"design"} id={"design"} />
                        <label htmlFor={"design"}>
Website Design
                        </label>
                      </div>
                      <span>
(80)
                      </span>
                    </div>
                    <div className={"d-flex align-items-center justify-content-between list"}>
                      <div className={"d-flex gap-2 align-items-center checkbox"}>
                        <input type={"checkbox"} name={"ux"} id={"ux"} />
                        <label htmlFor={"ux"}>
UI/UX  Design
                        </label>
                      </div>
                      <span>
(45)
                      </span>
                    </div>
                    <div className={"d-flex align-items-center justify-content-between list"}>
                      <div className={"d-flex gap-2 align-items-center checkbox"}>
                        <input type={"checkbox"} name={"dev"} id={"dev"} />
                        <label htmlFor={"dev"}>
Development
                        </label>
                      </div>
                      <span>
(100)
                      </span>
                    </div>
                    <div className={"d-flex align-items-center justify-content-between list"}>
                      <div className={"d-flex gap-2 align-items-center checkbox"}>
                        <input type={"checkbox"} name={"business"} id={"business"} />
                        <label htmlFor={"business"}>
Business &amp; Marketing
                        </label>
                      </div>
                      <span>
(80)
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"search__item"}>
                  <h6 className={"mb-20 font-20 fw-medium text-dark text-capitalize"}>
Author
                  </h6>
                  <div className={"search__item__list"}>
                    <div className={"d-flex align-items-center justify-content-between list"}>
                      <div className={"d-flex gap-2 align-items-center checkbox"}>
                        <input type={"checkbox"} name={"jon"} id={"jon"} />
                        <label htmlFor={"jon"}>
Jonathon Doe
                        </label>
                      </div>
                      <span>
(10)
                      </span>
                    </div>
                    <div className={"d-flex align-items-center justify-content-between list"}>
                      <div className={"d-flex gap-2 align-items-center checkbox"}>
                        <input type={"checkbox"} name={"jack"} id={"jack"} />
                        <label htmlFor={"jack"}>
Jack Alexander
                        </label>
                      </div>
                      <span>
(15)
                      </span>
                    </div>
                    <div className={"d-flex align-items-center justify-content-between list"}>
                      <div className={"d-flex gap-2 align-items-center checkbox"}>
                        <input type={"checkbox"} name={"emma"} id={"emma"} />
                        <label htmlFor={"emma"}>
Emma Elizabeth
                        </label>
                      </div>
                      <span>
(20)
                      </span>
                    </div>
                    <div className={"d-flex align-items-center justify-content-between list"}>
                      <div className={"d-flex gap-2 align-items-center checkbox"}>
                        <input type={"checkbox"} name={"Michael"} id={"Michael"} />
                        <label htmlFor={"Michael"}>
Michael Roy
                        </label>
                      </div>
                      <span>
(45)
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"search__item"}>
                  <h6 className={"mb-20 font-20 fw-medium text-dark text-capitalize"}>
Tags
                  </h6>
                  <div className={"job__tags d-flex flex-wrap gap-3"}>
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
                </div>
                <div className={"search__item"}>
                  <h6 className={"mb-20 font-20 fw-medium text-dark text-capitalize"}>
Latest Blog
                  </h6>
                  <div className={"d-flex flex-column gap-4"}>
                    <div className={"latest__blog d-flex align-items-center gap-4 flex-wrap flex-sm-nowrap flex-xxl-nowrap flex-lg-wrap flex-md-nowrap"}>
                      <div className={"thumb"}>
                        <img className={"rounded-2"} src={"/assets/img/pages/blog-2/r-1.webp"} alt={""} />
                      </div>
                      <div className={"content"}>
                        <Link href={"/blog/start-an-online-job-and-work-from-home"} className={"fw-semibold "} prefetch={false}>
Start an online Job and work 
                                                from home
                        </Link>
                        <span className={"d-flex mt-2 gap-2 align-items-center fw-medium"}>
                          <img className={"svg"} height={"16"} width={"16"} src={"/assets/img/icon/calender.svg"} alt={""} />
 20 March, 2022
                        </span>
                      </div>
                    </div>
                    <div className={"latest__blog d-flex align-items-center gap-4 flex-wrap flex-sm-nowrap flex-xxl-nowrap flex-lg-wrap flex-md-nowrap"}>
                      <div className={"thumb"}>
                        <img className={"rounded-2"} src={"/assets/img/pages/blog-2/r-2.webp"} alt={""} />
                      </div>
                      <div className={"content"}>
                        <Link href={"/blog/start-an-online-job-and-work-from-home"} className={"fw-semibold "} prefetch={false}>
7 Ways Job Post Has 
                                                Improved Business Today
                        </Link>
                        <span className={"d-flex mt-2 gap-2 align-items-center fw-medium"}>
                          <img className={"svg"} height={"16"} width={"16"} src={"/assets/img/icon/calender.svg"} alt={""} />
 20 March, 2022
                        </span>
                      </div>
                    </div>
                    <div className={"latest__blog d-flex align-items-center gap-4 flex-wrap flex-sm-nowrap flex-xxl-nowrap flex-lg-wrap flex-md-nowrap"}>
                      <div className={"thumb"}>
                        <img className={"rounded-2"} src={"/assets/img/pages/blog-2/r-3.webp"} alt={""} />
                      </div>
                      <div className={"content"}>
                        <Link href={"/blog/start-an-online-job-and-work-from-home"} className={"fw-semibold "} prefetch={false}>
Insider Strategies For Success
                                                On Job Website
                        </Link>
                        <span className={"d-flex mt-2 gap-2 align-items-center fw-medium"}>
                          <img className={"svg"} height={"16"} width={"16"} src={"/assets/img/icon/calender.svg"} alt={""} />
 20 March, 2022
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"col-lg-7 col-xl-8"}>
            <CatalogResults kind="blog" tabs={false} />
            
          </div>
        </div>
      </div>
    </div>
  );
}
