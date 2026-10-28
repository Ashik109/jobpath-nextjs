export const dynamicParams = false;
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Content from "@/app/page-sections/employer-details-2";
import { getDetail, getDetails } from "@/data/details";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return getDetails("employer").map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getDetail("employer", slug);
  return { title: data ? data.title + " | Jobpath" : "Not Found | Jobpath", description: data?.description };
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const data = getDetail("employer", slug);
  if (!data) notFound();
  return <Content detailContent={data} />;
}
