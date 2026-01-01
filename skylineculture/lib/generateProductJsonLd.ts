import { Product } from "@/types/product";

export function generateProductJsonLd(product : Product, url: string){
    const json = {
    "@context": "https://schema.org",
    "@type": "Product",

    name: product.title,
    description: product.description.join(" "),
    image: product.img,
    sku: product.id.toString(),

    brand: {
      "@type": "Brand",
      name: "SkylineCulture",
    },

    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "USD",
      price: product.price,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };
  return json;
}