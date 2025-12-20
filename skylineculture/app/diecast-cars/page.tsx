import { generateCollectionJsonLd } from "@/lib/generateCollectionJsonLd";
import DiecastCarsPage from "./DiecastCarsPage";
import data from "@/data/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diecast Cars | SkylineCulture",
  description:
    "Shop Nissan Skyline diecast cars and scale models. Collectible JDM-inspired miniatures curated by SkylineCulture.",
  openGraph: {
    title: "Diecast Cars | SkylineCulture",
    description:
      "Explore Nissan Skyline diecast cars and scale models. Premium collectible miniatures for JDM enthusiasts.",
    url: "https://www.skylineculture.com/diecast-cars",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diecast Cars | SkylineCulture",
    description:
      "Collectible Nissan Skyline diecast cars and JDM-inspired scale models.",
  },
};

export default function Page(){
  const diecasts = data.filter((p) => p.collection === "Diecast Cars");
  const diecastJsonLd = generateCollectionJsonLd("Diecasts", diecasts.map((p) => ({
    url: `https://www.skylineculture.com/product/${p.url}`
  })));

  return(
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html : JSON.stringify(diecastJsonLd)}}/>
      <DiecastCarsPage/>
    </>
  );
};