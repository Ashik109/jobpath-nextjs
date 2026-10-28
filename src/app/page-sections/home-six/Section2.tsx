import Link from "next/link";

export default function Section2() {
  return (
    <div className={"rts__section section__padding overflow-hidden"}>
      <div className={"container"}>
        <div className={"row justify-content-between mb-50 gap-4 position-relative "}>
          <div className={"col-xl-6 col-lg-10"}>
            <div className={"rts__section__content text-start"} data-aos="fade-up">
              <h3 className={"rts__section__title section__mb"}>
Browse Job Category
              </h3>
              <p className={"rts__section__desc"}>
Looking for your next career opportunity. Look no further
              </p>
            </div>
          </div>
          <div className={"rts__links d-flex max-content align-items-end"}>
            <Link href={"/job-list-3"} className={"d-flex gap-2 align-items-center text-dark fw-medium"} prefetch={false}>
View All
              <i className={"fa-light fa-arrow-right"}>

              </i>
            </Link>
          </div>
        </div>
        <div className={"row g-30"}>
          <div className={"col-xl-4 col-lg-6 col-md-6"}>
            <div className={"single__cat style__six align-items-center d-flex gap-4"}>
              <div className={"single__cat__icon"}>
                <img className={"rounded-2"} src={"/assets/img/home-6/icon/marketing.svg"} alt={""} />
              </div>
              <div className={"single__cat__link d-flex w-100 justify-content-between flex-wrap"}>
                <Link href={"/job-list-2"} aria-label={"cat__label"} prefetch={false}>
Marketing
                </Link>
                <span>
130+ Jobs
                </span>
              </div>
            </div>
          </div>
          <div className={"col-xl-4 col-lg-6 col-md-6"}>
            <div className={"single__cat style__six align-items-center d-flex gap-4"}>
              <div className={"single__cat__icon"}>
                <img className={"rounded-2"} src={"/assets/img/home-6/icon/development.svg"} alt={""} />
              </div>
              <div className={"single__cat__link d-flex w-100 justify-content-between flex-wrap"}>
                <Link href={"/job-list-2"} aria-label={"cat__label"} prefetch={false}>
Development
                </Link>
                <span>
130+ Jobs
                </span>
              </div>
            </div>
          </div>
          <div className={"col-xl-4 col-lg-6 col-md-6"}>
            <div className={"single__cat style__six align-items-center d-flex gap-4"}>
              <div className={"single__cat__icon"}>
                <img className={"rounded-2"} src={"/assets/img/home-6/icon/design.svg"} alt={""} />
              </div>
              <div className={"single__cat__link d-flex w-100 justify-content-between flex-wrap"}>
                <Link href={"/job-list-2"} aria-label={"cat__label"} prefetch={false}>
Design &amp; Art
                </Link>
                <span>
130+ Jobs
                </span>
              </div>
            </div>
          </div>
          <div className={"col-xl-4 col-lg-6 col-md-6"}>
            <div className={"single__cat style__six align-items-center d-flex gap-4"}>
              <div className={"single__cat__icon"}>
                <img className={"rounded-2"} src={"/assets/img/home-6/icon/health.svg"} alt={""} />
              </div>
              <div className={"single__cat__link d-flex w-100 justify-content-between flex-wrap"}>
                <Link href={"/job-list-2"} aria-label={"cat__label"} prefetch={false}>
Health  &amp; Care
                </Link>
                <span>
130+ Jobs
                </span>
              </div>
            </div>
          </div>
          <div className={"col-xl-4 col-lg-6 col-md-6"}>
            <div className={"single__cat style__six align-items-center d-flex gap-4"}>
              <div className={"single__cat__icon"}>
                <img className={"rounded-2"} src={"/assets/img/home-6/icon/icon.svg"} alt={""} />
              </div>
              <div className={"single__cat__link d-flex w-100 justify-content-between flex-wrap"}>
                <Link href={"/job-list-2"} aria-label={"cat__label"} prefetch={false}>
Accounting
                </Link>
                <span>
130+ Jobs
                </span>
              </div>
            </div>
          </div>
          <div className={"col-xl-4 col-lg-6 col-md-6"}>
            <div className={"single__cat style__six align-items-center d-flex gap-4"}>
              <div className={"single__cat__icon"}>
                <img className={"rounded-2"} src={"/assets/img/home-6/icon/data.svg"} alt={""} />
              </div>
              <div className={"single__cat__link d-flex w-100 justify-content-between flex-wrap"}>
                <Link href={"/job-list-2"} aria-label={"cat__label"} prefetch={false}>
Data Science
                </Link>
                <span>
130+ Jobs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
