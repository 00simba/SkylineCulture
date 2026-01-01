"use client";

import data from "@/data/productData";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";
import Link from "next/link";

export default function AccessoriesPage() {
  // ====== Extract ACCESSORY ITEMS ======
  const accessories: Product[] = data.filter((item: Product) =>
    ["keychains", "stickers", "diecast-cars", "pins", "other"].includes(item.collection)
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <div className="text-sm text-black mb-5">
        <Link href="/" className="text-red-600 underline">
          Home
        </Link>{" "}
        / <span>Accessories</span>
      </div>
      
      <h1 className="text-3xl font-bold text-black mb-5">Accessories</h1>

      <p className="text-gray-600 mb-12">
        Browse all keychains, stickers, diecast models, and more.
      </p>

      {/* ITEMS GRID */}
      {accessories.length === 0 ? (
        <p className="text-gray-500">No items available.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {accessories.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}

    </div>
  );
}
