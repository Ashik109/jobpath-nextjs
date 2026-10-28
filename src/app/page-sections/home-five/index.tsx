import Header from "@/app/page-sections/home-five/Header";
import Banner from "@/app/page-sections/home-five/Banner";
import Section from "@/app/page-sections/home-five/Section";
import Section2 from "@/app/page-sections/home-five/Section2";
import Section3 from "@/app/page-sections/home-five/Section3";
import Section4 from "@/app/page-sections/home-five/Section4";
import Section5 from "@/app/page-sections/home-five/Section5";
import Section6 from "@/app/page-sections/home-five/Section6";
import Section7 from "@/app/page-sections/home-five/Section7";
import Section8 from "@/app/page-sections/home-five/Section8";
import Section9 from "@/app/page-sections/home-five/Section9";
import Section10 from "@/app/page-sections/home-five/Section10";
import Section11 from "@/app/page-sections/home-five/Section11";
import Section12 from "@/app/page-sections/home-five/Section12";
import Footer from "@/app/page-sections/home-five/Footer";
import LoginModal from "@/app/page-sections/about/LoginModal";
import SignupModal from "@/app/page-sections/about/SignupModal";
import ForgotModal from "@/app/page-sections/about/ForgotModal";
import MobileMenu from "@/app/page-sections/about/MobileMenu";
import Preloader from "@/app/page-sections/about/Preloader";
import BackToTop from "@/app/page-sections/about/BackToTop";
import ThemeController from "@/app/components/ThemeController";

export default function PageContent() {
  return (
    <>
      <ThemeController bodyClass={"is__home home__five"} />
      <Header />
      <Banner />
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Footer />
      <LoginModal />
      <SignupModal />
      <ForgotModal />
      <MobileMenu />
      <Preloader />
      <BackToTop />
    </>
  );
}
