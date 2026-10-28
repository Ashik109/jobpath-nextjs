import Link from "next/link";

export default function Section3() {
  return (
    <div className={"rts__section overflow-hidden pt-100 pb-100"}>
      <div className={"container"}>
        <div className={"row justify-content-between gap-4 mb-50 position-relative mtn-1"}>
          <div className={"col-xl-6 col-lg-10"}>
            <div className={"rts__section__content text-start"} data-aos="fade-up">
              <h3 className={"rts__section__title section__mb"}>
Top Employer
              </h3>
              <p className={"rts__section__desc"}>
Looking for your next career opportunity. Look no further
              </p>
            </div>
          </div>
          <div className={"rts__slider__control style-gray align-items-end position-relative position-md-absolute bottom-md-0 right-md-0 z-3 d-none d-md-flex gap-2 max-contnet"}>
            <div className={"rts__slide__next rounded-0 slider__btn"}>
              <i className={"fa-sharp fa-solid fa-chevron-left"}>

              </i>
            </div>
            <div className={"rts__slide__prev rounded-0 slider__btn"}>
              <i className={"fa-sharp fa-solid fa-chevron-right"}>

              </i>
            </div>
          </div>
        </div>
        <div className={"row swiper-data overflow-hidden"} data-swiper={"{\n                    \"slidesPerView\": 4.1,\n                    \"autoplay\": true,\n                    \"loop\": true,\n                    \"navigation\": {\n                        \"nextEl\": \".rts__slide__next\",\n                        \"prevEl\": \".rts__slide__prev\"\n                    },\n                    \"breakpoints\": {\n                        \"0\": {\n                            \"slidesPerView\": 1.1\n                        },\n                        \"576\": {\n                            \"slidesPerView\": 1.1\n                        },\n                        \"768\": {\n                            \"slidesPerView\": 2.1\n                        },\n                        \"992\": {\n                            \"slidesPerView\": 3.1\n                        },\n                        \"1200\": {\n                            \"slidesPerView\": 4.1\n                        }\n                    }\n                    }"}>
          <div className={"swiper-wrapper"}>
            <div className={"swiper-slide"}>
              <div className={"rts__job__card style__four"} data-record-slug={"microsoft-com"} data-record-kind={"employer"} data-record-title={"Microsoft.com"} data-record-location={"Newyork, USA"} data-record-type={"Full Time"} data-record-category={"Development"}>
                <div className={"company__icon mx-auto rounded-0"}>
                  <img src={"/assets/img/home-1/company/microsoft.svg"} alt={""} />
                </div>
                <div className={"h6 job__title mt-3 mb-2"}>
                  <Link href={"/employer/microsoft-com"} aria-label={"job"} prefetch={false}>

                                        Microsoft.com
                                    
                  </Link>
                </div>
                <p>
Development
                </p>
                <div className={"d-flex justify-content-center gap-3 mt-3"}>
                  <div className={"d-flex gap-2 align-items-center"}>
                    <i className={"fa-light fa-location-dot"}>

                    </i>
 Newyork, USA
                                    
                  </div>
                </div>
                <Link href={"/employer/microsoft-com"} className={"rts__btn fill__btn"} prefetch={false}>
open Job 20
                </Link>
              </div>
            </div>
            <div className={"swiper-slide"}>
              <div className={"rts__job__card style__four"} data-record-slug={"upwork-com"} data-record-kind={"employer"} data-record-title={"Upwork.com"} data-record-location={"Newyork, USA"} data-record-type={"Full Time"} data-record-category={"Freelancing"}>
                <div className={"company__icon mx-auto rounded-0"}>
                  <img src={"/assets/img/home-1/company/upwork.svg"} alt={""} />
                </div>
                <div className={"h6 job__title mt-3 mb-2"}>
                  <Link href={"/employer/upwork-com"} aria-label={"job"} prefetch={false}>

                                    Upwork.com
                                    
                  </Link>
                </div>
                <p>
Freelancing
                </p>
                <div className={"d-flex justify-content-center gap-3 mt-3"}>
                  <div className={"d-flex gap-2 align-items-center"}>
                    <i className={"fa-light fa-location-dot"}>

                    </i>
 Newyork, USA
                                    
                  </div>
                </div>
                <Link href={"/employer/upwork-com"} className={"rts__btn fill__btn"} prefetch={false}>
open Job 20
                </Link>
              </div>
            </div>
            <div className={"swiper-slide"}>
              <div className={"rts__job__card style__four"} data-record-slug={"linkedin-com"} data-record-kind={"employer"} data-record-title={"Linkedin.com"} data-record-location={"Newyork, USA"} data-record-type={"Full Time"} data-record-category={"Ui/UX Design"}>
                <div className={"company__icon mx-auto rounded-0"}>
                  <img src={"/assets/img/home-1/company/in.svg"} alt={""} />
                </div>
                <div className={"h6 job__title mt-3 mb-2"}>
                  <Link href={"/employer/linkedin-com"} aria-label={"job"} prefetch={false}>

                                    Linkedin.com
                                    
                  </Link>
                </div>
                <p>
Ui/UX Design
                </p>
                <div className={"d-flex justify-content-center gap-3 mt-3"}>
                  <div className={"d-flex gap-2 align-items-center"}>
                    <i className={"fa-light fa-location-dot"}>

                    </i>
 Newyork, USA
                                    
                  </div>
                </div>
                <Link href={"/employer/linkedin-com"} className={"rts__btn fill__btn"} prefetch={false}>
open Job 20
                </Link>
              </div>
            </div>
            <div className={"swiper-slide"}>
              <div className={"rts__job__card style__four"} data-record-slug={"google-com"} data-record-kind={"employer"} data-record-title={"Google.com"} data-record-location={"Newyork, USA"} data-record-type={"Full Time"} data-record-category={"It & Networking"}>
                <div className={"company__icon mx-auto rounded-0"}>
                  <img src={"/assets/img/home-1/company/google.svg"} alt={""} />
                </div>
                <div className={"h6 job__title mt-3 mb-2"}>
                  <Link href={"/employer/google-com"} aria-label={"job"} prefetch={false}>

                                        Google.com
                                    
                  </Link>
                </div>
                <p>
It &amp; Networking
                </p>
                <div className={"d-flex justify-content-center gap-3 mt-3"}>
                  <div className={"d-flex gap-2 align-items-center"}>
                    <i className={"fa-light fa-location-dot"}>

                    </i>
 Newyork, USA
                                    
                  </div>
                </div>
                <Link href={"/employer/google-com"} className={"rts__btn fill__btn"} prefetch={false}>
open Job 20
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
