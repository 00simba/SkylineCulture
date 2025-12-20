import { generateCollectionJsonLd } from "@/lib/generateCollectionJsonLd";
import KeychainsPage from "./KeychainsPage";
import data from "@/data/data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keychains | SkylineCulture",
  description:
    "Shop Nissan Skyline keychains and JDM-inspired accessories. Premium designs made for Skyline enthusiasts.",
  openGraph: {
    title: "Keychains | SkylineCulture",
    description:
      "Explore Nissan Skyline keychains and JDM-inspired accessories designed for true enthusiasts.",
    url: "https://www.skylineculture.com/keychains",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keychains | SkylineCulture",
    description:
      "Nissan Skyline keychains and JDM-inspired accessories by SkylineCulture.",
  },
};

export default function Page(){

  const keychains = data.filter(
    (item) => item.collection.toLowerCase() === "keychains"
  );
  const keychainJsonLd = generateCollectionJsonLd("Keychains", keychains.map((p) => ({
    url: `https://www.skylineculture.com/product/${p.url}`
  })));

  return(
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(keychainJsonLd)}}/>
      <KeychainsPage/>
    </>
  )
}