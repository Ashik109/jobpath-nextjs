export default function Section2() {
  return (
    <section className={"rts__section section__padding"}>
      <div className={"container"}>
        <div className={"row align-items-center justify-content-center g-30"}>
          <div className={"col-lg-5 offset-xl-1 col-xl-5"}>
            <div className={"rts__workprocess__image"}>
              <img src={"/assets/img/home-3/about/about-image.webp"} alt={""} />
              <div className={"rts__applicants"} data-aos="fade-right">
                <span className={"font-20 mb-3 d-block fw-medium"}>
Applicants
                </span>
                <div className={"applicant__list"}>
                  <div className={"single__list"}>
                    <img src={"/assets/img/author/1.svg"} alt={""} />
                  </div>
                  <div className={"single__list"}>
                    <img src={"/assets/img/author/2.svg"} alt={""} />
                  </div>
                  <div className={"single__list"}>
                    <img src={"/assets/img/author/3.svg"} alt={""} />
                  </div>
                  <div className={"single__list"}>
                    <img src={"/assets/img/author/4.svg"} alt={""} />
                    <div className={"icon-plus"}>
                      <i className={"fa-sharp fa-solid fa-plus"}>

                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"col-lg-7 col-xl-6"}>
            <div className={"rts__workprocess__content mx-0 mx-lg-5"} data-aos="fade-up">
              <div className={"rts__section__content text-start"}>
                <h3 className={"rts__section__title mb-3"}>
How Jobpath Works
                </h3>
                <p className={"rts__section__desc"}>
From entry-level positions to executive roles browse through.   
                </p>
              </div>
              <div className={"single__feature__list"}>
                <div className={"single__item d-flex align-items-center flex-wrap flex-sm-nowrap gap-4"}>
                  <div className={""}>
                    <div className={"icon"}>
                      <img src={"/assets/img/icon/create.svg"} alt={""} />
                    </div>
                  </div>
                  <div className={"content"}>
                    <span className={"h6 d-block"}>
Create a Free Account
                    </span>
                    <p>
Consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit mollitia eum ipsum.
                    </p>
                  </div>
                </div>
                <div className={"single__item d-flex align-items-center flex-wrap flex-sm-nowrap gap-4"}>
                  <div className={""}>
                    <div className={"icon"}>
                      <img src={"/assets/img/icon/khata.svg"} alt={""} />
                    </div>
                  </div>
                  <div className={"content"}>
                    <span className={"h6 d-block"}>
Make Your Resume Amazing
                    </span>
                    <p>
Consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit mollitia eum ipsum.
                    </p>
                  </div>
                </div>
                <div className={"single__item d-flex align-items-center flex-wrap flex-sm-nowrap gap-4"}>
                  <div className={""}>
                    <div className={"icon"}>
                      <img src={"/assets/img/icon/apply.svg"} alt={""} />
                    </div>
                  </div>
                  <div className={"content"}>
                    <span className={"h6 d-block"}>
Apply  job
                    </span>
                    <p>
Consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit mollitia eum ipsum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
