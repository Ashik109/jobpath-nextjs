import Link from "next/link";

export default function Header() {
  return (
    <header className={"rts__section rts__dashboard__header position-fixed w-100"}>
      <div className={"container-fluid g-0"}>
        <div className={"rts__menu__background mw-100 px-20 mobile__padding rounded-0"}>
          <div className={"row"}>
            <div className={"d-flex align-items-center justify-content-between"}>
              <div className={"rts__logo"}>
                <Link href={"/"} prefetch={false}>
                  <img className={"logo__image"} src={"/assets/img/logo/header__one.svg"} width={"160"} height={"40"} alt={"logo"} />
                </Link>
              </div>
              <div className={"navigation d-none d-lg-block"}>
                <nav className={"navigation__menu"} id={"offcanvas__menu"}>
                  <ul className={"list-unstyled"}>
                    <li className={"navigation__menu--item has-child has-arrow"}>
                      <a href={"#"} className={"navigation__menu--item__link"}>
Home
                      </a>
                      <ul className={"submenu sub__style"} role={"menu"}>
                        <li role={"menuitem"}>
                          <Link href={"/"} prefetch={false}>
Home One
                          </Link>
                        </li>
                        <li role={"menuitem"}>
                          <Link href={"/home-two"} prefetch={false}>
Home Two
                          </Link>
                        </li>
                        <li role={"menuitem"}>
                          <Link href={"/home-three"} prefetch={false}>
Home Three
                          </Link>
                        </li>
                        <li role={"menuitem"}>
                          <Link href={"/home-four"} prefetch={false}>
Home Four
                          </Link>
                        </li>
                        <li role={"menuitem"}>
                          <Link href={"/home-five"} prefetch={false}>
Home Five
                          </Link>
                        </li>
                        <li role={"menuitem"}>
                          <Link href={"/home-six"} prefetch={false}>
Home Six
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={"navigation__menu--item has-child has-arrow"}>
                      <Link href={"/job-list-1"} className={"navigation__menu--item__link"} prefetch={false}>
Browse Jobs
                      </Link>
                      <ul className={"submenu sub__style"} role={"menu"}>
                        <li role={"menuitem"} className={"has-child has-arrow"}>
                          <a href={"#"}>
Job List
                          </a>
                          <ul className={"sub__style"} role={"menu"}>
                            <li role={"menuitem"}>
                              <Link href={"/job-list-1"} prefetch={false}>
Job List One
                              </Link>
                            </li>
                            <li role={"menuitem"}>
                              <Link href={"/job-list-2"} prefetch={false}>
Job List Two
                              </Link>
                            </li>
                            <li role={"menuitem"}>
                              <Link href={"/job-list-3"} prefetch={false}>
Job List Three
                              </Link>
                            </li>
                            <li role={"menuitem"}>
                              <Link href={"/job-list-4"} prefetch={false}>
Job List Four
                              </Link>
                            </li>
                            <li role={"menuitem"}>
                              <Link href={"/job-list-5"} prefetch={false}>
Job List Five
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li role={"menuitem"} className={"has-child has-arrow"}>
                          <a href={"#"}>
Job Details
                          </a>
                          <ul className={"sub__style"} role={"menu"}>
                            <li role={"menuitem"}>
                              <Link href={"/job/senior-ui-designer-apple"} prefetch={false}>
Job Details One
                              </Link>
                            </li>
                            <li role={"menuitem"}>
                              <Link href={"/job-details-2/senior-ui-designer-apple"} prefetch={false}>
Job Details Two
                              </Link>
                            </li>
                            <li role={"menuitem"}>
                              <Link href={"/job-details-3/senior-ui-designer-apple"} prefetch={false}>
Job Details Three
                              </Link>
                            </li>
                            <li role={"menuitem"}>
                              <Link href={"/job-details-4/senior-ui-designer-apple"} prefetch={false}>
Job Details Four
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className={"navigation__menu--item has-child has-arrow"}>
                      <a href={"#"} className={"navigation__menu--item__link"}>
Employers
                      </a>
                      <ul className={"submenu sub__style"} role={"menu"}>
                        <li role={"menuitem"} className={"has-child has-arrow"}>
                          <Link href={"/employer-1"} prefetch={false}>
Employer Style
                          </Link>
                          <ul className={"sub__style"} role={"menu"}>
                            <li role={"menuitem"}>
                              <Link href={"/employer-1"} prefetch={false}>
Employer One
                              </Link>
                            </li>
                            <li role={"menuitem"}>
                              <Link href={"/employer-2"} prefetch={false}>
Employer Two
                              </Link>
                            </li>
                            <li role={"menuitem"}>
                              <Link href={"/employer-3"} prefetch={false}>
Employer Three
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li role={"menuitem"} className={"has-child has-arrow"}>
                          <Link href={"/employer/upwork-com"} prefetch={false}>
Employer Details
                          </Link>
                          <ul className={"sub__style"} role={"menu"}>
                            <li role={"menuitem"}>
                              <Link href={"/employer/upwork-com"} prefetch={false}>
Employer Details 1
                              </Link>
                            </li>
                            <li role={"menuitem"}>
                              <Link href={"/employer-details-2/upwork-com"} prefetch={false}>
Employer Details 2
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li role={"menuitem"}>
                          <Link href={"/employer-dashboard"} prefetch={false}>
Employer Dashboard
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={"navigation__menu--item has-child has-arrow"}>
                      <a href={"#"} className={"navigation__menu--item__link"}>
Candidates
                      </a>
                      <ul className={"submenu sub__style"} role={"menu"}>
                        <li role={"menuitem"} className={"has-child has-arrow"}>
                          <Link href={"/candidate-1"} prefetch={false}>
Candidate Style
                          </Link>
                          <ul className={"sub__style"} role={"menu"}>
                            <li role={"menuitem"}>
                              <Link href={"/candidate-1"} prefetch={false}>
Candidate One
                              </Link>
                            </li>
                            <li role={"menuitem"}>
                              <Link href={"/candidate-2"} prefetch={false}>
Candidate Two
                              </Link>
                            </li>
                            <li role={"menuitem"}>
                              <Link href={"/candidate-3"} prefetch={false}>
Candidate Three
                              </Link>
                            </li>
                            <li role={"menuitem"}>
                              <Link href={"/candidate-4"} prefetch={false}>
Candidate Four
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li role={"menuitem"} className={"has-child has-arrow"}>
                          <Link href={"/candidate/michael-roy"} prefetch={false}>
Candidate Details
                          </Link>
                          <ul className={"sub__style"} role={"menu"}>
                            <li role={"menuitem"}>
                              <Link href={"/candidate/michael-roy"} prefetch={false}>
Candidate Details 1
                              </Link>
                            </li>
                            <li role={"menuitem"}>
                              <Link href={"/candidate-details-2/michael-roy"} prefetch={false}>
Candidate Details 2
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li role={"menuitem"}>
                          <Link href={"/candidate-dashboard"} prefetch={false}>
Candidate Dashboard
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={"navigation__menu--item has-child has-arrow"}>
                      <a href={"#"} className={"navigation__menu--item__link"}>
Pages
                      </a>
                      <ul className={"submenu sub__style"} role={"menu"}>
                        <li role={"menuitem"} className={"has-child has-arrow"}>
                          <Link href={"/about"} prefetch={false}>
Blog
                          </Link>
                          <ul className={"sub__style"} role={"menu"}>
                            <li role={"menuitem"}>
                              <Link href={"/blog-1"} prefetch={false}>
Blog One
                              </Link>
                            </li>
                            <li role={"menuitem"}>
                              <Link href={"/blog-2"} prefetch={false}>
Blog Two
                              </Link>
                            </li>
                            <li role={"menuitem"}>
                              <Link href={"/blog-3"} prefetch={false}>
Blog Three
                              </Link>
                            </li>
                            <li role={"menuitem"}>
                              <Link href={"/blog-4"} prefetch={false}>
Blog Four
                              </Link>
                            </li>
                            <li role={"menuitem"}>
                              <Link href={"/blog/start-an-online-job-and-work-from-home"} prefetch={false}>
Blog Details
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li role={"menuitem"}>
                          <Link href={"/about"} prefetch={false}>
About
                          </Link>
                        </li>
                        <li role={"menuitem"}>
                          <Link href={"/faq"} prefetch={false}>
Faq
                          </Link>
                        </li>
                        <li role={"menuitem"}>
                          <Link href={"/tos"} prefetch={false}>
Terms &amp; Conditions
                          </Link>
                        </li>
                        <li role={"menuitem"}>
                          <Link href={"/privacy"} prefetch={false}>
Privacy Policy
                          </Link>
                        </li>
                        <li role={"menuitem"}>
                          <Link href={"/pricing"} prefetch={false}>
Pricing
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={"navigation__menu--item has-child has-arrow"}>
                      <Link href={"/contact-1"} className={"navigation__menu--item__link"} prefetch={false}>
Contact
                      </Link>
                      <ul className={"submenu sub__style"} role={"menu"}>
                        <li role={"menuitem"}>
                          <Link href={"/contact-1"} prefetch={false}>
Contact One
                          </Link>
                        </li>
                        <li role={"menuitem"}>
                          <Link href={"/contact-2"} prefetch={false}>
Contact Two
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className={"rts__menu d-flex gap-5 gap-lg-4 gap-xl-5 align-items-center"}>
                <div className={"header__right__btn d-flex align-items-center gap-30"}>
                  <div className={"notification__btn"}>
                    <div className={"notification__icon dropdown"} data-bs-toggle={"dropdown"}>
                      <svg width={"23"} height={"27"} viewBox={"0 0 23 27"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>
                        <path d={"M22.4936 16.8814L20.125 14.5128V11.375C20.1223 9.20661 19.3156 7.11624 17.8611 5.50811C16.4065 3.89998 14.4072 2.88832 12.25 2.66875V0.875H10.5V2.66875C8.34275 2.88832 6.34354 3.89998 4.88895 5.50811C3.43436 7.11624 2.62771 9.20661 2.625 11.375V14.5128L0.256375 16.8814C0.0922693 17.0454 4.95577e-05 17.268 0 17.5V20.125C0 20.3571 0.0921872 20.5796 0.256282 20.7437C0.420376 20.9078 0.642936 21 0.875 21H7V21.6799C6.98058 22.79 7.3717 23.8683 8.09836 24.7078C8.82501 25.5473 9.83603 26.089 10.9375 26.229C11.5458 26.2893 12.16 26.2217 12.7405 26.0304C13.3211 25.8391 13.8552 25.5284 14.3085 25.1183C14.7617 24.7082 15.1242 24.2078 15.3724 23.6492C15.6207 23.0906 15.7493 22.4863 15.75 21.875V21H21.875C22.1071 21 22.3296 20.9078 22.4937 20.7437C22.6578 20.5796 22.75 20.3571 22.75 20.125V17.5C22.75 17.268 22.6577 17.0454 22.4936 16.8814ZM14 21.875C14 22.5712 13.7234 23.2389 13.2312 23.7312C12.7389 24.2234 12.0712 24.5 11.375 24.5C10.6788 24.5 10.0111 24.2234 9.51884 23.7312C9.02656 23.2389 8.75 22.5712 8.75 21.875V21H14V21.875ZM21 19.25H1.75V17.8623L4.11862 15.4936C4.28273 15.3296 4.37495 15.107 4.375 14.875V11.375C4.375 9.51849 5.1125 7.73801 6.42525 6.42525C7.73801 5.1125 9.51848 4.375 11.375 4.375C13.2315 4.375 15.012 5.1125 16.3247 6.42525C17.6375 7.73801 18.375 9.51849 18.375 11.375V14.875C18.375 15.107 18.4673 15.3296 18.6314 15.4936L21 17.8623V19.25Z"} fill={"#0B0D28"}>

                        </path>
                      </svg>
                      <span className={"notification__count"}>
2
                      </span>
                    </div>
                    <div className={"rts__dropdown notification__dropdown dropdown-menu top-25"}>
                      <div className={"rts__dropdown__content"}>
                        <div className={"notification__header"}>
                          <h6>
Notification
                          </h6>
                          <a href={"#"}>
                            <i className={"fa-light fa-gear"}>

                            </i>
                          </a>
                        </div>
                        <span className={"notification__date"}>
Today
                        </span>
                        <div className={"notification__body"}>
                          <div className={"single__notification"}>
                            <div className={"notification__image"}>
                              <img src={"/assets/img/author/1.svg"} alt={""} />
                            </div>
                            <div className={"notification__content"}>
                              <p>

                                                        Jonathon Doe Applied a job.
                                                    
                              </p>
                            </div>
                            <div className={"time"}>
                              <span>
30 Minutes ago
                              </span>
                            </div>
                          </div>
                          <div className={"single__notification"}>
                            <div className={"notification__image"}>
                              <img src={"/assets/img/author/2.svg"} alt={""} />
                            </div>
                            <div className={"notification__content"}>
                              <p>

                                                        Michale Rachel Want to meeting you.
                                                    
                              </p>
                            </div>
                            <div className={"time"}>
                              <span>
3 hours ago
                              </span>
                            </div>
                          </div>
                          <div className={"single__notification"}>
                            <div className={"notification__image"}>
                              <img src={"/assets/img/author/3.svg"} alt={""} />
                            </div>
                            <div className={"notification__content"}>
                              <p>

                                                        Your project proposal has been approved.
                                                    
                              </p>
                            </div>
                            <div className={"time"}>
                              <span>
3 hours ago
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"user__info "}>
                    <div className={"d-flex gap-3 align-items-center pointer"} data-bs-toggle={"dropdown"}>
                      <div className={"user__image if__employer"}>
                        <img className={"rounded-5"} width={"48"} height={"48"} src={"/assets/img/icon/google.svg"} alt={""} />
                      </div>
                      <div className={"user__name d-none d-xl-block"}>
                        <h6 className={"font-20 mb-1 text-capitalize fw-medium lh-sm"}>
google.com
                        </h6>
                        <span>
Employer
                        </span>
                      </div>
                      <div className={"dropdown__option d-none d-xl-block"}>
                        <div className={"dropdown__icon "}>
                          <i className={"fa-light fa-chevron-down"}>

                          </i>
                        </div>
                      </div>
                    </div>
                    <ul className={"rts__dropdown dropdown-menu top-25"}>
                      <li>
                        <Link className={"dropdown-item"} href={"/employer-dashboard"} prefetch={false}>
Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link className={"dropdown-item"} href={"/employer-dash-profile"} prefetch={false}>
Profile
                        </Link>
                      </li>
                      <li>
                        <Link className={"dropdown-item"} href={"/employer-dash-alert"} prefetch={false}>
Job Alert
                        </Link>
                      </li>
                      <li>
                        <Link className={"dropdown-item"} href={"/employer-dash-shortlist"} prefetch={false}>
Shortlist Job
                        </Link>
                      </li>
                      <li>
                        <Link className={"dropdown-item"} href={"/employer-dash-package"} prefetch={false}>
Packages
                        </Link>
                      </li>
                      <li>
                        <Link className={"dropdown-item"} href={"/employer-dash-message"} prefetch={false}>
Message
                        </Link>
                      </li>
                      <li>
                        <Link className={"dropdown-item"} href={"/employer-dash-passwordchange"} prefetch={false}>
Change Password
                        </Link>
                      </li>
                      <li>
                        <a className={"dropdown-item"} href={"#"}>
Log Out
                        </a>
                      </li>
                      <li>
                        <Link className={"dropdown-item"} href={"/employer-dash-deleteprofile"} prefetch={false}>
Delete Account
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Link href={"/employer-dash-jobpost"} className={"small__btn d-none d-sm-flex d-xl-flex fill__btn border-6 font-xs"} aria-label={"Job Posting Button"} prefetch={false}>
Add A Job
                  </Link>
                  <button className={"d-md-block d-lg-none"} type={"button"} data-bs-toggle={"offcanvas"} data-bs-target={"#offcanvas"} aria-controls={"offcanvas"}>
                    <i className={"fa-sharp fa-regular fa-bars"}>

                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
