import data from "@/data/data";
import StickersPage from "./StickersPage";
import { generateCollectionJsonLd } from "@/lib/generateCollectionJsonLd";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stickers | SkylineCulture",
  description:
    "Shop Nissan Skyline stickers and JDM-inspired decals. High-quality designs made for cars, laptops, and gear.",
  openGraph: {
    title: "Stickers | SkylineCulture",
    description:
      "Explore Nissan Skyline stickers and JDM-inspired decals curated by SkylineCulture.",
    url: "https://www.skylineculture.com/stickers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stickers | SkylineCulture",
    description:
      "Nissan Skyline stickers and JDM-inspired decals by SkylineCulture.",
  },
};

export default function Page(){
    const stickers = data.filter((p) => p.collection === "Stickers");
    const stickersJsonLd = generateCollectionJsonLd("Stickers", stickers.map((p) => ({
        url: `https://www.skylineculture.com/product/${p.url}`
    })));

    return(
    <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(stickersJsonLd)}}/>
        <StickersPage/>
    </>
    );
};