import cars from "@/data/carData";

export function generateListingMetadata({ params } : { params : { slug : string}}) {
  const slug = params.slug;
  const car = cars.find(
    (c) =>
      `${c.year}-${c.color}-${c.trim}-${c.id}`
        .toLowerCase()
        .replace(/\s+/g, "-")
        === slug
  );

  if (!car) {
    return {
      title: "Listing Not Found | SkylineCulture",
      description: "This Skyline listing could not be found.",
    };
  }

  const url = `https://www.skylineculture.com/for-sale/r34-gtr/${slug}`;

  const json =  {
    title: `${car.year} ${car.model} ${car.trim} – For Sale | SkylineCulture`,
    description: `${car.year} ${car.model} ${car.trim} in ${car.color}. View photos, price, mileage, and details.`,

    openGraph: {
      title: `${car.year} ${car.model} ${car.trim} – For Sale`,
      description: `${car.year} ${car.model} in ${car.color}. View price, photos, and details.`,
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

    other: {
        "og:image": car.img[0]
    },

    twitter: {
      card: "summary_large_image",
      title: `${car.year} ${car.model} ${car.trim}`,
      description: `${car.year} ${car.model} in ${car.color}.`,
      images: [car.img[0]],
    },
  };
  return json;
}
