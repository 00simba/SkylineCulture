import { Part } from "@/types/part";

export function generatePartJsonLd(part: Part, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",

    name: part.title,
    description: part.description.join(" "),
    image: part.img,

    sku: part.partNumber?.[0] ?? part.id.toString(),

    brand: {
      "@type": "Brand",
      name: "NISMO",
    },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "USD",
      price: part.sale_price ?? part.price,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "SkylineCulture",
      },
    },
  };
}
