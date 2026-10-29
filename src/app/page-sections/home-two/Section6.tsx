import { getDetails } from "@/data/details";
const blogs = getDetails("blog").slice(0, 3);
import Link from "next/link";

export default function Section6() {
  return (
    <div className={"rts__section section__padding"}>
      <div className={"container"}>
        <div className={"row justify-content-between gap-4 mb-50 position-relative mtn-1"}>
          <div className={"col-xl-6 col-lg-10"}>
            <div className={"rts__section__content text-start"} data-aos="fade-up">
              <h3 className={"rts__section__title section__mb"}>
Our Latest Blog
              </h3>
              <p className={"rts__section__desc"}>
Breaking News &amp; Current Events
              </p>
            </div>
          </div>
          <div className={"rts__slider__control style-gray style__two__control align-items-end position-relative position-md-absolute right-md-0 bottom-md-0 z-3 d-flex gap-2 max-contnet"}>
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
        <div className={"swiper-data blog__slider overflow-hidden"} data-swiper={"\n            {\"slidesPerView\": 1, \n            \"loop\": true,\n            \"speed\": 1000,\n            \"autoplay\":{\n                \"delay\":\"7000\"\n            },\n            \"navigation\": {\n                \"nextEl\": \".rts__slide__next\",\n                \"prevEl\": \".rts__slide__prev\"\n            }\n        }\n            "}>
          <div className={"swiper-wrapper"}>
{blogs.map(item => (
<div className={"swiper-slide"} key={item.slug}>
              <div className={"blog__content d-flex flex-wrap flex-xl-nowrap gap-5 align-items-center"}>
                <div className={"blog__thumb"}>
                  <Link href={`/blog/${item.slug}`} className={"blog__thumbnail"} prefetch={false}>
                    <img className={"rounded-2 w-50"} src={item.image} alt={""} />
                  </Link>
                </div>
                <div className={"blog__content__meta"}>
                  <a href={"#"} className={"category d-block"}>
Business
                  </a>
                  <Link href={`/blog/${item.slug}`} className={"blog__title l--3 h3"} prefetch={false}>{item.title}</Link>
                  <p className={"mt-4"}>{item.description}</p>
                  <div className={"blog__author mt-40 d-flex gap-3 align-items-center"}>
                    <div className={"author__img"}>
                      <img className={"rounded-5"} src={"/assets/img/home-2/author/1.svg"} alt={""} />
                    </div>
                    <div className={"author__meta"}>
                      <span className={"h6 mb-0 d-block"}>
Jack Maa
                      </span>
                      <p>
March 14, 2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
))}
</div>
        </div>
      </div>
    </div>
  );
}
