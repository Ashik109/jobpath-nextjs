export default function Banner() {
  return (
    <section className={"rts__banner position-relative home__six__banner"}>
      <div className={"container"}>
        <div className={"row justify-content-between"}>
          <div className={"rts__banner__shape d-none d-lg-block"}>
            <div className={"shape__one shape"}>
              <img src={"/assets/img/icon/google.svg"} alt={""} />
            </div>
            <div className={"shape__two shape"}>
              <img src={"/assets/img/icon/upwork.svg"} alt={""} />
            </div>
            <div className={"shape__three shape"}>
              <img src={"/assets/img/icon/microsoft.svg"} alt={""} />
            </div>
            <div className={"shape__four shape"}>
              <img src={"/assets/img/icon/apple.svg"} alt={""} />
            </div>
            <div className={"shape__five shape"}>
              <img src={"/assets/img/icon/linkedin.svg"} alt={""} />
            </div>
            <div className={"shape__six shape"}>
              <img src={"/assets/img/icon/facebook.svg"} alt={""} />
            </div>
          </div>
          <div className={"rts__banner__wrapper position-relative z-3 text-center"}>
            <div className={"rts__banner__content"}>
              <h1 className={"rts__banner__title mb-4"} data-aos="fade-up">

                                Explore A new job opportunities
                            
              </h1>
              <p className={"mb-40 br-lg-none"} data-aos="fade-up">
Looking for a new job can be both exciting and daunting. Navigating the job market involves exploring 
                <br />
 various avenues, including online job boards.
              </p>
              <div className={"rts__job__search form-2 z-1 position-relative mx-auto max-content mb-5 mb-lg-0"} data-aos="fade-up">
                <form action={"#"} className={"d-flex align-items-center flex-wrap flex-md-nowrap  gap-4 justify-content-between"}>
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
                  <button type={"submit"} className={"rts__btn he-3 fill__btn job__search "} aria-label={"Search"}>
Search Job
                  </button>
                </form>
              </div>
            </div>
            <div className={"rts__banner__images d-flex justify-content-center justify-content-sm-between flex-wrap flex-sm-nowrap"}>
              <div>
                <img className={"rounded-full"} src={"/assets/img/home-6/banner/banner-image-1.jpg"} alt={""} />
              </div>
              <div className={"shape d-none d-lg-block"}>
                <img src={"/assets/img/home-6/banner/banner-shape.svg"} alt={""} />
              </div>
              <div>
                <img className={"rounded-2"} src={"/assets/img/home-6/banner/banner-image-2.jpg"} alt={""} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
