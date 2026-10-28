import Header from "@/app/page-sections/home-two/Header";
import Banner from "@/app/page-sections/home-two/Banner";
import Section from "@/app/page-sections/home-two/Section";
import Section2 from "@/app/page-sections/home-two/Section2";
import Section3 from "@/app/page-sections/home-two/Section3";
import Section4 from "@/app/page-sections/home-two/Section4";
import Section5 from "@/app/page-sections/home-two/Section5";
import Section6 from "@/app/page-sections/home-two/Section6";
import Footer from "@/app/page-sections/home-two/Footer";
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
      <ThemeController bodyClass={"is__home home__two"} />
      <Header />
      <Banner />
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
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
