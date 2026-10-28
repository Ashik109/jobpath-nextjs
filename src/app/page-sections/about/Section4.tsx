import Link from "next/link";
export default function Section4() {
  return (
    <div className={"rts__section overflow-hidden pt-100 pb-100"}>
      <div className={"container"}>
        <div className={"row justify-content-between gap-4 mb-50 position-relative mtn-1"}>
          <div className={"col-xl-6 col-lg-10"}>
            <div className={"rts__section__content text-start"} data-aos="fade-up">
              <h3 className={"rts__section__title section__mb"}>
Let’s Meet Our Team
              </h3>
              <p className={"rts__section__desc"}>
Our job board offers a wide range
              </p>
            </div>
          </div>
          <div className={"rts__slider__control style-gray align-items-end position-relative z-3 d-none d-md-flex gap-2 max-contnet"}>
            <div className={"rts__slide__next rounded-2 slider__btn"}>
              <i className={"fa-sharp fa-solid fa-chevron-left"}>

              </i>
            </div>
            <div className={"rts__slide__prev rounded-2 slider__btn"}>
              <i className={"fa-sharp fa-solid fa-chevron-right"}>

              </i>
            </div>
          </div>
        </div>
        <div className={"row swiper-data overflow-hidden"} data-swiper={"{\n                    \"slidesPerView\": 4,\n                    \"autoplay\": true,\n                    \"loop\": true,\n                    \"navigation\": {\n                        \"nextEl\": \".rts__slide__next\",\n                        \"prevEl\": \".rts__slide__prev\"\n                    },\n                    \"breakpoints\": {\n                        \"0\": {\n                            \"slidesPerView\": 1.05\n                        },\n                        \"490\": {\n                            \"slidesPerView\": 1.05\n                        },\n                        \"768\": {\n                            \"slidesPerView\": 2\n                        },\n                        \"1024\": {\n                            \"slidesPerView\": 3\n                        },\n                        \"1200\": {\n                            \"slidesPerView\": 4\n                        }\n                    }\n                    }"}>
          <div className={"swiper-wrapper"}>
            <div className={"swiper-slide"}>
              <div className={"team__member text-center"}>
                <a href={"#"}>
                  <img className={"rounded-3"} src={"/assets/img/team/1.webp"} alt={""} />
                </a>
                <div className={"team__member__meta mt-3"}>
                  <Link href={"/candidate/al-amin-bali"} className={"h6 fw-semibold text-dark mb-0 d-block"} prefetch={false}>
Al Amin Bali
                  </Link>
                  <span className={"font-sm fw-medium"}>
UX Designer
                  </span>
                  <div className={"social__link d-flex gap-2 justify-content-center align-items-center"}>
                    <a className={"text-body"} href={"#"}>
                      <i className={"rt-facebook"}>

                      </i>
                    </a>
                    <a className={"text-body"} href={"#"}>
                      <i className={"fa-brands fa-linkedin"}>

                      </i>
                    </a>
                    <a className={"text-body"} href={"#"}>
                      <i className={"fa-brands fa-skype"}>

                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={"swiper-slide"}>
              <div className={"team__member text-center"}>
                <a href={"#"}>
                  <img className={"rounded-3"} src={"/assets/img/team/2.webp"} alt={""} />
                </a>
                <div className={"team__member__meta mt-3"}>
                  <Link href={"/candidate/jonathon-doe"} className={"h6 fw-semibold text-dark mb-0 d-block"} prefetch={false}>
Jonathon Doe
                  </Link>
                  <span className={"font-sm fw-medium"}>
UI/UX Designer
                  </span>
                  <div className={"social__link d-flex gap-2 justify-content-center align-items-center"}>
                    <a className={"text-body"} href={"#"}>
                      <i className={"rt-facebook"}>

                      </i>
                    </a>
                    <a className={"text-body"} href={"#"}>
                      <i className={"fa-brands fa-linkedin"}>

                      </i>
                    </a>
                    <a className={"text-body"} href={"#"}>
                      <i className={"fa-brands fa-skype"}>

                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={"swiper-slide"}>
              <div className={"team__member text-center"}>
                <a href={"#"}>
                  <img className={"rounded-3"} src={"/assets/img/team/3.webp"} alt={""} />
                </a>
                <div className={"team__member__meta mt-3"}>
                  <a href={"#"} className={"h6 fw-semibold text-dark mb-0 d-block"}>
Emma Elizabeth
                  </a>
                  <span className={"font-sm fw-medium"}>
Software Engineer
                  </span>
                  <div className={"social__link d-flex gap-2 justify-content-center align-items-center"}>
                    <a className={"text-body"} href={"#"}>
                      <i className={"rt-facebook"}>

                      </i>
                    </a>
                    <a className={"text-body"} href={"#"}>
                      <i className={"fa-brands fa-linkedin"}>

                      </i>
                    </a>
                    <a className={"text-body"} href={"#"}>
                      <i className={"fa-brands fa-skype"}>

                      </i>
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
