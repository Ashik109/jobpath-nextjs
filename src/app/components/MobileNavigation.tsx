import Link from "next/link";
import { defaultSlugs } from "@/data/details";

const menus = [
  { title: "Home", links: ["one", "two", "three", "four", "five", "six"].map((name, i) => ({ label: `Home ${i + 1}`, href: `/home-${name}` })) },
  { title: "Jobs", links: [...Array.from({ length: 5 }, (_, i) => ({ label: `Job List ${i + 1}`, href: `/job-list-${i + 1}` })), { label: "Job Details", href: `/job/${defaultSlugs.job}` }] },
  { title: "Employers", links: [...Array.from({ length: 3 }, (_, i) => ({ label: `Employer List ${i + 1}`, href: `/employer-${i + 1}` })), { label: "Employer Dashboard", href: "/employer-dashboard" }] },
  { title: "Candidates", links: [...Array.from({ length: 4 }, (_, i) => ({ label: `Candidate List ${i + 1}`, href: `/candidate-${i + 1}` })), { label: "Candidate Dashboard", href: "/candidate-dashboard" }] },
  { title: "Pages", links: [{ label: "About", href: "/about" }, { label: "Pricing", href: "/pricing" }, { label: "FAQ", href: "/faq" }, { label: "Contact", href: "/contact-1" }, { label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/tos" }] },
  { title: "Blog", links: Array.from({ length: 4 }, (_, i) => ({ label: `Blog ${i + 1}`, href: `/blog-${i + 1}` })) },
];

export default function MobileNavigation() {
  return <nav className="jobpath-mobile-nav" aria-label="Mobile navigation">
    {menus.map(menu => <details key={menu.title}>
      <summary>{menu.title}</summary>
      {menu.links.map(link => <Link key={link.href} href={link.href} prefetch={false}>{link.label}</Link>)}
    </details>)}
  </nav>;
}
