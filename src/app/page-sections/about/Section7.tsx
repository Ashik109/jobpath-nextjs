export default function Section7() {
  return (
    <div className={"rts__section pb-120"}>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"rts__appcenter"}>
            <div className={"rts__appcenter__shape"}>
              <img src={"/assets/img/home-1/app/shape.png"} alt={""} />
            </div>
            <div className={"rts__appcenter__content d-flex flex-wrap flex-xl-nowrap align-items-center justify-content-between justify-content-lg-center"}>
              <div className={"content__left align-items-end d-flex position-relative top-15px"}>
                <img src={"/assets/img/home-1/app/app_screen.png"} alt={""} />
              </div>
              <div className={"content__right text-white text-center text-xl-start max-630"}>
                <h3 className={"l--1 mb-4 text-white"} data-aos="fade-up" data-aos-delay={100}>
Download The app Free!
                </h3>
                <p className={""} data-aos="fade-up" data-aos-delay={200}>
Looking for a new job can be both exciting and daunting. Navigating the job market involves exploring various avenues.
                </p>
                <div className={"d-flex gap-3 justify-content-center justify-content-xl-start flex-wrap mt-40"} data-aos="fade-up" data-aos-delay={300}>
                  <div className={"link"}>
                    <a href={"https://appstore.com"} target={"_blank"} title={"app store"}>
                      <img src={"/assets/img/home-1/app/app-store.svg"} alt={""} />
                    </a>
                  </div>
                  <div className={"link"}>
                    <a href={"https://google.com"} target={"_blank"} title={"play store"}>
                      <img src={"/assets/img/home-1/app/play-store.svg"} alt={""} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
