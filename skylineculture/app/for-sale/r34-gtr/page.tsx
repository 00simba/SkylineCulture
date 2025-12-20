import { generateCollectionJsonLd } from "@/lib/generateCollectionJsonLd";
import cars from "@/data/carData";
import type { Metadata } from "next";
import ListingsPage from "./ListingsPage";

export const metadata: Metadata = {
  title: "R34 GT-R For Sale | SkylineCulture",
  description:
    "Browse verified Nissan R34 GT-R listings. View photos, specs, mileage, and pricing from trusted sellers worldwide.",
  openGraph: {
    title: "R34 GT-R For Sale | SkylineCulture",
    description:
      "Explore verified Nissan R34 GT-R listings with photos, specifications, and pricing on SkylineCulture.",
    url: "https://www.skylineculture.com/for-sale/r34-gtr",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "R34 GT-R For Sale | SkylineCulture",
    description:
      "Verified Nissan R34 GT-R listings with photos, specs, and pricing.",
  },
};

export default function Page() {
  const r34Cars = cars.filter((c) => c.model === "R34 GT-R");
  const r34GtrJsonLd = generateCollectionJsonLd("R34 GT-R For Sale", r34Cars.map((c) => ({
    url: `https://skylineculture.com/for-sale/r34-gtr/${c.year}-${c.color.toLowerCase()}-${c.trim.toLowerCase()}-${c.id.toLowerCase()}`
  })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(r34GtrJsonLd)}}/>
      <ListingsPage/>
    </>
  );
}
