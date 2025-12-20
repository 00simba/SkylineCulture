import { generateCollectionJsonLd } from "@/lib/generateCollectionJsonLd";
import type { Metadata } from "next";
import ListingsPage from "./ListingsPage";
import cars from "@/data/carData";


export const metadata: Metadata = {
  title: "R33 GT-R For Sale | SkylineCulture",
  description:
    "Browse verified Nissan R33 GT-R listings. View photos, specs, mileage, and pricing from trusted sellers worldwide.",
  openGraph: {
    title: "R33 GT-R For Sale | SkylineCulture",
    description:
      "Explore verified Nissan R33 GT-R listings with photos, specifications, and pricing on SkylineCulture.",
    url: "https://www.skylineculture.com/for-sale/r33-gtr",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "R33 GT-R For Sale | SkylineCulture",
    description:
      "Verified Nissan R33 GT-R listings with photos, specs, and pricing.",
  },
};


export default function Page(){
    const r33Cars = cars.filter((c) => c.model === "R33 GT-R");
    const r33GtrJsonLd = generateCollectionJsonLd("R33 GT-R For Sale", r33Cars.map((c) => ({
        url: `https://skylineculture.com/for-sale/r33-gtr/${c.year}-${c.color.toLowerCase()}-${c.trim.toLowerCase()}-${c.id.toLowerCase()}`
    })));

    return(
    <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(r33GtrJsonLd)}}/>
        <ListingsPage/>
    </>);
}