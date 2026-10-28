import catalog from "./catalog.json";

export type DetailKind = "job" | "employer" | "candidate" | "blog";
export type DetailRecord = {
  kind: string;
  slug: string;
  title: string;
  image: string;
  location: string;
  category: string;
  company: string;
  employmentType: string;
  salary: string;
  experience: string;
  date: string;
  author: string;
  tags: string[];
  description: string;
  cardDescription?: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  openJobs: number;
};

export const details: Record<DetailKind, Record<string, DetailRecord>> = catalog;
export const defaultSlugs: Record<DetailKind, string> = {
  job: "senior-ui-designer-apple",
  employer: "upwork-com",
  candidate: "michael-roy",
  blog: "start-an-online-job-and-work-from-home",
};

export function getDetails(kind: DetailKind) { return Object.values(details[kind]); }
export function getDetail(kind: DetailKind, slug: string) { return details[kind][slug]; }
export function detailPath(kind: DetailKind, slug: string) { return `/${kind}/${slug}`; }

export function employerPath(record: DetailRecord) {
  const name = record.company.toLowerCase().replace(/[^a-z0-9]/g, "");
  const employer = getDetails("employer").find(item => item.title.toLowerCase().replace(/[^a-z0-9]/g, "").startsWith(name) || item.image === record.image);
  return employer ? detailPath("employer", employer.slug) : "/employer-1";
}
