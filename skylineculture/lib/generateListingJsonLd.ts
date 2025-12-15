import { Car } from "@/types/car";

export function generateListingJsonLd(car: Car, url: string) {
  const json = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${car.year} ${car.model} ${car.trim}`,
    "description": car.description,
    "image": car.img,
    "sku": car.id,
    "brand": {
      "@type": "Brand",
      "name": car.make
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": car.price.replace(/[^0-9.]/g, ""), // sanitize value
      "availability": "https://schema.org/InStock",
      "url": url
    },
    "vehicle": {
      "@type": "Vehicle",
      "name": `${car.year} ${car.model} ${car.trim}`,
      "model": car.model,
      "brand": car.make,
      "vehicleModelDate": car.year,
      "color": car.color,
      "mileageFromOdometer": {
        "@type": "QuantitativeValue",
        "value": car.milage
      }
    }
  };
  return json;
}
