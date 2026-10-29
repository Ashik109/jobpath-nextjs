import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";
import "swiper/css/bundle";
import "glightbox/dist/css/glightbox.css";
import Interactions from "./components/Interactions";
import AosController from "./components/AosController";
import NiceSelectController from "./components/NiceSelectController";
export const metadata: Metadata = {
  title: "Jobpath | Find Your Next Opportunity",
  description: "Explore jobs, discover employers, and manage your career with Jobpath.",
  icons: { icon: "/assets/img/favicon.ico" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200..800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/fonts/icon/css/rt-icons.css" />
        <link rel="stylesheet" href="/assets/fonts/fontawesome/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body className="loaded">{children}<AosController /><Interactions /><NiceSelectController /></body>
    </html>
  );
}
