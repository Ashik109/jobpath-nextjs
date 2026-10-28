export default function Section() {
  return (
    <div className={"rts__section"}>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"advance__search__bg"}>
            <form action={"#"} className={"advance__search__form"}>
              <div className={"search__item"}>
                <div className={"position-relative"}>
                  <input type={"text"} id={"search"} placeholder={"Enter Type Of job"} required={true} />
                  <i className={"fa-light fa-magnifying-glass"}>

                  </i>
                </div>
              </div>
              <div className={"search__item"}>
                <div className={"position-relative d-flex"}>
                  <i className={"fa-light fa-location-dot"}>

                  </i>
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
                </div>
              </div>
              <div className={"search__item"}>
                <div className={"position-relative d-flex"}>
                  <i className={"fa-light fa-briefcase"}>

                  </i>
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
                    <option value={"Freelancing"}>
Freelancing
                    </option>
                  </select>
                </div>
              </div>
              <div className={"search__item"}>
                <div className={"position-relative d-flex"}>
                  <i className={"fa-light fa-clock"}>

                  </i>
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
                    <option value={"10 Mar 24"}>
10 Mar 24
                    </option>
                  </select>
                </div>
              </div>
              <button type={"submit"} className={"rts__btn fill__btn be-1 job__search"}>
Search Job
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
