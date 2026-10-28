export default function Banner() {
  return (
    <section className={"rts__banner home__four__banner"}>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"rts__banner__wrapper flex-wrapp flex-lg-nowrap pt-120 pb-200 d-flex gap-4 justify-content-between align-items-center gap-5"}>
            <div className={"rts__banner__content"}>
              <h1 className={"rts__banner__title"} data-aos="fade-up">

                                Discover The Best Tech Top Jop In The Worldwide
                            
              </h1>
              <p className={"rts__banner__desc my-40"} data-aos="fade-up" data-aos-delay={200}>

                                Looking for a new job can be both exciting and daunting. Navigating the job market involves exploring various avenues, including online job boards.
                            
              </p>
              <div className={"rts__job__search form-4"} data-aos="fade-up">
                <form action={"#"} className={"d-flex align-items-center justify-content-between"}>
                  <input type={"text"} placeholder={"What Are You Looking For"} aria-label={"Search Job"} className={"rts__input"} required={true} />
                  <button type={"submit"} className={"rts__btn fill__btn job__search"} aria-label={"Search"}>
Search Job
                  </button>
                </form>
              </div>
            </div>
            <div className={"rts__banner__image position-relative"}>
              <figure className={"banner__image"}>
                <img src={"/assets/img/hom-4/banner/Illustration.png"} alt={""} />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
