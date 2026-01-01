import partsData from "@/data/partsData";
import PartsPage from "../../../PartsPage";
import { generateCollectionJsonLd } from "@/lib/generateCollectionJsonLd";
import { PART_CATEGORIES } from "@/lib/partCategories";
import { notFound } from "next/navigation";

export default async function NismoCarPage({
  params,
}: {
  params: { car: string };
}) {

  const { car } = await params;

  const carLabel = PART_CATEGORIES.find(
  (c) => c.slug === car
  )?.label;

  if (!carLabel) {
    notFound();
  }

  const filteredParts = partsData.filter(
    (p) =>
      p.brand === "NISMO" && p.compatible.includes(carLabel)
  );

  const jsonLd = generateCollectionJsonLd(
    `${car} NISMO Parts`,
    filteredParts.map(() => ({
      url: `https://skylineculture.com/parts/nismo/${car}`,
    }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PartsPage
        parts={filteredParts}
        brand="NISMO"
        category={car}
      />
    </>
  );
}
