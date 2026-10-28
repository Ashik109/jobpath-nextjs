import Link from "next/link";

export default function Section() {
  return (
    <div className={"rts__section overflow-hidden section__padding"}>
      <div className={"container"}>
        <div className={"row justify-content-between gap-4 mb-50 position-relative mtn-1"}>
          <div className={"col-xl-6 col-lg-10"}>
            <div className={"rts__section__content text-start"} data-aos="fade-up">
              <h3 className={"rts__section__title section__mb"}>
Browse Job Category
              </h3>
              <p className={"rts__section__desc"}>
Looking for your next career opportunity. Look no further
              </p>
            </div>
          </div>
          <div className={"rts__slider__control style-gray pe-0 style__two__control align-items-end position-relative\n                    position-md-absolute right-md-0 bottom-md-0 z-3 d-flex gap-2 max-contnet"}>
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
        <div className={"row"}>
          <div className={"cat__slider overflow-hidden swiper-data"} data-swiper={"\n                    {\n                    \"slidesPerView\": 4, \n                    \"spaceBetween\": 30,\n                    \"loop\": true,\n                    \"speed\": 1000,\n                    \"autoplay\":{\n                        \"delay\":\"7000\"\n                    },\n                    \"pagination\": {\n                        \"el\": \".rts__pagination\",\n                        \"clickable\": true\n                    },\n                    \"navigation\": {\n                        \"nextEl\": \".rts__slide__next\",\n                        \"prevEl\": \".rts__slide__prev\"\n                    },\n                    \"breakpoints\": {\n                        \"1200\": {\n                            \"slidesPerView\": 4\n                        },\n                        \"992\": {\n                            \"slidesPerView\": 3\n                        },\n                        \"768\": {\n                            \"slidesPerView\": 2.2\n                        },\n                        \"576\": {\n                            \"slidesPerView\": 2\n                        },\n                        \"0\": {\n                            \"slidesPerView\": 1.2\n                        }\n                    }\n                \n                }"}>
            <div className={"swiper-wrapper"}>
              <div className={"swiper-slide"}>
                <div className={"single__cat style__two d-flex text-center flex-column \n                                justify-content-center gap-4"}>
                  <div className={"single__cat__icon bg-white mx-auto rounded-5 color-1"}>
                    <img src={"/assets/img/home-1/cat/1.svg"} alt={""} />
                  </div>
                  <div className={"single__cat__link d-flex gap-2 flex-column"}>
                    <Link href={"/job-list-2"} aria-label={"cat__label"} prefetch={false}>
Development
                    </Link>
                    <span>
130+ Jobs
                    </span>
                  </div>
                </div>
              </div>
              <div className={"swiper-slide"}>
                <div className={"single__cat style__two d-flex text-center flex-column \n                                justify-content-center gap-4"}>
                  <div className={"single__cat__icon bg-white mx-auto rounded-5 color-1"}>
                    <img src={"/assets/img/home-1/cat/2.svg"} alt={""} />
                  </div>
                  <div className={"single__cat__link d-flex gap-2 flex-column"}>
                    <Link href={"/job-list-2"} aria-label={"cat__label"} prefetch={false}>
Design &amp; arts
                    </Link>
                    <span>
130+ Jobs
                    </span>
                  </div>
                </div>
              </div>
              <div className={"swiper-slide"}>
                <div className={"single__cat style__two d-flex text-center flex-column \n                                justify-content-center gap-4"}>
                  <div className={"single__cat__icon bg-white mx-auto rounded-5 color-1"}>
                    <img src={"/assets/img/home-1/cat/3.svg"} alt={""} />
                  </div>
                  <div className={"single__cat__link d-flex gap-2 flex-column"}>
                    <Link href={"/job-list-2"} aria-label={"cat__label"} prefetch={false}>
Accounting
                    </Link>
                    <span>
120+ Jobs
                    </span>
                  </div>
                </div>
              </div>
              <div className={"swiper-slide"}>
                <div className={"single__cat style__two d-flex text-center flex-column \n                                justify-content-center gap-4"}>
                  <div className={"single__cat__icon bg-white mx-auto rounded-5 color-1"}>
                    <img src={"/assets/img/home-1/cat/4.svg"} alt={""} />
                  </div>
                  <div className={"single__cat__link d-flex gap-2 flex-column"}>
                    <Link href={"/job-list-2"} aria-label={"cat__label"} prefetch={false}>
Marketing
                    </Link>
                    <span>
130+ Jobs
                    </span>
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
