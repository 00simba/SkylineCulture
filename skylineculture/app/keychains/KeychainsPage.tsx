"use client";

import data from "@/data/data";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { generateCollectionJsonLd } from "@/lib/generateCollectionJsonLd";

export default function KeychainsPage(){
    // Filter items belonging to Keychains collection
  const keychains = data.filter(
    (item) => item.collection.toLowerCase() === "keychains"
  );
  const keychainJsonLd = generateCollectionJsonLd("Keychains", keychains.map((p) => ({
    url: `https://www.skylineculture.com/product/${p.url}`
  })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(keychainJsonLd)}}/>
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* 🔥 Breadcrumbs (same style as product pages) */}
        <div className="text-sm text-black mb-5">
          <Link href="/" className="text-black">Home</Link>
          {" / "}
          <span className="text-black">Keychains</span>
        </div>

        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-black">
          Keychains
        </h1>

        <p className="text-gray-600 mb-6">
          Add some JDM flair to your keys — small details that make a big statement.
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
          {keychains.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

        {keychains.length === 0 && (
          <p className="text-gray-500 mt-10 text-center">
            No keychains available at the moment.
          </p>
        )}
      </div>
    </>
  );
}