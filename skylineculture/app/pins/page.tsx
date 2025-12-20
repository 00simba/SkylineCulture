import PinsPage from "./PinsPage";
import { generateCollectionJsonLd } from "@/lib/generateCollectionJsonLd";
import data from "@/data/data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pins | SkylineCulture",
  description:
    "Shop Nissan Skyline enamel pins and JDM-inspired collectible pins. Premium designs made for true Skyline enthusiasts.",
  openGraph: {
    title: "Pins | SkylineCulture",
    description:
      "Explore Nissan Skyline enamel pins and JDM-inspired collectible designs curated by SkylineCulture.",
    url: "https://www.skylineculture.com/pins",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pins | SkylineCulture",
    description:
      "Nissan Skyline enamel pins and JDM-inspired collectibles by SkylineCulture.",
  },
};


export default function Page(){

    const pins = data.filter(
        (item) => item.collection.toLowerCase() === "pins"
    );
    const pinsJsonLd = generateCollectionJsonLd("Pins", pins.map((p) => ({
        url: `https://skylineculture.com/product/${p.url}`
    })));

    return(
    <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(pinsJsonLd)}}/>
        <PinsPage/>
    </>
    );
}