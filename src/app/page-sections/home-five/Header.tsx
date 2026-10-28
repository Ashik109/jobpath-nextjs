import Link from "next/link";

export default function Header() {
  return (
    <header className={"rts__section rts__header relative__header"}>
      <div className={"container-fluid"}>
        <div className={"rts__menu__background"}>
          <div className={"row"}>
            <div className={"d-flex align-items-center justify-content-between"}>
              <div className={"rts__logo"}>
                <Link href={"/"} prefetch={false}>
                  <img className={"logo__image"} src={"/assets/img/logo/logo__five.svg"} width={"160"} height={"40"} alt={"logo"} />
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
              <div className={"rts__menu d-flex gap-5 align-items-center"}>
                <div className={"header__right__btn d-flex gap-3"}>
                  <a href={"#"} className={"small__btn d-none d-sm-flex  no__fill__btn rounded-0 font-xs"} aria-label={"Login Button"} data-bs-toggle={"modal"} data-bs-target={"#loginModal"}>
 
                                        
                                        Sign In
                  </a>
                  <Link href={"/employer-dash-jobpost"} className={"small__btn d-none d-sm-flex fill__btn rounded-0 font-xs"} aria-label={"Job Posting Button"} prefetch={false}>
Add Job
                  </Link>
                  <button className={"d-md-block d-lg-none rounded-0"} type={"button"} data-bs-toggle={"offcanvas"} data-bs-target={"#offcanvas"} aria-controls={"offcanvas"}>
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
