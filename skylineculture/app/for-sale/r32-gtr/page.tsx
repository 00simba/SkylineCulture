import cars from "@/data/carData";
import { generateCollectionJsonLd } from "@/lib/generateCollectionJsonLd";
import ListingsPage from "./ListingsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "R32 GT-R For Sale | SkylineCulture",
  description:
    "Browse verified Nissan R32 GT-R listings. View photos, specs, mileage, and pricing from trusted sellers worldwide.",
  openGraph: {
    title: "R32 GT-R For Sale | SkylineCulture",
    description:
      "Explore verified Nissan R32 GT-R listings with photos, specifications, and pricing on SkylineCulture.",
    url: "https://www.skylineculture.com/for-sale/r32-gtr",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "R32 GT-R For Sale | SkylineCulture",
    description:
      "Verified Nissan R32 GT-R listings with photos, specs, and pricing.",
  },
};

export default function Page() {

  const r32Cars = cars.filter((c) => c.model === "R32 GT-R");
  const r32GtrJsonLd = generateCollectionJsonLd("R32 GT-R For Sale", r32Cars.map((c) => ({
      url: `https://skylineculture.com/for-sale/r32-gtr/${c.year}-${c.color.toLowerCase()}-${c.trim.toLowerCase()}-${c.id.toLowerCase()}`
  })));
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(r32GtrJsonLd)}}/>
      <ListingsPage/>
    </>
  );
}
