"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { defaultSlugs } from "@/data/details";

type MenuItem = { label: string; href?: string; children?: MenuItem[] };
const numbers = ["One", "Two", "Three", "Four", "Five", "Six"];
const variants = (label: string, route: string, count: number): MenuItem[] =>
  numbers.slice(0, count).map((number, index) => ({ label: `${label} ${number}`, href: `${route}${index + 1}` }));

// Keep the same order and submenu levels as the original Jobpath HTML menu.
const menus: MenuItem[] = [
  { label: "Home", children: numbers.map(number => ({ label: `Home ${number}`, href: `/home-${number.toLowerCase()}` })) },
  { label: "Browse Jobs", children: [
    { label: "Job List", children: variants("Job List", "/job-list-", 5) },
    { label: "Job Details", children: numbers.slice(0, 4).map((number, index) => ({ label: `Job Details ${number}`, href: index ? `/job-details-${index + 1}/${defaultSlugs.job}` : `/job/${defaultSlugs.job}` })) },
  ] },
  { label: "Employers", children: [
    { label: "Employer Style", href: "/employer-1", children: variants("Employer", "/employer-", 3) },
    { label: "Employer Details", href: `/employer/${defaultSlugs.employer}`, children: [
      { label: "Employer Details 1", href: `/employer/${defaultSlugs.employer}` },
      { label: "Employer Details 2", href: `/employer-details-2/${defaultSlugs.employer}` },
    ] },
    { label: "Employer Dashboard", href: "/employer-dashboard" },
  ] },
  { label: "Candidates", children: [
    { label: "Candidate Style", href: "/candidate-1", children: variants("Candidate", "/candidate-", 4) },
    { label: "Candidate Details", href: `/candidate/${defaultSlugs.candidate}`, children: [
      { label: "Candidate Details 1", href: `/candidate/${defaultSlugs.candidate}` },
      { label: "Candidate Details 2", href: `/candidate-details-2/${defaultSlugs.candidate}` },
    ] },
    { label: "Candidate Dashboard", href: "/candidate-dashboard" },
  ] },
  { label: "Pages", children: [
    { label: "Blog", children: [...variants("Blog", "/blog-", 4), { label: "Blog Details", href: `/blog/${defaultSlugs.blog}` }] },
    { label: "About", href: "/about" },
    { label: "Faq", href: "/faq" },
    { label: "Terms & Conditions", href: "/tos" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Pricing", href: "/pricing" },
  ] },
  { label: "Contact", children: [{ label: "Contact One", href: "/contact-1" }, { label: "Contact Two", href: "/contact-2" }] },
];

function NavigationItem({ item, topLevel = false }: { item: MenuItem; topLevel?: boolean }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const toggle = () => setOpen(value => !value);
  const className = topLevel ? "navigation__menu--item__link" : undefined;
  return <li className={`${topLevel ? "navigation__menu--item" : ""}${item.children ? " has-child has-arrow" : ""}`}>
    {item.href ? <Link href={item.href} className={className} prefetch={false}>{item.label}</Link> :
      <button type="button" className={`jobpath-mobile-label ${className || ""}`} aria-expanded={open} aria-controls={id} onClick={toggle}>{item.label}</button>}
    {item.children && <>
      <div className={`jobpath-mobile-submenu${open ? " is-open" : ""}`} id={id} inert={!open} aria-hidden={!open}>
        <div><ul className={topLevel ? "submenu sub__style" : "sub__style"}>
          {item.children.map(child => <NavigationItem key={child.label} item={child} />)}
        </ul></div>
      </div>
      <button type="button" className={`mean-expand${open ? " mean-clicked" : ""}`} aria-label={`${open ? "Collapse" : "Expand"} ${item.label} submenu`} aria-expanded={open} aria-controls={id} onClick={toggle}>
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
    </>}
  </li>;
}

export default function MobileNavigation() {
  return <div className="mean-container jobpath-mobile-nav">
    <div className="mean-bar">
      <nav className="mean-nav" aria-label="Mobile navigation">
        <ul className="list-unstyled">{menus.map(item => <NavigationItem key={item.label} item={item} topLevel />)}</ul>
      </nav>
    </div>
  </div>;
}
