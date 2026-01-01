import { generateCollectionJsonLd } from "@/lib/generateCollectionJsonLd";
import OthersPage from "../OthersPage";
import data from "@/data/productData";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Other | SkylineCulture",
  description:
    "Browse unique Nissan Skyline accessories and JDM-inspired merchandise not found in our standard collections.",
  openGraph: {
    title: "Other Accessories | SkylineCulture",
    description:
      "Explore unique Nissan Skyline accessories and JDM-inspired merchandise curated by SkylineCulture.",
    url: "https://www.skylineculture.com/others",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Other Accessories | SkylineCulture",
    description:
      "Unique Nissan Skyline accessories and JDM-inspired merchandise by SkylineCulture.",
  },
};

export default function Page(){

  const others = data.filter(
    (item) => item.collection.toLowerCase() === "other"
  );
  const othersJsonLd = generateCollectionJsonLd("Other", others.map((p) => ({
    url: `https://skylineculture.com/product/${p.url}`
  })));

  return(
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(othersJsonLd)}}/>
    <OthersPage/>
    </>
  );
}