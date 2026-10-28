import CatalogResults from "@/app/components/CatalogResults";

export default function Section() {
  return (
    <div className={"rts__section section__padding"}>
      <div className={"container"}>
        <div className={"row g-30"}>
          <div className={"col-lg-5 col-xl-4"}>
            <div className={"job__search__section mb-40"}>
              <form action={"#"} className={"d-flex flex-column row-30"}>
                <div className={"search__item"}>
                  <label htmlFor={"search"} className={"mb-3 font-20 fw-medium text-dark text-capitalize"}>
Search by Keywords
                  </label>
                  <div className={"position-relative"}>
                    <input type={"text"} id={"search"} placeholder={"Find Top Employer"} required={true} />
                    <i className={"fa-light fa-magnifying-glass"}>

                    </i>
                  </div>
                </div>
                <div className={"search__item"}>
                  <h6 className={"mb-3 font-20 fw-medium text-dark text-capitalize"}>
Search Location
                  </h6>
                  <div className={"position-relative"}>
                    <select className={"form-select"} tabIndex={0} name={"filter"} aria-label={"Search Location"} defaultValue={""}>
                      <option value={""}>
Search Location
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
                      <option value={"Rajshahi"}>
Rajshahi
                      </option>
                    </select>
                    <i className={"fa-light fa-location-dot"}>

                    </i>
                  </div>
                </div>
                <div className={"search__item"}>
                  <h6 className={"mb-3 font-20 fw-medium text-dark text-capitalize"}>
Search By Job category
                  </h6>
                  <div className={"position-relative"}>
                    <select className={"form-select"} tabIndex={0} name={"filter"} aria-label={"Choose a Category"} defaultValue={""}>
                      <option value={""}>
Choose a Category
                      </option>
                      <option value={"Government"}>
Government
                      </option>
                      <option value={"NGO"}>
NGO
                      </option>
                      <option value={"Private"}>
Private
                      </option>
                    </select>
                    <i className={"rt-briefcase"}>

                    </i>
                  </div>
                </div>
                <div className={"search__item"}>
                  <h6 className={"mb-3 font-20 fw-medium text-dark text-capitalize"}>
Date posted
                  </h6>
                  <div className={"position-relative"}>
                    <select className={"form-select"} tabIndex={0} name={"filter"} aria-label={"Date Posted"} defaultValue={""}>
                      <option value={""}>
Date Posted
                      </option>
                      <option value={"01 Jan 24"}>
01 Jan 24
                      </option>
                      <option value={"05 Feb 24"}>
05 Feb 24
                      </option>
                      <option value={"07 Mar 24"}>
07 Mar 24
                      </option>
                    </select>
                    <i className={"fa-light fa-clock"}>

                    </i>
                  </div>
                </div>
                <div className={"search__item"}>
                  <label htmlFor={"found"} className={"mb-3 font-20 fw-medium text-dark text-capitalize"}>
Founded Date
                  </label>
                  <div className={"position-relative"}>
                    <select className={"form-select"} tabIndex={0} name={"filter"} aria-label={"Founded Date"} defaultValue={""}>
                      <option value={""}>
Founded Date
                      </option>
                      <option value={"2020"}>
2020
                      </option>
                      <option value={"2021"}>
2021
                      </option>
                      <option value={"2022"}>
2022
                      </option>
                      <option value={"2023"}>
2023
                      </option>
                      <option value={"2024"}>
2024
                      </option>
                    </select>
                    <i className={"rt-briefcase"}>

                    </i>
                  </div>
                </div>
                <div className={"search__item"}>
                  <h6 className={"mb-3 font-20 fw-medium text-dark text-capitalize"}>
Team Size
                  </h6>
                  <div className={"search__item__list"}>
                    <div className={"d-flex align-items-center justify-content-between list"}>
                      <div className={"d-flex gap-2 align-items-center checkbox"}>
                        <input type={"checkbox"} name={"fulltime"} id={"fulltime"} />
                        <label htmlFor={"fulltime"}>
1-20
                        </label>
                      </div>
                      <span>
(130)
                      </span>
                    </div>
                    <div className={"d-flex align-items-center justify-content-between list"}>
                      <div className={"d-flex gap-2 align-items-center checkbox"}>
                        <input type={"checkbox"} name={"part"} id={"part"} />
                        <label htmlFor={"part"}>
1-30
                        </label>
                      </div>
                      <span>
(80)
                      </span>
                    </div>
                    <div className={"d-flex align-items-center justify-content-between list"}>
                      <div className={"d-flex gap-2 align-items-center checkbox"}>
                        <input type={"checkbox"} name={"temporary"} id={"temporary"} />
                        <label htmlFor={"temporary"}>
1-40
                        </label>
                      </div>
                      <span>
(150)
                      </span>
                    </div>
                    <div className={"d-flex align-items-center justify-content-between list"}>
                      <div className={"d-flex gap-2 align-items-center checkbox"}>
                        <input type={"checkbox"} name={"freelance"} id={"freelance"} />
                        <label htmlFor={"freelance"}>
1-100
                        </label>
                      </div>
                      <span>
(130)
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"search__item"}>
                  <h6 className={"mb-3 font-20 fw-medium text-dark text-capitalize"}>
Sector
                  </h6>
                  <div className={"search__item__list"}>
                    <div className={"d-flex align-items-center justify-content-between list"}>
                      <div className={"d-flex gap-2 align-items-center checkbox"}>
                        <input type={"checkbox"} name={"uiux"} id={"uiux"} />
                        <label htmlFor={"uiux"}>
ui/ux design
                        </label>
                      </div>
                      <span>
(10)
                      </span>
                    </div>
                    <div className={"d-flex align-items-center justify-content-between list"}>
                      <div className={"d-flex gap-2 align-items-center checkbox"}>
                        <input type={"checkbox"} name={"web"} id={"web"} />
                        <label htmlFor={"web"}>
Web Development
                        </label>
                      </div>
                      <span>
(15)
                      </span>
                    </div>
                    <div className={"d-flex align-items-center justify-content-between list"}>
                      <div className={"d-flex gap-2 align-items-center checkbox"}>
                        <input type={"checkbox"} name={"software"} id={"software"} />
                        <label htmlFor={"software"}>
Software Engineer
                        </label>
                      </div>
                      <span>
(50)
                      </span>
                    </div>
                    <div className={"d-flex align-items-center justify-content-between list"}>
                      <div className={"d-flex gap-2 align-items-center checkbox"}>
                        <input type={"checkbox"} name={"marketing"} id={"marketing"} />
                        <label htmlFor={"marketing"}>
Digital Marketing
                        </label>
                      </div>
                      <span>
(130)
                      </span>
                    </div>
                  </div>
                </div>
                <button type={"submit"} className={"rts__btn no__fill__btn max-content mx-auto job__search__btn font-sm"} aria-label={"Search"}>
Find Job
                </button>
              </form>
            </div>
          </div>
          <div className={"col-lg-8 col-xl-8"}>
            <div className={"top__query mb-40 d-flex flex-wrap gap-4 gap-xl-0 justify-content-between align-items-center"}>
              <span className={"text-dark font-20 fw-medium"}>
Browse opportunities
              </span>
              <div className={"d-flex flex-wrap align-items-center gap-4"}>
                <form action={"#"} className={"category-select"}>
                  <div className={"position-relative"}>
                    <select className={"form-select"} tabIndex={0} name={"filter"} aria-label={"All Category"} defaultValue={""}>
                      <option value={""}>
All Category
                      </option>
                      <option value={"Dhaka"}>
Dhaka
                      </option>
                      <option value={"Part time"}>
Part time
                      </option>
                      <option value={"Full Time"}>
Full Time
                      </option>
                      <option value={"Government"}>
Government
                      </option>
                      <option value={"NGO"}>
NGO
                      </option>
                      <option value={"Private"}>
Private
                      </option>
                    </select>
                  </div>
                </form>
                <div className={"d-flex align-items-center gap-3"} id={"nav-tab"} role={"tablist"}>
                  <button className={"rts__btn no__fill__btn list-style nav-link active"} data-bs-toggle={"tab"} data-bs-target={"#list"}>
                    <i className={"rt-list"}>

                    </i>
 List
                  </button>
                  <button className={"rts__btn no__fill__btn grid-style nav-link"} data-bs-toggle={"tab"} data-bs-target={"#grid"}>
                    <i className={"rt-hamburger"}>

                    </i>
 Grid
                  </button>
                </div>
              </div>
            </div>
            <CatalogResults kind="employer" tabs={true} />
            
          </div>
        </div>
      </div>
    </div>
  );
}
