import Link from "next/link";

export default function Section() {
  return (
    <div className={"rts__section overflow-hidden pt-100"}>
      <div className={"container"}>
        <div className={"row justify-content-center mb-50 position-relative mtn-1"}>
          <div className={"col-xl-6 col-lg-10"}>
            <div className={"rts__section__content text-center"} data-aos="fade-up">
              <h3 className={"rts__section__title section__mb"}>
Browse Job Category
              </h3>
              <p className={"rts__section__desc"}>
Looking for your next career opportunity. Look no further
              </p>
            </div>
          </div>
        </div>
        <div className={"row"}>
          <div className={"cat__slider overflow-hidden swiper-data cat__style__two"} data-aos="fade-up" data-swiper={"\n    {\n    \"slidesPerView\": 4, \n    \"spaceBetween\": 30,\n    \"loop\": true,\n    \"speed\": 1000,\n    \"autoplay\":{\n        \"delay\":\"7000\"\n    },\n    \"pagination\": {\n        \"el\": \".rts__pagination\",\n        \"clickable\": true\n    },\n    \"navigation\": {\n        \"nextEl\": \".rts__slide__next\",\n        \"prevEl\": \".rts__slide__prev\"\n    },\n    \"breakpoints\": {\n        \"0\": {\n            \"slidesPerView\": 1\n        },\n        \"490\": {\n            \"slidesPerView\": 1.5\n        },\n        \"768\": {\n            \"slidesPerView\": 2\n        },\n        \"1024\": {\n            \"slidesPerView\": 3\n        },\n        \"1200\": {\n            \"slidesPerView\": 3.5\n        },\n        \"1400\": {\n            \"slidesPerView\": 4\n        }\n    }\n\n}"}>
            <div className={"swiper-wrapper"}>
              <div className={"swiper-slide"}>
                <div className={"single__cat d-flex gap-4"}>
                  <div className={"single__cat__icon color-1"}>
                    <img src={"/assets/img/home-1/cat/1.svg"} alt={""} />
                  </div>
                  <div className={"single__cat__link d-flex flex-column"}>
                    <Link href={"/job-list-1"} aria-label={"cat__label"} prefetch={false}>
Development
                    </Link>
                    <span>
130+ Jobs
                    </span>
                  </div>
                </div>
              </div>
              <div className={"swiper-slide"}>
                <div className={"single__cat d-flex gap-4"}>
                  <div className={"single__cat__icon color-2"}>
                    <img src={"/assets/img/home-1/cat/2.svg"} alt={""} />
                  </div>
                  <div className={"single__cat__link d-flex flex-column"}>
                    <Link href={"/job-list-1"} aria-label={"cat__label"} prefetch={false}>
Design &amp; arts
                    </Link>
                    <span>
130+ Jobs
                    </span>
                  </div>
                </div>
              </div>
              <div className={"swiper-slide"}>
                <div className={"single__cat d-flex gap-4"}>
                  <div className={"single__cat__icon color-3"}>
                    <img src={"/assets/img/home-1/cat/3.svg"} alt={""} />
                  </div>
                  <div className={"single__cat__link d-flex flex-column"}>
                    <Link href={"/job-list-1"} aria-label={"cat__label"} prefetch={false}>
Accounting
                    </Link>
                    <span>
130+ Jobs
                    </span>
                  </div>
                </div>
              </div>
              <div className={"swiper-slide"}>
                <div className={"single__cat d-flex gap-4"}>
                  <div className={"single__cat__icon color-4"}>
                    <img src={"/assets/img/home-1/cat/4.svg"} alt={""} />
                  </div>
                  <div className={"single__cat__link d-flex flex-column"}>
                    <Link href={"/job-list-1"} aria-label={"cat__label"} prefetch={false}>
Marketting
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
        <div className={"rts__slider__control mt-40 dot__style"}>
          <div className={"rts__pagination"}>

          </div>
        </div>
      </div>
    </div>
  );
}
