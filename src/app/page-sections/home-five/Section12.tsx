export default function Section12() {
  return (
    <div className={"rts__section"}>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"rts__cta__content text-center rounded-2 cta__h5__bg"}>
            <div className={"cta__shape position-absolute translate-middle"}>
              <img src={"/assets/img/home-5/cta/shape.svg"} alt={""} />
            </div>
            <div className={"cta__content position-relative z-1"}>
              <h3 className={"text-white mb-5"} data-aos="fade-up">
Join Us Today And Take The First Step Towards Your Dream Job
              </h3>
              <form action={"#"} className={"d-flex align-items-center justify-content-between mt-4 newsletter"} data-aos="fade-up">
                <input className={"rounded-1 border"} type={"email"} name={"cemail"} id={"cemail"} placeholder={"Enter your email"} required={true} />
                <span className={"position-absolute text-primary left-20 "}>
                  <i className={"fa-sharp fa-light fa-envelope"}>

                  </i>
                </span>
                <button type={"submit"} className={"rts__btn fill__btn"}>
Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
