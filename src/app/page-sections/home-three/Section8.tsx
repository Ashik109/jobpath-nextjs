export default function Section8() {
  return (
    <div className={"rts__section testimonial__style__three"}>
      <div className={"container position-relative"}>
        <div className={"row"}>
          <div className={"col-lg-10 col-xl-6"}>
            <div className={"rts__section__content text-start mb-40"}>
              <h3 className={"rts__section__title"}>
What Our Customer Saying
              </h3>
            </div>
          </div>
        </div>
        <div className={"row"}>
          <div className={"col-lg-11 col-md-12"}>
            <div className={"rts__testimonial__active overflow-hidden swiper-data testimonial__style__three"} data-swiper={"{\n                            \"slidesPerView\": 1,\n                            \"autoplay\": true,\n                            \"loop\": true,\n                            \"navigation\": {\n                                \"nextEl\": \".rts__slide__next\",\n                                \"prevEl\": \".rts__slide__prev\"\n                            }\n                        }"}>
              <div className={"swiper-wrapper"}>
                <div className={"swiper-slide"}>
                  <div className={"rts__single__testimonial text-start"}>
                    <span className={"testimonial__text"}>
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.
                    </span>
                    <div className={"d-flex align-items-center gap-3 pt-40 max-content"}>
                      <div className={"author__image"}>
                        <img src={"/assets/img/home-1/testimonial/author.jpg"} alt={""} />
                      </div>
                      <div className={"author__content text-start"}>
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
                  <div className={"rts__single__testimonial text-start"}>
                    <span className={"testimonial__text text-dark h5 fw-semibold"}>
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.
                    </span>
                    <div className={"d-flex align-items-center gap-3 pt-40 max-content"}>
                      <div className={"author__image"}>
                        <img src={"/assets/img/home-1/testimonial/author.jpg"} alt={""} />
                      </div>
                      <div className={"author__content text-start"}>
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
          <div className={"rts__slider__control d-none d-sm-flex d-flex gap-2 max-content position-absolute z-3 end-0 bottom-0"}>
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
