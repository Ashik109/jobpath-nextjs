import Link from "next/link";

export default function Footer() {
  return (
    <footer className={"rts__section  footer__home__five pt-120"}>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"footer__wrapper d-flex flex-wrap flex-lg-nowrap gap-4 \n            justify-content-start justify-content-sm-between  pb-60"}>
            <div className={"rts__footer__widget max-content"}>
              <div className={"h6 fw-semibold mb-3 h6 lh-1"}>
Pages
              </div>
              <ul className={"list-unstyled"}>
                <li>
                  <Link href={"/"} aria-label={"footer__menu__link"} prefetch={false}>
Home
                  </Link>
                </li>
                <li>
                  <Link href={"/about"} aria-label={"footer__menu__link"} prefetch={false}>
About Us
                  </Link>
                </li>
                <li>
                  <Link href={"/employer-3"} aria-label={"footer__menu__link"} prefetch={false}>
Employer
                  </Link>
                </li>
                <li>
                  <Link href={"/candidate-4"} aria-label={"footer__menu__link"} prefetch={false}>
Candidates
                  </Link>
                </li>
                <li>
                  <Link href={"/blog-4"} aria-label={"footer__menu__link"} prefetch={false}>
Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className={"rts__footer__widget max-content"}>
              <div className={"h6 fw-semibold mb-3 h6 lh-1"}>
Resource
              </div>
              <ul className={"list-unstyled"}>
                <li>
                  <Link href={"/faq"} aria-label={"footer__menu__link"} prefetch={false}>
Faq
                  </Link>
                </li>
                <li>
                  <a href={"#"} aria-label={"footer__menu__link"}>
Review
                  </a>
                </li>
                <li>
                  <Link href={"/contact-2"} aria-label={"footer__menu__link"} prefetch={false}>
Contact
                  </Link>
                </li>
                <li>
                  <a href={"#"} aria-label={"footer__menu__link"}>
Career
                  </a>
                </li>
              </ul>
            </div>
            <div className={"rts__footer__widget max-content"}>
              <div className={"h6 fw-semibold mb-3 h6 lh-1"}>
Links
              </div>
              <ul className={"list-unstyled"}>
                <li>
                  <Link href={"/job-list-2"} aria-label={"footer__menu__link"} prefetch={false}>
Browse Jobs
                  </Link>
                </li>
                <li>
                  <Link href={"/candidate-2"} aria-label={"footer__menu__link"} prefetch={false}>
Browse Candidates
                  </Link>
                </li>
                <li>
                  <Link href={"/blog-2"} aria-label={"footer__menu__link"} prefetch={false}>
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
            <div className={"rts__footer__widget max-360"}>
              <div className={"h6 fw-semibold mb-3 h6 lh-1"}>
Download The App
              </div>
              <p>
Looking for your next career opportunity. Look no further
              </p>
              <div className={"d-flex flex-wrap gap-3 align-items-center mt-4 app__icon"}>
                <a href={"#"} aria-label={"footer__menu__link"}>
                  <img src={"/assets/img/icon/appstore.svg"} alt={""} />
                </a>
                <a href={"#"} aria-label={"footer__menu__link"}>
                  <img src={"/assets/img/icon/playstore.svg"} alt={""} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"footer__bottom footer__five__copy py-4 text-white"}>
        <div className={"container"}>
          <div className={"row g-4 align-items-center"}>
            <div className={"col-lg-5 col-md-4"}>
              <Link href={"/"} className={"footer__logo"} prefetch={false}>
                <img src={"/assets/img/logo/logo_three_footer.svg"} alt={""} />
              </Link>
            </div>
            <div className={"col-lg-7 col-md-8"}>
              <div className={"d-flex justify-content-between flex-wrap flex-md-nowrap gap-4 align-items-center"}>
                <div className={"rts__social d-flex gap-3 social__three"}>
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
                <p>
Copyright © 2026 All Rights Reserved by jobpath
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
