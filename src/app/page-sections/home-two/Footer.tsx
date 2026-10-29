import Link from "next/link";

export default function Footer() {
  return (
    <footer className={"rts__section  footer__home__two"}>
      <div className={"container"}>
        <div className={"row g-30"}>
          <div className={"col-lg-6"}>
            <div className={"footer__social__left"}>
              <h2 className={"text-white"}>
Never Want to Miss Any job News Ready To Get Started?
              </h2>
              <div className={"rts__footer__widget max-content"}>
                <form action={"#"} className={"d-flex align-items-center justify-content-between mt-5  newsletter mnw-500"}>
                  <input type={"email"} name={"semail"} id={"semail"} placeholder={"Enter your email"} className={"rounded-1"} required={true} />
                  <button type={"submit"} className={"rts__btn fill__btn he-2"}>
Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className={"col-lg-6"}>
            <div className={"d-flex justify-content-around justify-content-md-between flex-wrap gap-4 "}>
              <div className={"rts__footer__widget max-content"}>
                <div className={"text-white fw-semibold mb-3 h6 lh-1"}>
Job Seekers
                </div>
                <ul className={"list-unstyled"}>
                  <li>
                    <Link href={"/job-list-1"} aria-label={"footer__menu__link"} prefetch={false}>
Browse Jobs
                    </Link>
                  </li>
                  <li>
                    <Link href={"/candidate-1"} aria-label={"footer__menu__link"} prefetch={false}>
Browse Candidates
                    </Link>
                  </li>
                  <li>
                    <Link href={"/blog-1"} aria-label={"footer__menu__link"} prefetch={false}>
Blog &amp; News
                    </Link>
                  </li>
                  <li>
                    <Link href={"/faq"} aria-label={"footer__menu__link"} prefetch={false}>
FAQ Question
                    </Link>
                  </li>
                  <li>
                    <a href={"#"} aria-label={"footer__menu__link"}>
Job Alerts
                    </a>
                  </li>
                </ul>
              </div>
              <div className={"rts__footer__widget max-content"}>
                <div className={"text-white fw-semibold mb-3 h6 lh-1"}>
Employer
                </div>
                <ul className={"list-unstyled"}>
                  <li>
                    <Link href={"/employer-1"} aria-label={"footer__menu__link"} prefetch={false}>
All Employer
                    </Link>
                  </li>
                  <li>
                    <Link href={"/job-list-3"} aria-label={"footer__menu__link"} prefetch={false}>
Browse Job
                    </Link>
                  </li>
                  <li>
                    <a href={"#"} aria-label={"footer__menu__link"}>
Job Alert
                    </a>
                  </li>
                  <li>
                    <Link href={"/faq"} aria-label={"footer__menu__link"} prefetch={false}>
FAQ Question
                    </Link>
                  </li>
                  <li>
                    <Link href={"/job-list-4"} aria-label={"footer__menu__link"} prefetch={false}>
Job Package
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"rts__copyright mt-60"}>
        <div className={"container"}>
          <div className={"d-flex align-items-center flex-wrap gap-4 py-4 justify-content-between"}>
            <p className={"text-gray fw-medium "}>

                    Copyright © 2026 All Rights Reserved by jobpath
                
            </p>
            <div className={"rts__social social__two d-flex gap-3 text-white max-content"}>
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
        </div>
      </div>
    </footer>
  );
}
