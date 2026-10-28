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
                  <i className={"fa-light fa-user"}>

                  </i>
                  <select className={"form-select"} tabIndex={0} name={"filter"} aria-label={"Search Author"} defaultValue={""}>
                    <option value={""}>
Search Author
                    </option>
                    <option value={"Jonathon"}>
Jonathon
                    </option>
                    <option value={"Alamain"}>
Alamain
                    </option>
                  </select>
                </div>
              </div>
              <button type={"submit"} className={"rts__btn fill__btn be-1 job__search"}>
Search Blog
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
