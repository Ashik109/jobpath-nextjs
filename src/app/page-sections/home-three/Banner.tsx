export default function Banner() {
  return (
    <section className={"rts__banner overflow-hidden rts__section home__three__banner "}>
      <div className={"rts__banner__background"}>

      </div>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"rts__banner__wrapper d-flex flex-wrap flex-lg-nowrap gap-5 justify-content-between align-items-center"}>
            <div className={"rts__banner__content max-750"}>
              <h1 className={"rts__banner__title"} data-aos="fade-up">

                                Unlock Your Dream Career with Jobpath
                            
              </h1>
              <p className={"rts__banner__desc my-40 br-lg-none"} data-aos="fade-up">

                                Looking for a new job can be both exciting and daunting. Navigating the job market 
                <br />
 involves exploring various avenues, including online job boards.
                            
              </p>
              <div className={"rts__job__search form-2 max-content"} data-aos="fade-up">
                <form action={"#"} className={"d-flex align-items-center flex-wrap flex-md-nowrap flex-lg-wrap flex-xl-nowrap gap-4 justify-content-between"}>
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
                        <option value={"Rajshahi"}>
Rajshahi
                        </option>
                      </select>
                      <div className={"fa-sharp fa-thin fa-location-dot location__icon"}>

                      </div>
                    </div>
                  </div>
                  <button type={"submit"} className={"rts__btn fill__btn he-3 job__search "} aria-label={"Search"}>
Search Job
                  </button>
                </form>
              </div>
            </div>
            <div className={"rts__banner__image position-relative"}>
              <figure className={"banner__image"}>
                <img src={"/assets/img/home-3/banner/man.webp"} alt={"banner"} />
              </figure>
              <div className={"banner__image__shape"}>
                <div className={"facebook"}>
                  <i className={"fab fa-linkedin"}>

                  </i>
                </div>
                <div className={"twitter"}>
                  <i className={"fab fa-twitter"}>

                  </i>
                </div>
                <div className={"linkedin"}>
                  <i className={"fab fa-linkedin-in"}>

                  </i>
                </div>
              </div>
              <div className={"current__job d-flex gap-3"}>
                <div className={"rts__icon"}>
                  <img src={"/assets/img/icon/job.svg"} alt={""} />
                </div>
                <div className={"rts__text"}>
                  <span className={"h5 mb-0"}>
100+
                  </span>
                  <span>
Online New Job
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
