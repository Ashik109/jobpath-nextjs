import Link from "next/link";

export default function Section2() {
  return (
    <div className={"job__cta"}>
      <div className={"container"}>
        <div className={"row px-3"}>
          <div className={"job__cta__card d-flex flex-wrap flex-lg-nowrap align-items-center"}>
            <div className={"cta__image"}>
              <img src={"/assets/img/hom-4/cta.svg"} alt={""} />
            </div>
            <div className={"cta__content"}>
              <div className={"ml-100 max-500"}>
                <span className={"h3 text-white mb-3 d-block"} data-aos="fade-up">
For Hiring Managers
                </span>
                <p className={"br-lg-none"} data-aos="fade-up">
Looking for a new job can be both exciting and daunting. 
                  <br />
 
                                    Navigating the job market involves exploring various avenues
                                
                </p>
                <Link href={"/contact-1"} className={"rts__btn fill__btn"} prefetch={false}>
Job Post For Free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
