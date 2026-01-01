import data from "@/data/productData";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function StickersPage() {
  const stickers = data.filter((p) => p.collection.toLowerCase() === "stickers");

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      {/* 🔥 Breadcrumbs (same style as product, listings, keychains) */}
      <div className="text-sm text-black mb-5">
        <Link href="/" className="text-red-600 underline">Home</Link>
        {" / "}
        <Link href="/accessories" className="text-red-600 underline">Accessories</Link>
        {" / "}
        <span className="text-black">Stickers</span>
      </div>

      <h1 className="text-3xl font-bold mb-4 text-black">Stickers</h1>

      <p className="text-gray-600 mb-6">
        Add personality to anything you own with high-quality, weather-resistant JDM stickers.
      </p>

      {stickers.length === 0 ? (
        <p className="text-gray-500">No stickers found.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {stickers.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
