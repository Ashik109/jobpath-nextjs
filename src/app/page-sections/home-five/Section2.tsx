import Link from "next/link";

export default function Section2() {
  return (
    <div className={"rts__section section__padding overflow-hidden"}>
      <div className={"container"}>
        <div className={"row justify-content-center mb-50 position-relative "}>
          <div className={"col-xl-6 col-lg-10"}>
            <div className={"rts__section__content text-center"} data-aos="fade-up">
              <h3 className={"rts__section__title section__mb"}>
Browse Job Category
              </h3>
              <p className={"rts__section__desc"}>
Looking for your next career opportunity. Look no further
              </p>
            </div>
          </div>
        </div>
        <div className={"row g-30"}>
          <div className={"col-lg-4 col-xl-4 col-xxl-3 col-md-6"}>
            <div className={"single__cat style__five d-flex gap-4"}>
              <div className={"single__cat__icon color-3"}>
                <img className={"rounded-2"} src={"/assets/img/home-5/cat/1.jpg"} alt={""} />
              </div>
              <div className={"single__cat__link d-flex flex-column"}>
                <Link href={"/job-list-5"} aria-label={"cat__label"} prefetch={false}>
Accounting
                </Link>
                <span>
130+ Jobs
                </span>
              </div>
            </div>
          </div>
          <div className={"col-lg-4 col-xl-4 col-xxl-3 col-md-6"}>
            <div className={"single__cat style__five d-flex gap-4"}>
              <div className={"single__cat__icon color-3"}>
                <img className={"rounded-2"} src={"/assets/img/home-5/cat/2.jpg"} alt={""} />
              </div>
              <div className={"single__cat__link d-flex flex-column"}>
                <Link href={"/job-list-5"} aria-label={"cat__label"} prefetch={false}>
Design &amp; Art
                </Link>
                <span>
70+ Jobs
                </span>
              </div>
            </div>
          </div>
          <div className={"col-lg-4 col-xl-4 col-xxl-3 col-md-6"}>
            <div className={"single__cat style__five d-flex gap-4"}>
              <div className={"single__cat__icon color-3"}>
                <img className={"rounded-2"} src={"/assets/img/home-5/cat/3.jpg"} alt={""} />
              </div>
              <div className={"single__cat__link d-flex flex-column"}>
                <Link href={"/job-list-5"} aria-label={"cat__label"} prefetch={false}>
Accounting
                </Link>
                <span>
70+ Jobs
                </span>
              </div>
            </div>
          </div>
          <div className={"col-lg-4 col-xl-4 col-xxl-3 col-md-6"}>
            <div className={"single__cat style__five d-flex gap-4"}>
              <div className={"single__cat__icon color-3"}>
                <img className={"rounded-2"} src={"/assets/img/home-5/cat/4.jpg"} alt={""} />
              </div>
              <div className={"single__cat__link d-flex flex-column"}>
                <Link href={"/job-list-5"} aria-label={"cat__label"} prefetch={false}>
Marketing
                </Link>
                <span>
70+ Jobs
                </span>
              </div>
            </div>
          </div>
          <div className={"col-lg-4 col-xl-4 col-xxl-3 col-md-6"}>
            <div className={"single__cat style__five d-flex gap-4"}>
              <div className={"single__cat__icon color-3"}>
                <img className={"rounded-2"} src={"/assets/img/home-5/cat/5.jpg"} alt={""} />
              </div>
              <div className={"single__cat__link d-flex flex-column"}>
                <Link href={"/job-list-5"} aria-label={"cat__label"} prefetch={false}>
 Health  &amp; Care
                </Link>
                <span>
70+ Jobs
                </span>
              </div>
            </div>
          </div>
          <div className={"col-lg-4 col-xl-4 col-xxl-3 col-md-6"}>
            <div className={"single__cat style__five d-flex gap-4"}>
              <div className={"single__cat__icon color-3"}>
                <img className={"rounded-2"} src={"/assets/img/home-5/cat/1.jpg"} alt={""} />
              </div>
              <div className={"single__cat__link d-flex flex-column"}>
                <Link href={"/job-list-5"} aria-label={"cat__label"} prefetch={false}>
 Engineering
                </Link>
                <span>
70+ Jobs
                </span>
              </div>
            </div>
          </div>
          <div className={"col-lg-4 col-xl-4 col-xxl-3 col-md-6"}>
            <div className={"single__cat style__five d-flex gap-4"}>
              <div className={"single__cat__icon color-3"}>
                <img className={"rounded-2"} src={"/assets/img/home-5/cat/5.jpg"} alt={""} />
              </div>
              <div className={"single__cat__link d-flex flex-column"}>
                <Link href={"/job-list-5"} aria-label={"cat__label"} prefetch={false}>
 UI/UX Design
                </Link>
                <span>
70+ Jobs
                </span>
              </div>
            </div>
          </div>
          <div className={"col-lg-4 col-xl-4 col-xxl-3 col-md-6"}>
            <div className={"single__cat style__five d-flex gap-4"}>
              <div className={"single__cat__icon color-3"}>
                <img className={"rounded-2"} src={"/assets/img/home-5/cat/8.jpg"} alt={""} />
              </div>
              <div className={"single__cat__link d-flex flex-column"}>
                <Link href={"/job-list-5"} aria-label={"cat__label"} prefetch={false}>
 Data Science
                </Link>
                <span>
70+ Jobs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
