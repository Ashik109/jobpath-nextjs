export default function Section10() {
  return (
    <section className={"rts__section pt-110"}>
      <div className={"container"}>
        <div className={"row justify-content-center position-relative"}>
          <div className={"col-xl-6 col-lg-10"}>
            <div className={"rts__section__content text-center mb-60"} data-aos="fade-up">
              <h3 className={"rts__section__title section__mb"}>
Explore Nearby with JobPath
              </h3>
              <p className={"rts__section__desc"}>
Looking for your next career opportunity. Look no further.
              </p>
            </div>
          </div>
          <div className={"rts__slider__control style-gray d-none d-md-flex z-3 w-100 justify-content-between g-0 position-absolute top-50  translate-middle-y"}>
            <div className={"rts__slide__next slider__btn"}>
              <i className={"fa-sharp fa-solid fa-chevron-left"}>

              </i>
            </div>
            <div className={"rts__slide__prev slider__btn"}>
              <i className={"fa-sharp fa-solid fa-chevron-right"}>

              </i>
            </div>
          </div>
        </div>
        <div className={"swiper-data overflow-hidden explore__slider"} data-swiper={"{\n                \"slidesPerView\": 3,\n                \"autoplay\": true,\n                \"spaceBetween\": 30,\n                \"centerSlides\": true,\n                \"loop\": true,\n                \"navigation\": {\n                    \"nextEl\": \".rts__slide__next\",\n                    \"prevEl\": \".rts__slide__prev\"\n                },\n                \"breakpoints\": {\n                    \"0\": {\n                        \"slidesPerView\": 1\n                    },\n                    \"576\": {\n                        \"slidesPerView\": 1\n                    },\n                    \"768\": {\n                        \"slidesPerView\": 2\n                    },\n                    \"992\": {\n                        \"slidesPerView\": 2.3\n                    },\n                    \"1200\": {\n                        \"slidesPerView\": 3\n                    }\n                }\n                }"}>
          <div className={"swiper-wrapper"}>
            <div className={"swiper-slide long__item"}>
              <div className={"single__destination__item "}>
                <div className={"d-block"}>
                  <div className={"destination__thumb"}>
                    <img src={"/assets/img/home-5/explore/3.webp"} alt={""} />
                  </div>
                  <div className={"destination__meta text-center"}>
                    <a href={"#"} className={"d-block h6 mb-0"}>
New York City
                    </a>
                    <span className={"d-block"}>
90+ Jobs
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={"swiper-slide"}>
              <div className={"single__destination__item"}>
                <div className={"d-block"}>
                  <div className={"destination__thumb"}>
                    <img src={"/assets/img/home-3/job/2.webp"} alt={""} />
                  </div>
                  <div className={"destination__meta text-center"}>
                    <a href={"#"} className={"d-block h6 mb-0"}>
New York City
                    </a>
                    <span className={"d-block"}>
90+ Jobs
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={"swiper-slide"}>
              <div className={"single__destination__item"}>
                <div className={"d-block"}>
                  <div className={"destination__thumb"}>
                    <img src={"/assets/img/home-3/job/3.webp"} alt={""} />
                  </div>
                  <div className={"destination__meta text-center"}>
                    <a href={"#"} className={"d-block h6 mb-0"}>
New York City
                    </a>
                    <span className={"d-block"}>
90+ Jobs
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={"swiper-slide"}>
              <div className={"single__destination__item"}>
                <div className={"d-block"}>
                  <div className={"destination__thumb"}>
                    <img src={"/assets/img/home-3/job/4.webp"} alt={""} />
                  </div>
                  <div className={"destination__meta text-center"}>
                    <a href={"#"} className={"d-block h6 mb-0"}>
New York City
                    </a>
                    <span className={"d-block"}>
90+ Jobs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
