"use client";

import data from "@/data/productData";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function DiecastCarsPage() {
  const diecasts = data.filter((p) => p.collection.toLowerCase() === "diecast-cars");

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* 🔥 Breadcrumbs (same style as your other pages) */}
        <div className="text-sm text-black mb-5">
          <Link href="/" className="text-red-600 underline">Home</Link>
          {" / "}
          <Link href="/accessories" className="text-red-600 underline">Accessories</Link>
          {" / "}
          <span className="text-black">Diecast Cars</span>
        </div>

        <h1 className="text-3xl font-bold mb-4 text-black">Diecast Cars</h1>

        <p className="text-gray-600 mb-6">
          Bring your favorite Skylines to your shelf — premium diecasts with authentic JDM detail.
        </p>

        {diecasts.length === 0 ? (
          <p className="text-gray-500">No diecast cars found.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {diecasts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
