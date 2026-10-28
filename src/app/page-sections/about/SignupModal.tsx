export default function SignupModal() {
  return (
    <div className={"modal similar__modal fade "} id={"signupModal"}>
      <div className={"modal-dialog modal-dialog-centered"}>
        <div className={"modal-content"}>
          <div className={"max-content similar__form form__padding"}>
            <div className={"d-flex mb-3 align-items-center justify-content-between"}>
              <h6 className={"mb-0"}>
Create A Free Account
              </h6>
              <button type={"button"} data-bs-dismiss={"modal"} aria-label={"Close"}>
                <i className={"fa-regular fa-xmark text-primary"}>

                </i>
              </button>
            </div>
            <div className={"d-block has__line text-center"}>
              <p>
Choose your Account Type
              </p>
            </div>
            <div className={"tab__switch flex-wrap flex-sm-nowrap nav-tab mt-30 mb-30"}>
              <button className={"rts__btn nav-link  active"}>
                <i className={"fa-light fa-user"}>

                </i>
Candidate
              </button>
              <button className={"rts__btn nav-link"}>
                <i className={"rt-briefcase"}>

                </i>
 Employer
              </button>
            </div>
            <form action={"#"} className={"d-flex flex-column gap-3"}>
              <div className={"form-group"}>
                <label htmlFor={"sname"} className={"fw-medium text-dark mb-3"}>
Your Name
                </label>
                <div className={"position-relative"}>
                  <input type={"text"} name={"sname"} id={"sname"} placeholder={"Candidate"} required={true} />
                  <i className={"fa-light fa-user icon"}>

                  </i>
                </div>
              </div>
              <div className={"form-group"}>
                <label htmlFor={"signemail"} className={"fw-medium text-dark mb-3"}>
Your Email
                </label>
                <div className={"position-relative"}>
                  <input type={"email"} name={"signemail"} id={"signemail"} placeholder={"Enter your email"} required={true} />
                  <i className={"fa-sharp fa-light fa-envelope icon"}>

                  </i>
                </div>
              </div>
              <div className={"form-group"}>
                <label htmlFor={"spassword"} className={"fw-medium text-dark mb-3"}>
Password
                </label>
                <div className={"position-relative"}>
                  <input type={"password"} name={"spassword"} id={"spassword"} placeholder={"Enter your password"} required={true} />
                  <i className={"fa-light fa-lock icon"}>

                  </i>
                </div>
              </div>
              <div className={"form-group my-3"}>
                <button className={"rts__btn w-100 fill__btn"}>
Login
                </button>
              </div>
            </form>
            <div className={"d-block has__line text-center"}>
              <p>
Or
              </p>
            </div>
            <div className={"d-flex flex-wrap justify-content-center gap-4 mt-20 mb-20"}>
              <div className={"is__social google"}>
                <button>
                  <img src={"/assets/img/icon/google-small.svg"} alt={""} />
Continue with Google
                </button>
              </div>
              <div className={"is__social facebook"}>
                <button>
                  <img src={"/assets/img/icon/facebook-small.svg"} alt={""} />
Continue with Facebook
                </button>
              </div>
            </div>
            <span className={"d-block text-center fw-medium"}>
Have an account? 
              <a href={"#"} data-bs-target={"#loginModal"} data-bs-toggle={"modal"} className={"text-primary"}>
Login
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
