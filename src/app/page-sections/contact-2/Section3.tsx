export default function Section3() {
  return (
    <div className={"rts__section section__padding"}>
      <div className={"container"}>
        <div className={"row align-items-center g-5"}>
          <div className={"col-lg-6 pe-5"}>
            <div className={"contact__image"}>
              <figure>
                <img src={"/assets/img/pages/contact.webp"} alt={""} />
              </figure>
            </div>
          </div>
          <div className={"col-lg-6 "}>
            <span className={"h4 fw-normal"}>
              <strong className={"fw-bold"}>
Love to hear from you
              </strong>
              <br />

                        Get in touch!
                    
            </span>
            <div className={"job__contact is__contact mt-30"}>
              <form action={"#"} className={"d-flex flex-column gap-4"}>
                <div className={"search__item"}>
                  <label htmlFor={"name"} className={"mb-4 font-20 fw-medium text-dark text-capitalize"}>
Name
                  </label>
                  <div className={"position-relative"}>
                    <input type={"text"} id={"name"} placeholder={"Your Name"} required={true} />
                    <i className={"fa-light fa-user"}>

                    </i>
                  </div>
                </div>
                <div className={"search__item"}>
                  <label htmlFor={"cemail"} className={"mb-4 font-20 fw-medium text-dark text-capitalize"}>
Your Email
                  </label>
                  <div className={"position-relative"}>
                    <input type={"email"} id={"cemail"} placeholder={"Enter your email"} required={true} />
                    <i className={"rt-mailbox"}>

                    </i>
                  </div>
                </div>
                <div className={"search__item"}>
                  <label className={"mb-4 font-20 fw-medium text-dark text-capitalize"} htmlFor={"message"}>
Your Comment
                  </label>
                  <textarea name={"message"} id={"message"} placeholder={"Message"}>

                  </textarea>
                  <i className={"fa-thin fa-comment-lines"}>

                  </i>
                </div>
                <button type={"submit"} className={"rts__btn fill__btn be-1 w-100 rounded-1 apply__btn"}>

                                Send Message
                            
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
