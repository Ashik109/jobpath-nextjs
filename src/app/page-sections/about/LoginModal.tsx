export default function LoginModal() {
  return (
    <div className={"modal similar__modal fade "} id={"loginModal"}>
      <div className={"modal-dialog modal-dialog-centered"}>
        <div className={"modal-content"}>
          <div className={"max-content similar__form form__padding"}>
            <div className={"d-flex mb-3 align-items-center justify-content-between"}>
              <h6 className={"mb-0"}>
Login To Jobpath
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
            <div className={"tab-content"} id={""}>

            </div>
            <form action={"/candidate-dashboard"} method={"post"} className={"d-flex flex-column gap-3"}>
              <div className={"form-group"}>
                <label htmlFor={"email"} className={"fw-medium text-dark mb-3"}>
Your Email
                </label>
                <div className={"position-relative"}>
                  <input type={"email"} name={"email"} id={"email"} placeholder={"Enter your email"} required={true} defaultValue={"user@test.com"} />
                  <i className={"fa-light fa-user icon"}>

                  </i>
                </div>
              </div>
              <div className={"form-group"}>
                <label htmlFor={"password"} className={"fw-medium text-dark mb-3"}>
Password
                </label>
                <div className={"position-relative"}>
                  <input type={"password"} name={"password"} id={"password"} placeholder={"Enter your password"} required={true} defaultValue={"1234"} />
                  <i className={"fa-light fa-lock icon"}>

                  </i>
                </div>
              </div>
              <div className={"d-flex flex-wrap justify-content-between align-items-center fw-medium"}>
                <div className={"form-check"}>
                  <input className={"form-check-input"} type={"checkbox"} id={"flexCheckDefault"} defaultValue={""} />
                  <label className={"form-check-label"} htmlFor={"flexCheckDefault"}>

                            Remember me
                        
                  </label>
                </div>
                <a href={"#"} className={"forgot__password text-para"} data-bs-toggle={"modal"} data-bs-target={"#forgotModal"}>
Forgot Password?
                </a>
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
            <div className={"d-flex gap-4 flex-wrap justify-content-center mt-20 mb-20"}>
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
Don`t have an account? 
              <a href={"#"} data-bs-target={"#signupModal"} data-bs-toggle={"modal"} className={"text-primary"}>
Sign Up
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
