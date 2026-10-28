export default function Banner() {
  return (
    <section className={"rts__banner position-relative home__five__banner"}>
      <div className={"container"}>
        <div className={"row justify-content-between"}>
          <div className={"rts__banner__shape d-none d-lg-block"}>
            <div className={"shape__one"}>

            </div>
            <div className={"shape__two"}>

            </div>
            <img src={"/assets/img/home-5/banner/dot__shape.svg"} className={"shape__three"} alt={""} />
          </div>
          <div className={"rts__banner__wrapper pt-150 d-flex gap-xl-4 justify-content-between align-items-center"}>
            <div className={"rts__banner__content"}>
              <h1 className={"rts__banner__title text-white mb-60"} data-aos="fade-up">

                                Your Dream Job Is Wating For You
                            
              </h1>
              <p className={"rts__banner__desc mb-5 d-xl-none d-lg-block max-700"} data-aos="fade-right">
Looking for a new job can be both exciting and daunting. Navigating the job market involves exploring various avenues, including online job boards.
              </p>
              <div className={"rts__job__search form-2 z-1 position-relative max-content"} data-aos="fade-up">
                <form action={"#"} className={"d-flex align-items-center flex-wrap flex-md-nowrap flex-xl-nowrap gap-4 justify-content-between"}>
                  <div className={"input-group flex-md-nowrap d-flex gap-4"}>
                    <div className={"single__input d-flex flex-column"}>
                      <input type={"text"} placeholder={"Enter Type of job"} />
                      <div className={"search__icon fa-light fa-magnifying-glass"}>

                      </div>
                    </div>
                    <div className={"single__input d-flex flex-column"}>
                      <select className={"form-select"} tabIndex={0} name={"filter"} aria-label={"Select Location"} defaultValue={""}>
                        <option value={""}>
Select Location
                        </option>
                        <option value={"Dhaka"}>
Dhaka
                        </option>
                        <option value={"Barisal"}>
Barisal
                        </option>
                        <option value={"Chittagong"}>
Chittagong
                        </option>
                      </select>
                      <div className={"fa-sharp fa-thin fa-location-dot location__icon"}>

                      </div>
                    </div>
                  </div>
                  <button type={"submit"} className={"rts__btn fill__btn job__search "} aria-label={"Search"}>
Search Job
                  </button>
                </form>
              </div>
              <div className={"applicant position-absolute"}>
                <div className={"applicant__list"} data-aos="fade-up">
                  <div className={"single__list"}>
                    <img src={"/assets/img/author/1.svg"} alt={""} />
                  </div>
                  <div className={"single__list"}>
                    <img src={"/assets/img/author/2.svg"} alt={""} />
                  </div>
                  <div className={"single__list"}>
                    <img src={"/assets/img/author/1.svg"} alt={""} />
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
                <span className={"text-white mt-3 d-block"}>
10k+ Candidates
                </span>
              </div>
            </div>
            <div className={"position-relative"}>
              <p className={"rts__banner__desc mb-3 d-none d-xl-block"}>
Looking for a new job can be both exciting and daunting. Navigating the job market involves exploring various avenues, including online job boards.
              </p>
            </div>
          </div>
          <div className={"d-flex justify-content-lg-between justify-content-center"}>
            <div>

            </div>
            <div className={"rts__banner__image position-relative d-flex align-items-end max-content end-0 "}>
              <figure>
                <img src={"/assets/img/home-5/banner/banner__image.webp"} alt={""} />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
