import Link from "next/link";

export default function Section5() {
  return (
    <div className={"rts__section featured__section__bg section__padding"}>
      <div className={"container"}>
        <div className={"row justify-content-center mb-60"} data-aos="fade-up">
          <div className={"col-xl-6 col-lg-10"}>
            <div className={"rts__section__content text-center"}>
              <h3 className={"rts__section__title section__mb"}>
Featured Candidates
              </h3>
              <p className={"rts__section__desc"}>
Looking for your next career opportunity. Look no further
              </p>
            </div>
          </div>
        </div>
        <div className={"swiper-data candidate__slider overflow-hidden"} data-swiper={"{\n                    \"slidesPerView\": 4, \n                    \"spaceBetween\": 30, \n                    \"loop\": true, \n                    \"pagination\": {\n                        \"el\": \".rts__pagination\",\n                        \"clickable\": true\n                    },\n                    \"breakpoints\": {\n                        \"1200\": {\n                            \"slidesPerView\": 4\n                        },\n                        \"992\": {\n                            \"slidesPerView\": 3\n                        },\n                        \"768\": {\n                            \"slidesPerView\": 2\n                        },\n                        \"576\": {\n                            \"slidesPerView\": 1.5\n                        },\n                        \"0\": {\n                            \"slidesPerView\": 1\n                        }\n                    }\n                    }"}>
          <div className={"swiper-wrapper"}>
            <div className={"swiper-slide"}>
              <div className={"rts__author__card style__two d-flex flex-column gap-3"} data-record-slug={"jonathon-doe"} data-record-kind={"candidate"} data-record-title={"Jonathon Doe"} data-record-location={"Newyork, USA"} data-record-type={"Full Time"} data-record-category={"Ui/UX Designer"}>
                <div className={"author_icon"}>
                  <img src={"/assets/img/home-2/author/1.svg"} className={"rounded-5"} alt={""} />
                </div>
                <div className={"job__meta w-100 d-flex flex-column gap-3"}>
                  <div className={"d-flex flex-column align-items-center gap-1"}>
                    <Link href={"/candidate/jonathon-doe"} className={"job__title h6 mb-0"} prefetch={false}>
Jonathon Doe
                    </Link>
                    <span className={"author"}>
Ui/UX Designer
                    </span>
                  </div>
                  <div className={"d-flex gap-3 flex-wrap justify-content-center"}>
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
                  <div className={"job__tags d-flex justify-content-center mb-3 flex-wrap gap-3"}>
                    <a href={"#"}>
Creative
                    </a>
                    <a href={"#"}>
Javascript
                    </a>
                  </div>
                  <Link href={"/candidate/jonathon-doe"} className={"apply__btn max-content"} prefetch={false}>
View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className={"swiper-slide"}>
              <div className={"rts__author__card style__two d-flex flex-column gap-3"} data-record-slug={"michael-roy"} data-record-kind={"candidate"} data-record-title={"Michael Roy"} data-record-location={"Newyork, USA"} data-record-type={"Full Time"} data-record-category={"Software Engineer"}>
                <div className={"author_icon"}>
                  <img src={"/assets/img/home-2/author/3.svg"} className={"rounded-5"} alt={""} />
                </div>
                <div className={"job__meta w-100 d-flex flex-column gap-3"}>
                  <div className={"d-flex flex-column align-items-center gap-1"}>
                    <Link href={"/candidate/michael-roy"} className={"job__title h6 mb-0"} prefetch={false}>
Michael Roy
                    </Link>
                    <span className={"author"}>
Software Engineer
                    </span>
                  </div>
                  <div className={"d-flex gap-3 flex-wrap justify-content-center"}>
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
                  <div className={"job__tags d-flex justify-content-center mb-3 flex-wrap gap-3"}>
                    <a href={"#"}>
Jquery
                    </a>
                    <a href={"#"}>
Laravel
                    </a>
                  </div>
                  <Link href={"/candidate/michael-roy"} className={"apply__btn max-content"} prefetch={false}>
View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className={"swiper-slide"}>
              <div className={"rts__author__card style__two d-flex flex-column gap-3"} data-record-slug={"al-amin-bali"} data-record-kind={"candidate"} data-record-title={"Al Amin Bali"} data-record-location={"Newyork, USA"} data-record-type={"Full Time"} data-record-category={"UX Designer"}>
                <div className={"author_icon"}>
                  <img src={"/assets/img/home-2/author/4.svg"} className={"rounded-5"} alt={""} />
                </div>
                <div className={"job__meta w-100 d-flex flex-column gap-3"}>
                  <div className={"d-flex flex-column align-items-center gap-1"}>
                    <Link href={"/candidate/al-amin-bali"} className={"job__title h6 mb-0"} prefetch={false}>
Al Amin Bali
                    </Link>
                    <span className={"author"}>
UX Designer
                    </span>
                  </div>
                  <div className={"d-flex gap-3 flex-wrap justify-content-center"}>
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
                  <div className={"job__tags d-flex justify-content-center mb-3 flex-wrap gap-3"}>
                    <a href={"#"}>
Figma
                    </a>
                    <a href={"#"}>
Photoshop
                    </a>
                  </div>
                  <Link href={"/candidate/al-amin-bali"} className={"apply__btn max-content"} prefetch={false}>
View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className={"swiper-slide"}>
              <div className={"rts__author__card style__two d-flex flex-column gap-3"} data-record-slug={"kakon-matabbar"} data-record-kind={"candidate"} data-record-title={"Kakon Matabbar"} data-record-location={"Newyork, USA"} data-record-type={"Full Time"} data-record-category={"Blockchain Dev"}>
                <div className={"author_icon"}>
                  <img src={"/assets/img/home-2/author/1.svg"} className={"rounded-5"} alt={""} />
                </div>
                <div className={"job__meta w-100 d-flex flex-column gap-3"}>
                  <div className={"d-flex flex-column align-items-center gap-1"}>
                    <Link href={"/candidate/kakon-matabbar"} className={"job__title h6 mb-0"} prefetch={false}>
Kakon Matabbar
                    </Link>
                    <span className={"author"}>
Blockchain Dev
                    </span>
                  </div>
                  <div className={"d-flex gap-3 flex-wrap justify-content-center"}>
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
                  <div className={"job__tags d-flex justify-content-center mb-3 flex-wrap gap-3"}>
                    <a href={"#"}>
NFT
                    </a>
                    <a href={"#"}>
Airdrops
                    </a>
                  </div>
                  <Link href={"/candidate/kakon-matabbar"} className={"apply__btn max-content"} prefetch={false}>
View Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"rts__slider__control style__two mt-40 dot__style"}>
          <div className={"rts__pagination"}>

          </div>
        </div>
      </div>
    </div>
  );
}
