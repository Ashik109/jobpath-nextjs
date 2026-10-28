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
Search By Job Title
                  </label>
                  <div className={"position-relative"}>
                    <input type={"text"} id={"search"} placeholder={"Enter Type Of job"} required={true} />
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
                  <div className={"mb-3 font-20 fw-medium text-dark text-capitalize"}>
job type
                  </div>
                  <div className={"search__item__list"}>
                    <div className={"d-flex align-items-center justify-content-between list"}>
                      <div className={"d-flex gap-2 align-items-center checkbox"}>
                        <input type={"checkbox"} name={"fulltime"} id={"fulltime"} />
                        <label htmlFor={"fulltime"}>
Full Time
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
Part Time
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
temporary
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
freelance
                        </label>
                      </div>
                      <span>
(130)
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"search__item"}>
                  <div className={"mb-3 font-20 fw-medium text-dark text-capitalize"}>
experience Label
                  </div>
                  <div className={"search__item__list"}>
                    <div className={"d-flex align-items-center justify-content-between list"}>
                      <div className={"d-flex gap-2 align-items-center checkbox"}>
                        <input type={"checkbox"} name={"5year"} id={"5year"} />
                        <label htmlFor={"5year"}>
5 year
                        </label>
                      </div>
                      <span>
(10)
                      </span>
                    </div>
                    <div className={"d-flex align-items-center justify-content-between list"}>
                      <div className={"d-flex gap-2 align-items-center checkbox"}>
                        <input type={"checkbox"} name={"4year"} id={"4year"} />
                        <label htmlFor={"4year"}>
4 year
                        </label>
                      </div>
                      <span>
(15)
                      </span>
                    </div>
                    <div className={"d-flex align-items-center justify-content-between list"}>
                      <div className={"d-flex gap-2 align-items-center checkbox"}>
                        <input type={"checkbox"} name={"3year"} id={"3year"} />
                        <label htmlFor={"3year"}>
3 year
                        </label>
                      </div>
                      <span>
(50)
                      </span>
                    </div>
                    <div className={"d-flex align-items-center justify-content-between list"}>
                      <div className={"d-flex gap-2 align-items-center checkbox"}>
                        <input type={"checkbox"} name={"fresher"} id={"fresher"} />
                        <label htmlFor={"fresher"}>
fresher
                        </label>
                      </div>
                      <span>
(130)
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"search__item"}>
                  <div className={"mb-3 font-20 fw-medium text-dark text-capitalize"}>
salary offered
                  </div>
                  <div className={"search__item__list"}>
                    <div className={"d-flex align-items-center justify-content-between list"}>
                      <div className={"d-flex gap-2 align-items-center checkbox"}>
                        <input type={"checkbox"} name={"500"} id={"500"} />
                        <label htmlFor={"500"}>
under $500
                        </label>
                      </div>
                      <span>
(10)
                      </span>
                    </div>
                    <div className={"d-flex align-items-center justify-content-between list"}>
                      <div className={"d-flex gap-2 align-items-center checkbox"}>
                        <input type={"checkbox"} name={"5000"} id={"5000"} />
                        <label htmlFor={"5000"}>
$5,000 - $10,000
                        </label>
                      </div>
                      <span>
(44)
                      </span>
                    </div>
                    <div className={"d-flex align-items-center justify-content-between list"}>
                      <div className={"d-flex gap-2 align-items-center checkbox"}>
                        <input type={"checkbox"} name={"1000"} id={"1000"} />
                        <label htmlFor={"1000"}>
$10,000 - $15,000
                        </label>
                      </div>
                      <span>
(27)
                      </span>
                    </div>
                    <div className={"d-flex align-items-center justify-content-between list"}>
                      <div className={"d-flex gap-2 align-items-center checkbox"}>
                        <input type={"checkbox"} name={"1500"} id={"1500"} />
                        <label htmlFor={"1500"}>
$15,000 - $20,000
                        </label>
                      </div>
                      <span>
(85)
                      </span>
                    </div>
                  </div>
                </div>
                <button type={"submit"} className={"rts__btn no__fill__btn max-content mx-auto job__search__btn font-sm"} aria-label={"Search"}>
Find Job
                </button>
              </form>
            </div>
            <div className={"job__aleart job__search__section"}>
              <form action={"#"} className={"d-flex flex-column row-35"}>
                <div className={"search__item"}>
                  <label htmlFor={"alert"} className={"mb-3 font-20 fw-medium text-dark text-capitalize"}>
Job Alert
                  </label>
                  <div className={"position-relative"}>
                    <input type={"text"} id={"alert"} placeholder={"Enter Type Of job"} required={true} />
                    <i className={"fa-light fa-magnifying-glass"}>

                    </i>
                  </div>
                </div>
                <div className={"search__item no-icon"}>
                  <label htmlFor={"frequency"} className={"mb-3 font-20 fw-medium text-dark text-capitalize"}>
EmailFrequency
                  </label>
                  <div className={"position-relative"}>
                    <select className={"form-select"} tabIndex={0} name={"filter"} aria-label={"Daily"} defaultValue={""}>
                      <option value={""}>
Daily
                      </option>
                      <option value={"Weakly"}>
Weakly
                      </option>
                      <option value={"Monthly"}>
Monthly
                      </option>
                    </select>
                  </div>
                </div>
                <button type={"submit"} className={"rts__btn fill__btn py-3 rounded-2 job__search"} aria-label={"Search"}>
Save Job Alert
                </button>
              </form>
            </div>
          </div>
          <div className={"col-lg-7 col-xl-8"}>
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
                      <option value={"Part Time"}>
Part Time
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
                  <button className={"rts__btn no__fill__btn grid-style nav-link active"} data-bs-toggle={"tab"} data-bs-target={"#grid"}>
                    <i className={"rt-hamburger"}>

                    </i>
 Grid
                  </button>
                  <button className={"rts__btn no__fill__btn list-style nav-link"} data-bs-toggle={"tab"} data-bs-target={"#list"}>
                    <i className={"rt-list"}>

                    </i>
 List
                  </button>
                </div>
              </div>
            </div>
            <CatalogResults kind="job" tabs={true} />
            
          </div>
        </div>
      </div>
    </div>
  );
}
