import { generateCollectionJsonLd } from "@/lib/generateCollectionJsonLd";
import AccessoriesPage from "./AccessoriesPage";
import data from "@/data/productData";

export const metadata = {
  title: "Accessories | SkylineCulture",
  description: "Browse SkylineCulture accessories including keychains, badges, stickers, and collectible JDM-inspired merchandise.",
}

export default function Page() {

    const accessories = data
    const accessoriesJsonLd = generateCollectionJsonLd("Pins", accessories.map((p) => ({
        url: `https://skylineculture.com/product/${p.url}`
    })));

  return(
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(accessoriesJsonLd)}}/>
      <AccessoriesPage/>
    </>
  );
}
