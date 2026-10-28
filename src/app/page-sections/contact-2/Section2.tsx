export default function Section2() {
  return (
    <div className={"rts__section is__half__section "}>
      <div className={"container"}>
        <div className={"row justify-content-center g-0 is__no__border rounded-3 shadow-rt-sm bg-white"}>
          <div className={"col-lg-4 col-md-6"}>
            <div className={"rts__workprocess__box is__contact "}>
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
            <div className={"rts__workprocess__box is__contact "}>
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
            <div className={"rts__workprocess__box is__contact "}>
              <div className={"rts__icon"}>
                <img src={"/assets/img/icon/phone.svg"} alt={""} />
              </div>
              <span className={"process__title h6 d-block"}>
Call Here
              </span>
              <a className={"fw-medium text-para d-block"} href={"tel:+44-20-7328-4499"}>
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
