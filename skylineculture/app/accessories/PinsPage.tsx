"use client";

import data from "@/data/productData";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function PinsPage() {
  const pins = data.filter(
    (item) => item.collection.toLowerCase() === "pins"
  );

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* 🔥 Breadcrumbs (same style as product pages) */}
        <div className="text-sm text-black mb-5">
          <Link href="/" className="text-red-600 underline">Home</Link>
          {" / "}
          <Link href="/accessories" className="text-red-600 underline">Accessories</Link>
          {" / "}
          <span className="text-black">Pins</span>
        </div>

        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-black">
          Pins
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
