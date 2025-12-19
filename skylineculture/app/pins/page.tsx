"use client";

import data from "@/data/data";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { generateCollectionJsonLd } from "@/lib/generateCollectionJsonLd";

export default function PinsPage() {
  // Filter items belonging to Keychains collection
  const pins = data.filter(
    (item) => item.collection.toLowerCase() === "pins"
  );
  const pinsJsonLd = generateCollectionJsonLd("Pins", pins.map((p) => ({
    url: `https://skylineculture.com/product/${p.url}`
  })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(pinsJsonLd)}}/>
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* 🔥 Breadcrumbs (same style as product pages) */}
        <div className="text-sm text-black mb-5">
          <Link href="/" className="text-black">Home</Link>
          {" / "}
          <span className="text-black">Pins</span>
        </div>

        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-black">
          Keychains
        </h1>

        <p className="text-gray-600 mb-6">
          Carry the spirit of the R34 GTR with you — a small accessory with real JDM soul.
        </p>


        {/* Grid of Products */}
        <div
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-3 
            md:grid-cols-4 
            gap-6
          "
        >
          {pins.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

        {pins.length === 0 && (
          <p className="text-gray-500 mt-10 text-center">
            No pins available at the moment.
          </p>
        )}
      </div>
    </>
  );
}
