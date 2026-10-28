export default function Section5() {
  return (
    <section className={"rts__section pb-120"}>
      <div className={"container"}>
        <div className={"row justify-content-between gap-4 mb-50"}>
          <div className={"col-xl-6 col-lg-10"}>
            <div className={"rts__section__content text-start"} data-aos="fade-up">
              <h3 className={"rts__section__title section__mb"}>
Explore Nearby with JobPath
              </h3>
              <p className={"rts__section__desc"}>
Looking for your next career opportunity. Look no further
              </p>
            </div>
          </div>
          <div className={"d-flex align-items-end max-content"}>
            <a href={"#"} className={"view__all text-dark d-flex gap-2 align-items-center"}>
View All 
              <i className={"fa-regular fa-arrow-right"}>

              </i>
            </a>
          </div>
        </div>
      </div>
      <div className={"explore__job__slider swiper swiper-data"} data-swiper={"\n            {\n            \"slidesPerView\": 6.5, \n            \"spaceBetween\": 30,\n            \"loop\": true,\n            \"speed\": 1000,\n            \"centeredSlides\": true,\n            \"autoplay\":{\n                \"delay\":\"7000\"\n            },\n            \"breakpoints\": {\n                \"1200\": {\n                    \"slidesPerView\": 5\n                },\n                \"992\": {\n                    \"slidesPerView\": 4\n                },\n                \"768\": {\n                    \"slidesPerView\": 2.5\n                },\n                \"576\": {\n                    \"slidesPerView\": 2\n                },\n                \"0\": {\n                    \"slidesPerView\": 1.5\n                }\n            }\n        \n        }"}>
        <div className={"swiper-wrapper"}>
          <div className={"swiper-slide"}>
            <div className={"single__destination__item is__full__width"}>
              <div className={"d-block"}>
                <div className={"destination__thumb"}>
                  <a href={"#"}>
                    <img src={"/assets/img/home-3/job/1.webp"} alt={""} />
                  </a>
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
            <div className={"single__destination__item is__full__width"}>
              <div className={"d-block"}>
                <div className={"destination__thumb"}>
                  <a href={"#"}>
                    <img src={"/assets/img/home-3/job/2.webp"} alt={""} />
                  </a>
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
            <div className={"single__destination__item is__full__width"}>
              <div className={"d-block"}>
                <div className={"destination__thumb"}>
                  <a href={"#"}>
                    <img src={"/assets/img/home-3/job/3.webp"} alt={""} />
                  </a>
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
            <div className={"single__destination__item is__full__width"}>
              <div className={"d-block"}>
                <div className={"destination__thumb"}>
                  <a href={"#"}>
                    <img src={"/assets/img/home-3/job/4.webp"} alt={""} />
                  </a>
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
            <div className={"single__destination__item is__full__width"}>
              <div className={"d-block"}>
                <div className={"destination__thumb"}>
                  <a href={"#"}>
                    <img src={"/assets/img/home-3/job/5.webp"} alt={""} />
                  </a>
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
    </section>
  );
}
