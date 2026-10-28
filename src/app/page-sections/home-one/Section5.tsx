import Link from "next/link";

export default function Section5() {
  return (
    <div className={"rts__section pb-120"}>
      <div className={"container"}>
        <div className={"row align-items-center g-5"}>
          <div className={"col-lg-5"}>
            <div className={"rts__image__section"}>
              <img src={"/assets/img/home-1/we-are/image.webp"} alt={""} />
            </div>
          </div>
          <div className={"col-lg-7"}>
            <div className={"rts__content__section ms-lg-4 ms-md-0"} data-aos="fade-up">
              <h3 className={"fw-bold mb-4"}>
Why We Are Most Popular
              </h3>
              <p>
Whether you're an experienced professional or a fresh graduate eager to dive into the workforce, we have something for everyone. From tech wizards to marketing mavens, finance gurus to creative minds, our diverse range of listings caters to a variety of skills and interests.
              </p>
              <div className={"mt-40 rts__listing"}>
                <div className={"single__listing d-flex align-items-center gap-4"}>
                  <span className={"icon"}>
                    <i className={"fa-regular fa-check"}>

                    </i>
                  </span>
                  <span>
Quality Job
                  </span>
                </div>
                <div className={"single__listing d-flex align-items-center gap-4"}>
                  <span className={"icon"}>
                    <i className={"fa-regular fa-check"}>

                    </i>
                  </span>
                  <span>
Reach 100s contacts
                  </span>
                </div>
                <div className={"single__listing d-flex align-items-center gap-4"}>
                  <span className={"icon"}>
                    <i className={"fa-regular fa-check"}>

                    </i>
                  </span>
                  <span>
No Extra Charge
                  </span>
                </div>
                <div className={"single__listing d-flex align-items-center gap-4"}>
                  <span className={"icon"}>
                    <i className={"fa-regular fa-check"}>

                    </i>
                  </span>
                  <span>
Internation job   
                  </span>
                </div>
              </div>
              <Link href={"/job-list-2"} className={"rts__btn common__btn  fill__btn mt-50"} prefetch={false}>
Explore More 
                <i className={"fa-regular fa-arrow-right"}>

                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
