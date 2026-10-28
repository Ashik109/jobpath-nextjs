import MobileNavigation from "@/app/components/MobileNavigation";
import Link from "next/link";

export default function MobileMenu() {
  return (
    <div className={"offcanvas offcanvas-end"} tabIndex={-1} id={"offcanvas"} aria-labelledby={"offcanvasLabel"}>
      <div className={"offcanvas-header p-0 mb-5 mt-4"}>
        <Link href={"/"} className={"offcanvas-title"} id={"offcanvasLabel"} prefetch={false}>
          <img src={"/assets/img/logo/header__one.svg"} alt={"logo"} />
        </Link>
        <button type={"button"} className={"btn-close"} data-bs-dismiss={"offcanvas"} aria-label={"Close"}>

        </button>
      </div>
      <div className={"mb-4 d-block d-sm-none"}>
        <div className={"header__right__btn d-flex justify-content-center gap-3"}>
          <a href={"#"} className={"small__btn no__fill__btn border-6 font-xs"} aria-label={"Login Button"} data-bs-toggle={"modal"} data-bs-target={"#loginModal"}>
            <i className={"rt-login"}>

            </i>
Sign In
          </a>
          <Link href={"/employer-dash-jobpost"} className={"small__btn d-xl-flex fill__btn border-6 font-xs"} aria-label={"Job Posting Button"} prefetch={false}>
Add Job
          </Link>
        </div>
      </div>
      <div className={"offcanvas-body p-0"}>
        <div className={"rts__offcanvas__menu overflow-hidden"}>
          <div className={"offcanvas__menu"}><MobileNavigation /></div>
        </div>
        <p className={"max-auto font-20 fw-medium text-center text-decoration-underline mt-4"}>
Our Social Links
        </p>
        <div className={"rts__social d-flex justify-content-center gap-3 mt-3"}>
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
  );
}
