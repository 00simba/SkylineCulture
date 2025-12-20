"use client";

import { useState, useMemo } from "react";
import data from "@/data/data";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

export default function AccessoriesPage() {
  // ====== Extract ACCESSORY ITEMS ======
  const accessories: Product[] = data.filter((item: Product) =>
    ["Keychains", "Stickers", "Diecast Cars", "Pins", "Other"].includes(item.collection)
  );

  // ====== Extract categories dynamically ======
  const categories = ["All", ...new Set(accessories.map((a) => a.collection))];

  // ====== UI State ======
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortMethod, setSortMethod] = useState("none");
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 8;

  // ====== Filtered & Sorted Items ======
  const processedItems = useMemo(() => {
    let items = [...accessories];

    if (selectedCategory !== "All") {
      items = items.filter((item) => item.collection === selectedCategory);
    }

    if (sortMethod === "low-high") {
      items.sort((a, b) => a.price - b.price);
    }

    if (sortMethod === "high-low") {
      items.sort((a, b) => b.price - a.price);
    }

    return items;
  }, [selectedCategory, sortMethod]);

  // ====== Pagination ======
  const totalPages = Math.ceil(processedItems.length / ITEMS_PER_PAGE);
  const paginatedItems = processedItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  function handleCategoryChange(category: string) {
    setSelectedCategory(category);
    setCurrentPage(1);
  }

  function handleSortChange(method: string) {
    setSortMethod(method);
    setCurrentPage(1);
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-black mb-6">Accessories</h1>

      <p className="text-gray-600 mb-12">
        Browse all keychains, stickers, diecast models, and more.
      </p>

      {/* FILTERS + SORT */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div className="flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded border text-sm ${
                selectedCategory === cat
                  ? "bg-black text-white"
                  : "bg-white text-black border-gray-400 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <select
          value={sortMethod}
          onChange={(e) => handleSortChange(e.target.value)}
          className="border px-3 py-2 rounded text-black"
        >
          <option value="none">Sort: Default</option>
          <option value="low-high">Price: Low → High</option>
          <option value="high-low">Price: High → Low</option>
        </select>
      </div>

      {/* ITEMS GRID */}
      {paginatedItems.length === 0 ? (
        <p className="text-gray-500">No items available.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {paginatedItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 gap-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className={`px-4 py-2 rounded border ${
              currentPage === 1
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            Previous
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded border ${
                  currentPage === i + 1
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className={`px-4 py-2 rounded border ${
              currentPage === totalPages
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
