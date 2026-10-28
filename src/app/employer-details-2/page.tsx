import { redirect } from "next/navigation";
import { defaultSlugs } from "@/data/details";
export default function Page() { redirect(`/employer-details-2/${defaultSlugs.employer}`); }
