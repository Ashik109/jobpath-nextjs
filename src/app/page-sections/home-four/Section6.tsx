export default function Section6() {
  return (
    <div className={"rts__section rts__appsection"}>
      <div className={"container"}>
        <div className={"row g-30 align-items-center"}>
          <div className={"col-lg-6 col-md-10"}>
            <div className={"app__image__section me-lg-5 me-md-0 "}>
              <img src={"/assets/img/hom-4/app__svg.svg"} alt={""} />
            </div>
          </div>
          <div className={"col-lg-6 col-md-10"}>
            <div className={"app__content__section"}>
              <h3 className={"app__title mb-4 br-lg-none"} data-aos="fade-up">
Download Our Job App 
                <br />

                                For Android &amp; Ios
              </h3>
              <p className={"app__desc"} data-aos="fade-up">
Looking for a new job can be both exciting and daunting. Navigating the job market involves exploring various avenues.
              </p>
              <div className={"app__list flex-wrap justify-content-center justify-content-sm-start mt-5 d-flex gap-3"}>
                <a href={"#"} className={"app__link"}>
                  <img src={"/assets/img/home-1/app/app-store-white.svg"} alt={""} />
                </a>
                <a href={"#"} className={"app__link"}>
                  <img src={"/assets/img/home-1/app/play-store-white.svg"} alt={""} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
