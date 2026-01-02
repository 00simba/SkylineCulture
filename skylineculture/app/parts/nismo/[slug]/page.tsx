import partsData from "@/data/partsData";
import PartsDetailPage from "../../PartsDetailPage";
import { notFound } from "next/navigation";
import { generatePartJsonLd } from "@/lib/generatePartJsonLd";

export default async function NismoProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const part = partsData.find(
    (p) =>
      (p.url === slug ||
        p.options?.values.some((v) => v.slug === slug))
  );

  if (!part) notFound();

  const url = `https://skylineculture.com/parts/nismo/${part.url}`;
  const jsonLd = generatePartJsonLd(part, url);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PartsDetailPage />
    </>
  );
}
