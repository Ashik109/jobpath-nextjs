export default function Section5() {
  return (
    <div className={"rts__section section__padding rts__testimonial__background"}>
      <div className={"container position-relative"}>
        <div className={"row justify-content-center"}>
          <div className={"col-xl-6 col-lg-10"}>
            <div className={"rts__section__content text-center mb-60"} data-aos="fade-up">
              <h3 className={"rts__section__title section__mb"}>
What Our Customer Saying
              </h3>
              <p className={"rts__section__desc"}>
Looking for your next career opportunity. Look no further
              </p>
            </div>
          </div>
        </div>
        <div className={"row justify-content-center"}>
          <div className={"col-lg-8"}>
            <div className={"rts__testimonial__active overflow-hidden swiper-data"} data-swiper={"{\n                            \"slidesPerView\": 1,\n                            \"autoplay\": true,\n                            \"loop\": true,\n                            \"navigation\": {\n                                \"nextEl\": \".rts__slide__next\",\n                                \"prevEl\": \".rts__slide__prev\"\n                            }\n                        }"}>
              <div className={"swiper-wrapper"}>
                <div className={"swiper-slide"}>
                  <div className={"rts__single__testimonial text-center"}>
                    <div className={"rts__quote mb-40"}>
                      <img className={"opacity-50"} src={"/assets/img/icon/quote.svg"} alt={""} />
                    </div>
                    <div className={"testimonial__text h6    "}>
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia
                    </div>
                    <div className={"d-flex align-items-center justify-content-center mx-auto gap-3 pt-40 max-content"}>
                      <div className={"author__content text-center"}>
                        <span className={"h6"}>
Alexander Joy
                        </span>
                        <p>
Web Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"swiper-slide"}>
                  <div className={"rts__single__testimonial text-center"}>
                    <div className={"rts__quote mb-40"}>
                      <img className={"opacity-50"} src={"/assets/img/icon/quote.svg"} alt={""} />
                    </div>
                    <div className={"testimonial__text h6    "}>
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia
                    </div>
                    <div className={"d-flex align-items-center justify-content-center mx-auto gap-3 pt-40 max-content"}>
                      <div className={"author__content text-center"}>
                        <span className={"h6"}>
Alexander Joy
                        </span>
                        <p>
Web Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"rts__slider__control d-none d-lg-flex justify-content-between g-0 position-absolute top-50  translate-middle-y"}>
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
      </div>
    </div>
  );
}
