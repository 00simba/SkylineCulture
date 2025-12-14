import cars from "@/data/carData";
import { Car } from "@/types/car";

type MetadataParams = {
  params: {
    slug: string;
  };
};


export function generateListingMetadata({ params }: MetadataParams) {

  function createSlug(car: Car) {
  return `${car.year}-${car.color}-${car.trim}-${car.id}`
    .toLowerCase()
    .replace(/\s+/g, "-")   // replace spaces
    .replace(/-+/g, "-");   // collapse double dashes
}


  console.log(params)

  const car = cars.find(
    (c) => createSlug(c)  === params.slug
  );

  if (!car) {
    return {
      title: "Listing Not Found | SkylineCulture",
      description: "This Skyline listing could not be found."
    };
  }

  const url = `https://www.skylineculture.com/for-sale/r34-gtr/${params.slug}`;

  return {
    title: `${car.year} ${car.model} ${car.trim} – For Sale | SkylineCulture`,
    description: `${car.year} ${car.model} ${car.trim} in ${car.color}. View photos, price, and details.`,
    openGraph: {
      title: `${car.year} ${car.model} ${car.trim} – For Sale`,
      description: `${car.year} ${car.model} in ${car.color}. View photos, price, and details.`,
      url,
      type: "website",
      images: [
        {
          url: car.img[0],
          width: 1200,
          height: 630,
          alt: `${car.year} ${car.model}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${car.year} ${car.model} ${car.trim}`,
      description: `${car.year} ${car.model} in ${car.color}.`,
      images: [car.img[0]],
    },
  };
}
