import Header from "@/app/page-sections/about/Header";
import Breadcrumb from "@/app/page-sections/candidate-3/Breadcrumb";
import Section from "@/app/page-sections/employer-2/Section";
import Section2 from "@/app/page-sections/about/Section7";
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
      <Footer />
      <MobileMenu />
      <Preloader />
      <BackToTop />
    </>
  );
}
