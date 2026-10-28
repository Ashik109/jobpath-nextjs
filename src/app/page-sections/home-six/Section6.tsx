import Link from "next/link";

export default function Section6() {
  return (
    <section className={"rts__section"}>
      <div className={"container"}>
        <div className={"row justify-content-center mb-50"}>
          <div className={"col-lg-6"}>
            <div className={"rts__section__content text-center"} data-aos="fade-up">
              <h3 className={"rts__section__title mb-3"}>
Top Employers
              </h3>
              <p className={"rts__section__desc"}>
Looking for your next career opportunity. Look no further
              </p>
            </div>
          </div>
        </div>
        <div className={"row g-30"}>
          <div className={"col-lg-6"}>
            <div className={"rts__single__employer style__six d-flex justify-content-start justify-content-md-between flex-wrap gap-3"}>
              <div className={"d-flex gap-4 align-items-center"}>
                <div className={"icon"}>
                  <img src={"/assets/img/icon/linkedin.svg"} alt={""} />
                </div>
                <div className={"content"}>
                  <Link href={"/employer/upwork-com"} className={"font-20 fw-semibold text-dark"} prefetch={false}>
LinkedIn
                  </Link>
                  <span className={"d-block"}>
Ui Designer
                  </span>
                </div>
              </div>
              <div className={"d-flex gap-4 align-items-center flex-wrap"}>
                <div className={"d-flex gap-2 align-items-center"}>
                  <i className={"fa-light fa-location-dot text-dark"}>

                  </i>
 Newyork, USA
                                
                </div>
                <Link href={"/employer/upwork-com"} className={"apply__btn is__home"} prefetch={false}>
Open Job (4)
                </Link>
              </div>
            </div>
          </div>
          <div className={"col-lg-6"}>
            <div className={"rts__single__employer style__six d-flex justify-content-start justify-content-md-between flex-wrap gap-3"}>
              <div className={"d-flex gap-4 align-items-center"}>
                <div className={"icon"}>
                  <img src={"/assets/img/icon/upwork.svg"} alt={""} />
                </div>
                <div className={"content"}>
                  <Link href={"/employer/upwork-com"} className={"font-20 fw-semibold text-dark"} prefetch={false}>
Upwork Inc
                  </Link>
                  <span className={"d-block"}>
Ui Designer
                  </span>
                </div>
              </div>
              <div className={"d-flex gap-4 align-items-center flex-wrap"}>
                <div className={"d-flex gap-2 align-items-center"}>
                  <i className={"fa-light fa-location-dot text-dark"}>

                  </i>
 Newyork, USA
                                
                </div>
                <Link href={"/employer/upwork-com"} className={"apply__btn is__home"} prefetch={false}>
Open Job (4)
                </Link>
              </div>
            </div>
          </div>
          <div className={"col-lg-6"}>
            <div className={"rts__single__employer style__six d-flex justify-content-start justify-content-md-between flex-wrap gap-3"}>
              <div className={"d-flex gap-4 align-items-center"}>
                <div className={"icon"}>
                  <img src={"/assets/img/icon/microsoft.svg"} alt={""} />
                </div>
                <div className={"content"}>
                  <Link href={"/employer/upwork-com"} className={"font-20 fw-semibold text-dark"} prefetch={false}>
Microsoft.com
                  </Link>
                  <span className={"d-block"}>
Web Developer
                  </span>
                </div>
              </div>
              <div className={"d-flex gap-4 align-items-center flex-wrap"}>
                <div className={"d-flex gap-2 align-items-center"}>
                  <i className={"fa-light fa-location-dot text-dark"}>

                  </i>
 Newyork, USA
                                
                </div>
                <Link href={"/employer/upwork-com"} className={"apply__btn is__home"} prefetch={false}>
Open Job (4)
                </Link>
              </div>
            </div>
          </div>
          <div className={"col-lg-6"}>
            <div className={"rts__single__employer style__six d-flex justify-content-start justify-content-md-between flex-wrap gap-3"}>
              <div className={"d-flex gap-4 align-items-center"}>
                <div className={"icon"}>
                  <img src={"/assets/img/icon/google.svg"} alt={""} />
                </div>
                <div className={"content"}>
                  <Link href={"/employer/upwork-com"} className={"font-20 fw-semibold text-dark"} prefetch={false}>
Google LLC
                  </Link>
                  <span className={"d-block"}>
Ui Designer
                  </span>
                </div>
              </div>
              <div className={"d-flex gap-4 align-items-center flex-wrap"}>
                <div className={"d-flex gap-2 align-items-center"}>
                  <i className={"fa-light fa-location-dot text-dark"}>

                  </i>
 Newyork, USA
                                
                </div>
                <Link href={"/employer/upwork-com"} className={"apply__btn is__home"} prefetch={false}>
Open Job (4)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
