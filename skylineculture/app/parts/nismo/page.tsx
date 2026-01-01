import partsData from "@/data/partsData";
import PartsPage from "../PartsPage";
import { generateCollectionJsonLd } from "@/lib/generateCollectionJsonLd";

export const metadata = {
  title: "NISMO Parts | SkylineCulture",
  description:
    "Factory-engineered NISMO performance parts for Nissan Skyline R32, R33, and R34 GT-R.",
};

export default function NismoPartsPage() {
  const nismoParts = partsData.filter(
    (p) => p.brand === "NISMO"
  );

  const jsonLd = generateCollectionJsonLd(
    "NISMO Parts",
    nismoParts.map((p) => ({
      url: `https://skylineculture.com/parts/nismo/product/${p.url}`,
    }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PartsPage parts={nismoParts} brand="NISMO" category="All"/>
    </>
  );
}
