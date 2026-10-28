import Header from "@/app/page-sections/about/Header";
import Breadcrumb from "@/app/page-sections/privacy/Breadcrumb";
import Section from "@/app/page-sections/privacy/Section";
import Section2 from "@/app/page-sections/about/Section7";
import LoginModal from "@/app/page-sections/about/LoginModal";
import SignupModal from "@/app/page-sections/about/SignupModal";
import ForgotModal from "@/app/page-sections/about/ForgotModal";
import Footer from "@/app/page-sections/about/Footer";
import MobileMenu from "@/app/page-sections/about/MobileMenu";
import Preloader from "@/app/page-sections/about/Preloader";
import BackToTop from "@/app/page-sections/about/BackToTop";
import ThemeController from "@/app/components/ThemeController";

export default function PageContent() {
  return (
    <>
      <ThemeController bodyClass={""} />
      <Header />
      <Breadcrumb />
      <Section />
      <Section2 />
      <LoginModal />
      <SignupModal />
      <ForgotModal />
      <Footer />
      <MobileMenu />
      <Preloader />
      <BackToTop />
    </>
  );
}
