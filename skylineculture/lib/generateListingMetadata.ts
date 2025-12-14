import { Car } from "@/types/car";
import { Params } from "next/dist/server/request/params";

export async function generateMetadata(car: Car, params: Params){

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