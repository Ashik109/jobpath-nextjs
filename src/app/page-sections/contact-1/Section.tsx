export default function Section() {
  return (
    <div className={"rts__section pt-120"}>
      <div className={"container"}>
        <div className={"row g-30"}>
          <div className={"col-lg-4 col-md-6"}>
            <div className={"rts__workprocess__box is__contact rounded-3"}>
              <div className={"rts__icon"}>
                <img src={"/assets/img/icon/location.svg"} alt={""} />
              </div>
              <span className={"process__title h6 d-block"}>
Location Here
              </span>
              <p className={"fw-medium"}>
71-75 Shelton Street, London, Greater London, United Kingdom
                        
              </p>
            </div>
          </div>
          <div className={"col-lg-4 col-md-6"}>
            <div className={"rts__workprocess__box is__contact rounded-3"}>
              <div className={"rts__icon"}>
                <img src={"/assets/img/icon/mail.svg"} alt={""} />
              </div>
              <span className={"process__title h6 d-block"}>
Email Here
              </span>
              <a className={"text-para fw-medium"} href={"mailto:2R0Z9@example.com"}>
2R0Z9@example.com
              </a>
              <a className={"text-para fw-medium"} href={"mailto:2R0Z9@example.com"}>
2R0Z9@example.com
              </a>
            </div>
          </div>
          <div className={"col-lg-4 col-md-6"}>
            <div className={"rts__workprocess__box is__contact rounded-3"}>
              <div className={"rts__icon"}>
                <img src={"/assets/img/icon/phone.svg"} alt={""} />
              </div>
              <span className={"process__title h6 d-block"}>
Call Here
              </span>
              <a className={"fw-medium text-para"} href={"tel:+44-20-7328-4499"}>
+44-20-7328-4499
              </a>
              <a className={"fw-medium text-para"} href={"tel:+44-20-7328-4499"}>
+44-20-7328-4499
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
