import PartsPage from "./PartsPage";
import partsData from "@/data/partsData";
import { generateCollectionJsonLd } from "@/lib/generateCollectionJsonLd";
import NotFoundPage from "../for-sale/[slug]/not-found";
import PartsBrand from "./PartsBrand";
import Link from "next/link";

export const metadata = {
  title: "Parts | SkylineCulture",
  description:
    "Browse SkylineCulture for Skyline R32, R33, and R34 GT-R NISMO parts",
};

export default function PartsLandingPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <div className="text-sm text-black mb-5">
        <Link href="/" className="text-red-600 underline">Home</Link>
        {" / "}
        <span className="text-black">Parts</span>
      </div>

      <h1 className="text-3xl font-bold mb-4">
        Performance Parts
      </h1>

      <p className="text-gray-600 max-w-2xl mb-10">
        Browse factory-engineered and motorsport-proven parts for the Nissan Skyline from leading Japanese performance brands.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <PartsBrand
          brand="NISMO"
          description="Factory-engineered performance parts for Nissan Skyline R32, R33, and R34 GT-R."
          href="/parts/nismo"
          logoUrl="https://d38opoffv15p79.cloudfront.net/Images/public/nismo.webp"
        />
      </div>
    </div>
  );
}