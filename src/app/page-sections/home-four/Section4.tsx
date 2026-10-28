import Link from "next/link";

export default function Section4() {
  return (
    <div className={"rts__section"}>
      <div className={"container"}>
        <div className={"row justify-content-center"}>
          <div className={"col-xl-6 col-lg-10"}>
            <div className={"rts__section__content text-center mb-60"} data-aos="fade-up">
              <h3 className={"rts__section__title section__mb"}>
Read Our Latest Blog
              </h3>
              <p className={"rts__section__desc"}>
From entry-level positions to executive roles browse through.
              </p>
            </div>
          </div>
        </div>
        <div className={"row g-30"}>
          <div className={"col-xl-4 col-lg-6 col-md-12"}>
            <div className={"rts__single__blog blog__style__four rounded-0"} data-record-slug={"7-ways-job-post-has-improved-business-today"} data-record-kind={"blog"} data-record-title={"7 Ways Job Post Has Improved Business Today"} data-record-location={"Newyork, USA"} data-record-type={"Full Time"} data-record-category={"Career Advice"}>
              <Link href={"/blog/7-ways-job-post-has-improved-business-today"} className={"blog__img"} prefetch={false}>
                <img src={"/assets/img/hom-4/blog/1.webp"} className={"mb-2 rounded-0"} alt={"blog"} />
              </Link>
              <div className={"blog__meta"}>
                <div className={"blog__meta__info d-flex gap-3 my-3"}>
                  <span className={"d-flex gap-1 align-items-center"}>
                    <img className={"svg"} src={"/assets/img/icon/calender.svg"} alt={""} />
 20 March, 2022
                  </span>
                  <a href={"#"} className={"d-flex gap-1 align-items-center"}>
                    <img className={"svg"} src={"/assets/img/icon/user.svg"} alt={""} />
 Jon Adom
                  </a>
                </div>
                <Link href={"/blog/7-ways-job-post-has-improved-business-today"} className={"h6 fw-semibold"} prefetch={false}>

                                    7 Ways Job Post Has Improved Business Today
                                
                </Link>
                <Link href={"/blog/7-ways-job-post-has-improved-business-today"} className={"readmore__btn d-flex mt-3 gap-2 align-items-center"} prefetch={false}>
Read More 
                  <i className={"fa-light fa-arrow-right"}>

                  </i>
                </Link>
              </div>
            </div>
          </div>
          <div className={"col-xl-4 col-lg-6 col-md-12"}>
            <div className={"rts__single__blog blog__style__four rounded-0"} data-record-slug={"start-an-online-job-and-work-from-home"} data-record-kind={"blog"} data-record-title={"Start an online Job and work from home"} data-record-location={"Newyork, USA"} data-record-type={"Full Time"} data-record-category={"Career Advice"}>
              <Link href={"/blog/start-an-online-job-and-work-from-home"} className={"blog__img"} prefetch={false}>
                <img src={"/assets/img/hom-4/blog/3.webp"} className={"mb-2 rounded-0"} alt={"blog"} />
              </Link>
              <div className={"blog__meta"}>
                <div className={"blog__meta__info d-flex gap-3 my-3"}>
                  <span className={"d-flex gap-1 align-items-center"}>
                    <img className={"svg"} src={"/assets/img/icon/calender.svg"} alt={""} />
 20 March, 2022
                  </span>
                  <a href={"#"} className={"d-flex gap-1 align-items-center"}>
                    <img className={"svg"} src={"/assets/img/icon/user.svg"} alt={""} />
 Jon Adom
                  </a>
                </div>
                <Link href={"/blog/start-an-online-job-and-work-from-home"} className={"h6 fw-semibold"} prefetch={false}>

                                    Start an online Job and work from home
                                
                </Link>
                <Link href={"/blog/start-an-online-job-and-work-from-home"} className={"readmore__btn d-flex mt-3 gap-2 align-items-center"} prefetch={false}>
Read More 
                  <i className={"fa-light fa-arrow-right"}>

                  </i>
                </Link>
              </div>
            </div>
          </div>
          <div className={"col-xl-4 col-lg-6 col-md-12"}>
            <div className={"rts__single__blog blog__style__four rounded-0"} data-record-slug={"insider-strategies-for-success-on-job-websites"} data-record-kind={"blog"} data-record-title={"Insider Strategies for Success on Job Websites"} data-record-location={"Newyork, USA"} data-record-type={"Full Time"} data-record-category={"Career Advice"}>
              <Link href={"/blog/insider-strategies-for-success-on-job-websites"} className={"blog__img"} prefetch={false}>
                <img src={"/assets/img/hom-4/blog/2.webp"} className={"mb-2 rounded-0"} alt={"blog"} />
              </Link>
              <div className={"blog__meta"}>
                <div className={"blog__meta__info d-flex gap-3 my-3"}>
                  <span className={"d-flex gap-1 align-items-center"}>
                    <img className={"svg"} src={"/assets/img/icon/calender.svg"} alt={""} />
 20 March, 2022
                  </span>
                  <a href={"#"} className={"d-flex gap-1 align-items-center"}>
                    <img className={"svg"} src={"/assets/img/icon/user.svg"} alt={""} />
 Jon Adom
                  </a>
                </div>
                <Link href={"/blog/insider-strategies-for-success-on-job-websites"} className={"h6 fw-semibold"} prefetch={false}>

                                    Insider Strategies for Success on Job Websites
                                
                </Link>
                <Link href={"/blog/insider-strategies-for-success-on-job-websites"} className={"readmore__btn d-flex mt-3 gap-2 align-items-center"} prefetch={false}>
Read More 
                  <i className={"fa-light fa-arrow-right"}>

                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
