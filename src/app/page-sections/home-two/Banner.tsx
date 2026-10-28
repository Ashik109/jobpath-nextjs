export default function Banner() {
  return (
    <section className={"rts__banner home__two__banner pt-260"}>
      <div className={"container"}>
        <div className={"row justify-content-center"}>
          <div className={"col-lg-10"}>
            <div className={"rts__banner__wrapper"}>
              <div className={"rts__banner__content"}>
                <h1 className={"rts__banner__title text-center text-white"} data-aos="fade-up">

                                Discover Your Ideal Career 
                                Path with 
                  <img className={"mx-3"} src={"/assets/img/home-2/banner__text__icon.svg"} alt={""} />
Jobpath
                            
                </h1>
                <p className={"rts__banner__desc br-md-none text-center text-white my-40"} data-aos="fade-up">

                                Looking for a new job can be both exciting and daunting. Navigating the job market 
                  <br />
 involves
                                exploring various avenues, including online job boards.
                            
                </p>
                <div className={"rts__job__search max-720 mx-auto rounded-50"} data-aos="fade-up">
                  <form action={"#"} className={"d-flex align-items-center flex-wrap \n                                flex-md-nowrap gap-4 gap-xl-0 justify-content-between"}>
                    <div className={"input-group d-flex gap-4"}>
                      <div className={"single__input d-flex flex-column"}>
                        <label htmlFor={"location"}>
location
                        </label>
                        <select name={"location"} className={"select-nice"} id={"location"}>
                          <option value={"1"}>
Select Location
                          </option>
                          <option value={"2"}>
Dhaka
                          </option>
                          <option value={"3"}>
Barisal
                          </option>
                          <option value={"4"}>
Chittagong
                          </option>
                        </select>
                      </div>
                      <div className={"vr d-none d-md-block"}>

                      </div>
                      <div className={"single__input d-flex flex-column"}>
                        <label htmlFor={"job__type"}>
job type
                        </label>
                        <select name={"job__type"} className={"select-nice"} id={"job__type"}>
                          <option value={"1"}>
Select Job Type
                          </option>
                          <option value={"2"}>
Full Time
                          </option>
                          <option value={"3"}>
Part Time
                          </option>
                          <option value={"4"}>
Internship
                          </option>
                        </select>
                      </div>
                    </div>
                    <button type={"submit"} className={"rts__btn he-2 fill__btn job__search rounded-5 gap-2"} aria-label={"Search"}>
                      <i className={"fa-light fa-magnifying-glass"}>

                      </i>
 Search
                                        Job
                    </button>
                  </form>
                </div>
                <div className={"d-flex gap-3 flex-wrap align-items-center justify-content-center mt-30 position-relative z-0"}>
                  <span className={"font-20  text-white mb-0 d-block fw-medium"}>
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
                        <i className={"fa-sharp fa-regular fa-plus"}>

                        </i>
                      </div>
                    </div>
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
