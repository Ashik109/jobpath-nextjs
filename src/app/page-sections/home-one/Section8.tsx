import Link from "next/link";
export default function Section8() {
  return (
    <div className={"rts__section pt--10"}>
      <div className={"container"}>
        <div className={"row position-relative justify-content-lg-between justify-content-sm-center gap-4 mb-60"}>
          <div className={"col-xl-6 col-lg-10"}>
            <div className={"rts__section__content text-md-start text-sm-center"}>
              <h3 className={"rts__section__title section__mb"}>
Pricing Plan
              </h3>
              <p className={"rts__section__desc"}>
Looking for your next career opportunity.
              </p>
            </div>
          </div>
          <div className={"d-flex align-items-end max-content gap-2 position-lg-absolute right-md-0 bottom-md-0"}>
            <p className={"mb-0"}>
Monthly
            </p>
            <label htmlFor={"pricing__toogle"} className={"switch"}>
              <input type={"checkbox"} name={"pricing__toogle"} className={"pricing__toogle"} id={"pricing__toogle"} />
              <span className={"slider round"}>

              </span>
            </label>
            <p className={"mb-0"}>
Yearly
            </p>
          </div>
        </div>
        <div className={"monthly__pricing active"}>
          <div className={"row g-30"}>
            <div className={"col-lg-5 col-xl-4 col-md-6"}>
              <div className={"rts__pricing__box"}>
                <div className={"h6 fw-medium lh-1 mb-2 text-primary"}>
Free
                </div>
                <div className={"plan__price lh-1 mb-40"}>
                  <span className={"h2"}>
Free/
                  </span>
Month
                </div>
                <ul className={"plan__feature"}>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Unlimited access to 100+ Job
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 10+ Featured job
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Job duration for 30 days
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Get 10+ job
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Try for free, forever!
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Individual Job
                  </li>
                </ul>
                <Link href={"/job-list-1"} className={"rts__btn pricing__btn  no__fill__btn mt-40"} prefetch={false}>
Get Started Now
                </Link>
              </div>
            </div>
            <div className={"col-lg-5 col-xl-4 col-md-6"}>
              <div className={"rts__pricing__box"}>
                <div className={"h6 fw-medium lh-1 mb-2 text-primary"}>
Basic
                </div>
                <div className={"plan__price lh-1 mb-40"}>
                  <span className={"h2"}>
99$/
                  </span>
Month
                </div>
                <ul className={"plan__feature"}>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Unlimited access to 100+ Job
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 10+ Featured job
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Job duration for 30 days
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Get 10+ job
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Try for free, forever!
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Individual Job
                  </li>
                </ul>
                <Link href={"/job-list-1"} className={"rts__btn pricing__btn  no__fill__btn mt-40"} prefetch={false}>
Get Started Now
                </Link>
              </div>
            </div>
            <div className={"col-lg-5 col-xl-4 col-md-6"}>
              <div className={"rts__pricing__box"}>
                <div className={"h6 fw-medium lh-1 mb-2 text-primary"}>
Standard
                </div>
                <div className={"plan__price lh-1 mb-40"}>
                  <span className={"h2"}>
199$/
                  </span>
Month
                </div>
                <ul className={"plan__feature"}>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Unlimited access to 100+ Job
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 10+ Featured job
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Job duration for 30 days
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Get 10+ job
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Try for free, forever!
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Individual Job
                  </li>
                </ul>
                <Link href={"/job-list-1"} className={"rts__btn pricing__btn  no__fill__btn mt-40"} prefetch={false}>
Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={"yearly__pricing"}>
          <div className={"row g-30"}>
            <div className={"col-lg-5 col-xl-4 col-md-6"}>
              <div className={"rts__pricing__box"}>
                <div className={"h6 fw-medium lh-1 mb-2 text-primary"}>
Free
                </div>
                <div className={"plan__price lh-1 mb-40"}>
                  <span className={"h2"}>
Free/
                  </span>
Yearly
                </div>
                <ul className={"plan__feature"}>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Unlimited access to 100+ Job
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 10+ Featured job
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Job duration for 30 days
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Get 10+ job
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Try for free, forever!
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Individual Job
                  </li>
                </ul>
                <Link href={"/job-list-1"} className={"rts__btn pricing__btn  no__fill__btn mt-40"} prefetch={false}>
Get Started Now
                </Link>
              </div>
            </div>
            <div className={"col-lg-5 col-xl-4 col-md-6"}>
              <div className={"rts__pricing__box"}>
                <div className={"h6 fw-medium lh-1 mb-2 text-primary"}>
Basic
                </div>
                <div className={"plan__price lh-1 mb-40"}>
                  <span className={"h2"}>
399$/
                  </span>
Yearly
                </div>
                <ul className={"plan__feature"}>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Unlimited access to 100+ Job
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 10+ Featured job
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Job duration for 30 days
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Get 10+ job
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Try for free, forever!
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Individual Job
                  </li>
                </ul>
                <Link href={"/job-list-1"} className={"rts__btn pricing__btn  no__fill__btn mt-40"} prefetch={false}>
Get Started Now
                </Link>
              </div>
            </div>
            <div className={"col-lg-5 col-xl-4 col-md-6"}>
              <div className={"rts__pricing__box"}>
                <div className={"h6 fw-medium lh-1 mb-2 text-primary"}>
Standard
                </div>
                <div className={"plan__price lh-1 mb-40"}>
                  <span className={"h2"}>
599$/
                  </span>
Yearly
                </div>
                <ul className={"plan__feature"}>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Unlimited access to 100+ Job
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 10+ Featured job
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Job duration for 30 days
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Get 10+ job
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Try for free, forever!
                  </li>
                  <li>
                    <i className={"fa-sharp fa-solid fa-check"}>

                    </i>
 Individual Job
                  </li>
                </ul>
                <Link href={"/job-list-1"} className={"rts__btn pricing__btn  no__fill__btn mt-40"} prefetch={false}>
Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
