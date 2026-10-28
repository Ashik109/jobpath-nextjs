import Link from "next/link";

export default function Section8() {
  return (
    <section className={"rts__section pb-120"}>
      <div className={"container"}>
        <div className={"row justify-content-center mb-60"}>
          <div className={"col-xl-6 col-lg-10"}>
            <div className={"rts__section__content text-center"} data-aos="fade-up">
              <h3 className={"rts__section__title section__mb"}>
Read Our Latest News
              </h3>
              <p className={"rts__section__desc"}>
 Our mission is to provide you with valuable insights
              </p>
            </div>
          </div>
        </div>
        <div className={"row g-30 align-items-center"}>
          <div className={"col-lg-6"}>
            <div className={"rts__single__blog style__six"} data-record-slug={"6-job-opportunities-to-consider-in-the-freight-and-logistics-industry"} data-record-kind={"blog"} data-record-title={"6 Job Opportunities to Consider in the Freight and Logistics Industry"} data-record-location={"Newyork, USA"} data-record-type={"Full Time"} data-record-category={"Career Advice"}>
              <Link href={"/blog/6-job-opportunities-to-consider-in-the-freight-and-logistics-industry"} prefetch={false}>
                <img src={"/assets/img/home-6/blog.webp"} alt={""} className={"rounded-2"} />
              </Link>
              <Link href={"/job-list-1"} className={"mt-30 mb-4 d-block max-content cat__link"} prefetch={false}>
Job Opportunities
              </Link>
              <Link href={"/blog/6-job-opportunities-to-consider-in-the-freight-and-logistics-industry"} className={"blog__title h5"} prefetch={false}>
6 Job Opportunities to Consider in the Freight and Logistics Industry
              </Link>
              <div className={"blog__meta__info flex-wrap d-flex gap-3 gap-md-4 mt-4"}>
                <span className={"d-flex gap-2 align-items-center"}>
                  <img className={"svg"} src={"/assets/img/icon/calender-black.svg"} alt={""} />
 20 March, 2022
                </span>
                <a href={"#"} className={"d-flex gap-2 align-items-center"}>
                  <img className={"svg"} src={"/assets/img/icon/user-black.svg"} alt={""} />
 Jon Adom
                </a>
              </div>
            </div>
          </div>
          <div className={"col-lg-6 "}>
            <div className={"rts__single__blog mb-30 style__six"} data-record-slug={"navigating-the-new-world-exploring-modern-job-trends-and-careers-in-the-digital-age"} data-record-kind={"blog"} data-record-title={"Navigating the New World: Exploring Modern Job Trends and Careers in the Digital Age"} data-record-location={"Newyork, USA"} data-record-type={"Full Time"} data-record-category={"Career Advice"}>
              <Link href={"/job-list-1"} className={"mb-3 d-block max-content cat__link"} prefetch={false}>
Job Opportunities
              </Link>
              <Link href={"/blog/navigating-the-new-world-exploring-modern-job-trends-and-careers-in-the-digital-age"} className={"blog__title h5"} prefetch={false}>
Navigating the New World: Exploring Modern Job Trends and Careers in the Digital Age
              </Link>
              <div className={"blog__meta__info flex-wrap d-flex gap-3 gap-md-4 mt-4"}>
                <span className={"d-flex gap-2 align-items-center"}>
                  <img className={"svg"} src={"/assets/img/icon/calender-black.svg"} alt={""} />
 20 March, 2022
                </span>
                <a href={"#"} className={"d-flex gap-2 align-items-center"}>
                  <img className={"svg"} src={"/assets/img/icon/user-black.svg"} alt={""} />
 Jon Adom
                </a>
              </div>
            </div>
            <div className={"rts__single__blog style__six"} data-record-slug={"empowering-through-trust-key-principles-for-unlocking-employee-potential"} data-record-kind={"blog"} data-record-title={"Empowering Through Trust: Key Principles for Unlocking Employee Potential"} data-record-location={"Newyork, USA"} data-record-type={"Full Time"} data-record-category={"Career Advice"}>
              <Link href={"/job-list-1"} className={"mb-3 d-block max-content cat__link"} prefetch={false}>
Job Opportunities
              </Link>
              <Link href={"/blog/empowering-through-trust-key-principles-for-unlocking-employee-potential"} className={"blog__title h5"} prefetch={false}>
Empowering Through Trust: Key Principles for Unlocking Employee Potential
              </Link>
              <div className={"blog__meta__info flex-wrap d-flex gap-3 gap-md-4 mt-4"}>
                <span className={"d-flex gap-2 align-items-center"}>
                  <img className={"svg"} src={"/assets/img/icon/calender-black.svg"} alt={""} />
 20 March, 2022
                </span>
                <a href={"#"} className={"d-flex gap-2 align-items-center"}>
                  <img className={"svg"} src={"/assets/img/icon/user-black.svg"} alt={""} />
 Jon Adom
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
