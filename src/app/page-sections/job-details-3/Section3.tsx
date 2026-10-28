import Link from "next/link";

export default function Section3() {
  return (
    <div className={"rts__section pb-120 overflow-hidden"}>
      <div className={"container"}>
        <div className={"row justify-content-center position-relative"}>
          <div className={"col-xl-6 col-lg-10"}>
            <div className={"rts__section__content text-center mb-60"}>
              <h3 className={"rts__section__title section__mb"}>
Related Jobs
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
        <div className={"row swiper-data overflow-hidden"} data-swiper={"{\n                \"slidesPerView\": 3,\n                \"autoplay\": true,\n                \"loop\": true,\n                \"navigation\": {\n                    \"nextEl\": \".rts__slide__next\",\n                    \"prevEl\": \".rts__slide__prev\"\n                },\n                \"breakpoints\": {\n                    \"0\": {\n                        \"slidesPerView\": 1.05\n                    },\n                    \"576\": {\n                        \"slidesPerView\": 1.05\n                    },\n                    \"768\": {\n                        \"slidesPerView\": 2.05\n                    },\n                    \"1200\": {\n                        \"slidesPerView\": 3.05\n                    }\n                }\n                }"}>
          <div className={"swiper-wrapper"}>
            <div className={"swiper-slide"}>
              <div className={"rts__job__card"} data-record-slug={"senior-ui-designer-apple"} data-record-kind={"job"} data-record-title={"Senior UI Designer, Apple"} data-record-location={"Newyork, USA"} data-record-type={"Full Time"} data-record-category={"Design"}>
                <div className={"d-flex align-items-center justify-content-between"}>
                  <div className={"company__icon"}>
                    <img src={"/assets/img/home-1/company/apple.svg"} alt={""} />
                  </div>
                </div>
                <div className={"d-flex gap-3 flex-wrap mt-4"}>
                  <div className={"d-flex gap-2 align-items-center"}>
                    <i className={"fa-light fa-location-dot"}>

                    </i>
 Newyork, USA
                                
                  </div>
                  <div className={"d-flex gap-2 align-items-center"}>
                    <i className={"fa-light fa-briefcase"}>

                    </i>
 Full Time
                                
                  </div>
                </div>
                <div className={"h6 job__title my-3"}>
                  <Link href={"/job/senior-ui-designer-apple"} aria-label={"job"} prefetch={false}>

                                    Senior UI Designer, Apple
                                
                  </Link>
                </div>
                <p>
Consectetur adipisicing elit. Possimus 
                                aut mollitia eum ipsum fugiat odio officiis odit mollitia eum ipsum.
                            
                </p>
                <div className={"job__tags d-flex flex-wrap gap-2 mt-4"}>
                  <a href={"#"}>
Creative
                  </a>
                  <a href={"#"}>
user interface
                  </a>
                  <a href={"#"}>
web ui
                  </a>
                </div>
              </div>
            </div>
            <div className={"swiper-slide"}>
              <div className={"rts__job__card"} data-record-slug={"senior-ux-designer-google"} data-record-kind={"job"} data-record-title={"Senior UX Designer, Google"} data-record-location={"Newyork, USA"} data-record-type={"Full Time"} data-record-category={"Design"}>
                <div className={"d-flex align-items-center justify-content-between"}>
                  <div className={"company__icon"}>
                    <img src={"/assets/img/home-1/company/google.svg"} alt={""} />
                  </div>
                </div>
                <div className={"d-flex gap-3 flex-wrap mt-4"}>
                  <div className={"d-flex gap-2 align-items-center"}>
                    <i className={"fa-light fa-location-dot"}>

                    </i>
 Newyork, USA
                                
                  </div>
                  <div className={"d-flex gap-2 align-items-center"}>
                    <i className={"fa-light fa-briefcase"}>

                    </i>
 Full Time
                                
                  </div>
                </div>
                <div className={"h6 job__title my-3"}>
                  <Link href={"/job/senior-ux-designer-google"} aria-label={"job"} prefetch={false}>

                                    Senior UX Designer, Google
                                
                  </Link>
                </div>
                <p>
Consectetur adipisicing elit. Possimus 
                                aut mollitia eum ipsum fugiat odio officiis odit mollitia eum ipsum.
                            
                </p>
                <div className={"job__tags d-flex flex-wrap gap-2 mt-4"}>
                  <a href={"#"}>
Creative
                  </a>
                  <a href={"#"}>
user interface
                  </a>
                  <a href={"#"}>
web ui
                  </a>
                </div>
              </div>
            </div>
            <div className={"swiper-slide"}>
              <div className={"rts__job__card"} data-record-slug={"software-engineer-bing"} data-record-kind={"job"} data-record-title={"Software Engineer, Bing"} data-record-location={"Newyork, USA"} data-record-type={"Full Time"} data-record-category={"Development"}>
                <div className={"d-flex align-items-center justify-content-between"}>
                  <div className={"company__icon"}>
                    <img src={"/assets/img/home-1/company/microsoft.svg"} alt={""} />
                  </div>
                </div>
                <div className={"d-flex gap-3 flex-wrap mt-4"}>
                  <div className={"d-flex gap-2 align-items-center"}>
                    <i className={"fa-light fa-location-dot"}>

                    </i>
 Newyork, USA
                                
                  </div>
                  <div className={"d-flex gap-2 align-items-center"}>
                    <i className={"fa-light fa-briefcase"}>

                    </i>
 Full Time
                                
                  </div>
                </div>
                <div className={"h6 job__title my-3"}>
                  <Link href={"/job/software-engineer-bing"} aria-label={"job"} prefetch={false}>

                                    Software Engineer, Bing
                                
                  </Link>
                </div>
                <p>
Consectetur adipisicing elit. Possimus 
                                aut mollitia eum ipsum fugiat odio officiis odit mollitia eum ipsum.
                            
                </p>
                <div className={"job__tags d-flex flex-wrap gap-2 mt-4"}>
                  <a href={"#"}>
Creative
                  </a>
                  <a href={"#"}>
user interface
                  </a>
                  <a href={"#"}>
web ui
                  </a>
                </div>
              </div>
            </div>
            <div className={"swiper-slide"}>
              <div className={"rts__job__card"} data-record-slug={"web-developer-upwork"} data-record-kind={"job"} data-record-title={"Web developer, Upwork"} data-record-location={"Newyork, USA"} data-record-type={"Full Time"} data-record-category={"Development"}>
                <div className={"d-flex align-items-center justify-content-between"}>
                  <div className={"company__icon"}>
                    <img src={"/assets/img/home-1/company/upwork.svg"} alt={""} />
                  </div>
                </div>
                <div className={"d-flex gap-3 flex-wrap mt-4"}>
                  <div className={"d-flex gap-2 align-items-center"}>
                    <i className={"fa-light fa-location-dot"}>

                    </i>
 Newyork, USA
                                
                  </div>
                  <div className={"d-flex gap-2 align-items-center"}>
                    <i className={"fa-light fa-briefcase"}>

                    </i>
 Full Time
                                
                  </div>
                </div>
                <div className={"h6 job__title my-3"}>
                  <Link href={"/job/web-developer-upwork"} aria-label={"job"} prefetch={false}>

                                    Web developer, Upwork
                                
                  </Link>
                </div>
                <p>
Consectetur adipisicing elit. Possimus 
                                aut mollitia eum ipsum fugiat odio officiis odit mollitia eum ipsum.
                            
                </p>
                <div className={"job__tags d-flex flex-wrap gap-2 mt-4"}>
                  <a href={"#"}>
Creative
                  </a>
                  <a href={"#"}>
user interface
                  </a>
                  <a href={"#"}>
web ui
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
