import data from "@/data/data";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { generateCollectionJsonLd } from "@/lib/generateCollectionJsonLd";

export default function DiecastCarsPage() {
  const diecasts = data.filter((p) => p.collection === "Diecast Cars");
  const diecastJsonLd = generateCollectionJsonLd("Diecasts", diecasts.map((p) => ({
    url: `https://www.skylineculture.com/product/${p.url}`
  })));


  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(diecastJsonLd)}}/>
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* 🔥 Breadcrumbs (same style as your other pages) */}
        <div className="text-sm text-black mb-5">
          <Link href="/" className="text-black">Home</Link>
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
