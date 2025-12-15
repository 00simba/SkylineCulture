"use client";

import data from "@/data/data";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function OthersPage() {
  // Filter items belonging to Keychains collection
  const others = data.filter(
    (item) => item.collection.toLowerCase() === "other"
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      {/* 🔥 Breadcrumbs (same style as product pages) */}
      <div className="text-sm text-black mb-5">
        <Link href="/" className="text-black">Home</Link>
        {" / "}
        <span className="text-black">Other</span>
      </div>

      {/* Page Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-black">
        Other
      </h1>

      <p className="text-gray-600 mb-6">
        Add a subtle touch of JDM heritage — refined details that speak for themselves.
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
        {others.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      {others.length === 0 && (
        <p className="text-gray-500 mt-10 text-center">
          No keychains available at the moment.
        </p>
      )}
    </div>
  );
}
