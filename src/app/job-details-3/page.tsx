import { redirect } from "next/navigation";
import { defaultSlugs } from "@/data/details";
export default function Page() { redirect(`/job-details-3/${defaultSlugs.job}`); }
