import Link from "next/link";

export default function Footer() {
  return (
    <footer className={"rts__section pt-80 footer__home__three"}>
      <div className={"container"}>
        <div className={"rts__footer__newsletter d-flex flex-wrap flex-lg-nowrap gap-5 justify-content-md-center \n        justify-content-lg-between align-items-center pb-60"}>
          <div className={"text-white text-center text-lg-start"}>
            <h3 className={"text-white text-center text-md-start mb-3"}>
Subscribe To Get Our  Newsletter
            </h3>
            <p>
Looking for your next career opportunity. Look no further
            </p>
          </div>
          <div className={"footer__newsletter__three"}>
            <form action={"#"} method={"post"} className={"d-flex justify-content-between"}>
              <input type={"email"} name={"semail"} id={"semail"} placeholder={"Enter your email"} required={true} />
              <button type={"submit"} className={"rts__btn fill__btn newsletter__btn"}>
Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={"footer__bottom py-40 text-white"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"footer__bottom__content d-flex flex-wrap gap-4 \n                align-items-center justify-content-between"}>
              <a href={"#"} className={"footer__logo"}>
                <img src={"/assets/img/logo/logo_three_footer.svg"} alt={""} />
              </a>
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
Copyright © 2024 All Rights Reserved by 
                <Link href={"/"} prefetch={false}>
jobpath
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
