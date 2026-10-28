export default function ForgotModal() {
  return (
    <div className={"modal similar__modal fade "} id={"forgotModal"}>
      <div className={"modal-dialog modal-dialog-centered"}>
        <div className={"modal-content"}>
          <div className={"max-content similar__form form__padding"}>
            <div className={"d-flex mb-3 align-items-center justify-content-between"}>
              <h6 className={"mb-0"}>
Forgot Password
              </h6>
              <button type={"button"} data-bs-dismiss={"modal"} aria-label={"Close"}>
                <i className={"fa-regular fa-xmark text-primary"}>

                </i>
              </button>
            </div>
            <form action={"#"} className={"d-flex flex-column gap-3"}>
              <div className={"form-group"}>
                <label htmlFor={"fmail"} className={"fw-medium text-dark mb-3"}>
Your Email
                </label>
                <div className={"position-relative"}>
                  <input type={"email"} name={"email"} id={"fmail"} placeholder={"Enter your email"} required={true} />
                  <i className={"fa-sharp fa-light fa-envelope icon"}>

                  </i>
                </div>
              </div>
              <div className={"form-group my-3"}>
                <button className={"rts__btn w-100 fill__btn"}>
Reset Password
                </button>
              </div>
            </form>
            <span className={"d-block text-center fw-medium"}>
Remember Your Password? 
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
