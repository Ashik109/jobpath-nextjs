import Link from "next/link";
export default function Section7() {
  return (
    <div className={"rts__section section__padding"}>
      <div className={"container"}>
        <div className={"row justify-content-center mb-60"}>
          <div className={"col-lg-7"}>
            <div className={"rts__section__content text-center"} data-aos="fade-up">
              <h3 className={"rts__section__title mb-3"}>
Choose the Perfect Plan For You
              </h3>
              <p className={"rts__section__desc"}>
Looking for your next career opportunity.
              </p>
            </div>
            <div className={"rts__pricing__tab"}>
              <div className={"nav gap-3 justify-content-center mt-40 nav-tabs border-0"} id={"nav-tab"} role={"tablist"}>
                <button className={"nav-link border-0 active"} data-bs-toggle={"tab"} data-bs-target={"#monthly"} type={"button"} role={"tab"} aria-controls={"monthly"} aria-selected={"false"}>
Monthly
                </button>
                <button className={"nav-link border-0 "} data-bs-toggle={"tab"} data-bs-target={"#yearly"} aria-controls={"yearly"}>
Yearly
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={"tab-content"} id={"nav-tabContent"}>
          <div className={"monthly__pricing tab-pane show active"} id={"monthly"}>
            <div className={"row g-30"}>
              <div className={"col-xl-4 col-lg-6 col-md-12"}>
                <div className={"rts__pricing__box pricing__style__three"}>
                  <div className={"font-20 fw-medium lh-1 mb-3"}>
Basic Plan
                  </div>
                  <div className={"plan__price lh-1 mb-4"}>
                    <span className={"h4"}>
Free/
                    </span>
Month
                  </div>
                  <span className={"d-block mb-40 text-dark fw-medium"}>
Perfect To Get Started
                  </span>
                  <Link href={"/pricing"} className={"rts__btn pricing__btn  no__fill__btn mb-40"} prefetch={false}>
Try For 7 Days For Free
                  </Link>
                  <ul className={"plan__feature"}>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Unlimited access to 100+ Job
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 10+ Featured job
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Job duration for 30 days
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Get 10+ job
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Try for free, forever!
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Individual Job
                    </li>
                  </ul>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-6 col-md-12"}>
                <div className={"rts__pricing__box pricing__style__three"}>
                  <div className={"font-20 fw-medium lh-1 mb-3"}>
Basic Plan
                  </div>
                  <div className={"plan__price lh-1 mb-4"}>
                    <span className={"h4"}>
$150/
                    </span>
Month
                  </div>
                  <span className={"d-block mb-40 text-dark fw-medium"}>
Perfect To Get Started
                  </span>
                  <a href={"#"} className={"rts__btn pricing__btn  no__fill__btn mb-40"}>
Choose Plan
                  </a>
                  <ul className={"plan__feature"}>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Unlimited access to 100+ Job
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 10+ Featured job
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Job duration for 30 days
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Get 10+ job
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Try for free, forever!
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Individual Job
                    </li>
                  </ul>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-6 col-md-12"}>
                <div className={"rts__pricing__box pricing__style__three"}>
                  <div className={"font-20 fw-medium lh-1 mb-3"}>
Premium Plan
                  </div>
                  <div className={"plan__price lh-1 mb-4"}>
                    <span className={"h4"}>
$199/
                    </span>
Month
                  </div>
                  <span className={"d-block mb-40 text-dark fw-medium"}>
Perfect To Get Started
                  </span>
                  <Link href={"/pricing"} className={"rts__btn pricing__btn  no__fill__btn mb-40"} prefetch={false}>
Try For 7 Days For Free
                  </Link>
                  <ul className={"plan__feature"}>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Unlimited access to 100+ Job
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 10+ Featured job
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Job duration for 30 days
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Get 10+ job
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Try for free, forever!
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Individual Job
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={"yearly__pricing tab-pane "} id={"yearly"}>
            <div className={"row g-30"}>
              <div className={"col-xl-4 col-lg-6 col-md-12"}>
                <div className={"rts__pricing__box pricing__style__three"}>
                  <div className={"font-20 fw-medium lh-1 mb-3"}>
Basic Plan
                  </div>
                  <div className={"plan__price lh-1 mb-4"}>
                    <span className={"h4"}>
Free/
                    </span>
Yearly
                  </div>
                  <span className={"d-block mb-40 text-dark fw-medium"}>
Perfect To Get Started
                  </span>
                  <Link href={"/pricing"} className={"rts__btn pricing__btn  no__fill__btn mb-40"} prefetch={false}>
Try For 7 Days For Free
                  </Link>
                  <ul className={"plan__feature"}>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Unlimited access to 100+ Job
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 10+ Featured job
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Job duration for 30 days
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Get 10+ job
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Try for free, forever!
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Individual Job
                    </li>
                  </ul>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-6 col-md-12"}>
                <div className={"rts__pricing__box pricing__style__three"}>
                  <div className={"font-20 fw-medium lh-1 mb-3"}>
Basic Plan
                  </div>
                  <div className={"plan__price lh-1 mb-4"}>
                    <span className={"h4"}>
$150/
                    </span>
Yearly
                  </div>
                  <span className={"d-block mb-40 text-dark fw-medium"}>
Perfect To Get Started
                  </span>
                  <a href={"#"} className={"rts__btn pricing__btn  no__fill__btn mb-40"}>
Choose Plan
                  </a>
                  <ul className={"plan__feature"}>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Unlimited access to 100+ Job
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 10+ Featured job
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Job duration for 30 days
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Get 10+ job
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Try for free, forever!
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Individual Job
                    </li>
                  </ul>
                </div>
              </div>
              <div className={"col-xl-4 col-lg-6 col-md-12"}>
                <div className={"rts__pricing__box pricing__style__three"}>
                  <div className={"font-20 fw-medium lh-1 mb-3"}>
Premium Plan
                  </div>
                  <div className={"plan__price lh-1 mb-4"}>
                    <span className={"h4"}>
$199/
                    </span>
Yearly
                  </div>
                  <span className={"d-block mb-40 text-dark fw-medium"}>
Perfect To Get Started
                  </span>
                  <Link href={"/pricing"} className={"rts__btn pricing__btn  no__fill__btn mb-40"} prefetch={false}>
Try For 7 Days For Free
                  </Link>
                  <ul className={"plan__feature"}>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Unlimited access to 100+ Job
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 10+ Featured job
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Job duration for 30 days
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Get 10+ job
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Try for free, forever!
                    </li>
                    <li>
                      <i className={"fa-sharp fa-solid fa-circle-check"}>

                      </i>
 Individual Job
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
