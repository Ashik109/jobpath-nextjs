import Header from "@/app/page-sections/employer-dash-alert/Header";
import Dashboard from "@/app/page-sections/employer-dash-list/Dashboard";
import MobileMenu from "@/app/page-sections/about/MobileMenu";
import Preloader from "@/app/page-sections/about/Preloader";
import BackToTop from "@/app/page-sections/about/BackToTop";
import ThemeController from "@/app/components/ThemeController";

export default function PageContent() {
  return (
    <>
      <ThemeController bodyClass={"template-dashboard"} />
      <Header />
      <Dashboard />
      <MobileMenu />
      <Preloader />
      <BackToTop />
    </>
  );
}
