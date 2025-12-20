import type { Metadata } from "next";
import ListingsPage from "./ListingsPage";

export const metadata: Metadata = {
  title: "Skyline GT-R For Sale | R32, R33 & R34 Listings | SkylineCulture",
  description:
    "Browse verified Nissan Skyline GT-R listings including R32, R33, and R34 models. View photos, specs, mileage, and pricing from trusted sellers worldwide.",
  openGraph: {
    title: "Skyline GT-R For Sale | SkylineCulture",
    description:
      "Explore verified Nissan Skyline GT-R listings including R32, R33, and R34 models with photos, specifications, and pricing.",
    url: "https://www.skylineculture.com/for-sale",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyline GT-R For Sale | SkylineCulture",
    description:
      "Browse verified Nissan Skyline GT-R listings including R32, R33, and R34 models.",
  },
};

export default function Page() {
  return <ListingsPage />;
}
