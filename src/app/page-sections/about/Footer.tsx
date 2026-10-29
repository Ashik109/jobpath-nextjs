import Link from "next/link";

export default function Footer() {
  return (
    <footer className={"rts__section  footer__home__one"}>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"footer__wrapper d-flex flex-wrap flex-column flex-sm-row gap-4 gap-md-0 gap-sm-3 justify-content-between pt-60 pb-60"}>
            <div className={"rts__footer__widget max-320"}>
              <Link href={"/"} className={"footer__logo"} aria-label={"logo"} prefetch={false}>
                <img src={"/assets/img/logo/header__one.svg"} width={"160"} height={"40"} alt={"logo"} />
              </Link>
              <p className={"mt-4"}>
Whether you're an experienced professional or a fresh graduate eager to dive into the workforce, we have something for everyone.
                    
              </p>
            </div>
            <div className={"rts__footer__widget max-content"}>
              <div className={"font-20 fw-medium mb-3 h6"}>
Links
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
              <div className={"font-20 fw-medium mb-3 h6 "}>
Contact Us
              </div>
              <ul className={"list-unstyled mb-3"}>
                <li>
                  <a href={"#"}>
                    <i className={"fa-light fa-location-dot"}>

                    </i>
2715 Ash Dr. San Jose,USA
                  </a>
                </li>
                <li>
                  <a href={"callto:+880171234578"}>
                    <i className={"fa-light fa-phone"}>

                    </i>
+(61) 545-432-234
                  </a>
                </li>
                <li>
                  <a href={"mailto:jobpath@gmail.com"}>
                    <i className={"fa-light fa-envelope"}>

                    </i>
 jobpath@gmail.com
                  </a>
                </li>
              </ul>
              <div className={"font-20 fw-medium mb-20 text-dark"}>
Social Link
              </div>
              <div className={"rts__social d-flex gap-4"}>
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
            <div className={"rts__footer__widget max-320"}>
              <div className={"font-20 fw-medium mb-3 h6 "}>
Subscribe Our Newsletter
              </div>
              <p className={"br-sm-none"}>
Subscribe Our Newsletter get 
                <br />
 Update our New Course
              </p>
              <form action={"#"} className={"d-flex align-items-center justify-content-between mt-4 newsletter"}>
                <input type={"email"} name={"semail"} id={"semail"} placeholder={"Enter your email"} required={true} />
                <button type={"submit"} className={"rts__btn fill__btn"}>
Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={"rts__copyright"}>
        <div className={"container"}>
          <p className={"text-center fw-medium py-4"}>

                Copyright © 2026 All Rights Reserved by jobpath
            
          </p>
        </div>
      </div>
    </footer>
  );
}
