import Link from "next/link";

export default function Footer() {
  return (
    <footer className={"rts__section  footer__home__four"}>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"footer__wrapper gap-4 gap-lg-5 flex-wrap flex-md-nowrap d-flex justify-content-sm-between justify-content-start pb-60"}>
            <div className={"rts__footer__widget max-410"}>
              <Link href={"/"} className={"footer__logo"} aria-label={"logo"} prefetch={false}>
                <img src={"/assets/img/logo/header__one.svg"} width={"160"} height={"40"} alt={"logo"} />
              </Link>
              <p className={"mt-4"}>
Subscribe Our Newsletter To get Our Update
              </p>
              <form action={"#"} className={"d-flex align-items-center justify-content-between mt-4 newsletter style-border"}>
                <input type={"email"} name={"semail"} id={"semail"} placeholder={"Enter your email"} required={true} />
                <button type={"submit"} className={"rts__btn fill__btn"}>
Subscribe
                </button>
              </form>
            </div>
            <div className={"rts__footer__widget max-content"}>
              <div className={" fw-semibold mb-3 h6 lh-1"}>
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
                  <Link href={"/employer-1"} aria-label={"footer__menu__link"} prefetch={false}>
Employer
                  </Link>
                </li>
                <li>
                  <Link href={"/candidate-1"} aria-label={"footer__menu__link"} prefetch={false}>
Candidates
                  </Link>
                </li>
                <li>
                  <Link href={"/blog-1"} aria-label={"footer__menu__link"} prefetch={false}>
Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className={"rts__footer__widget max-content"}>
              <div className={" fw-semibold mb-3 h6 lh-1"}>
Pages
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
                  <Link href={"/contact-1"} aria-label={"footer__menu__link"} prefetch={false}>
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
            <div className={"rts__footer__widget max-320"}>
              <div className={" fw-semibold mb-3 h6 lh-1"}>
Social Link
              </div>
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
          </div>
        </div>
      </div>
      <div className={"rts__copyright"}>
        <div className={"container"}>
          <p className={"text-center fw-medium py-4"}>

                Copyright © 2024 All Rights Reserved by jobpath
            
          </p>
        </div>
      </div>
    </footer>
  );
}
