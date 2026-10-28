import Header from "@/app/page-sections/about/Header";
import Breadcrumb from "@/app/page-sections/tos/Breadcrumb";
import Section from "@/app/page-sections/tos/Section";
import Section2 from "@/app/page-sections/about/Section7";
import Footer from "@/app/page-sections/about/Footer";
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
      <ThemeController bodyClass={""} />
      <Header />
      <Breadcrumb />
      <Section />
      <Section2 />
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
