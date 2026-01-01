"use client";

import { useState, useMemo } from "react";
import partsData from "@/data/partsData";
import PartCard from "@/components/PartCard";
import Link from "next/link";
import { PART_CATEGORIES } from "@/lib/partCategories";
import { Part } from "@/types/part";

type PartsPageProps = {
  parts: Part[];
  brand: string;
  category: string;
};

export default function PartsPage({ parts, brand, category }: PartsPageProps) {

  const basePath = brand
  ? `/parts/${brand.toLowerCase()}`
  : "/parts";

  const currentCategory =
  PART_CATEGORIES.find((c) => c.slug === brand?.toLocaleLowerCase()) ?? PART_CATEGORIES[0];

  // This is the VALUE we actually filter with
  const selectedLabel = currentCategory.label;

  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 8;

  const processedItems = useMemo(() => {
  let items = [...partsData];

  if (selectedLabel !== "All") {
    items = items.filter(
      (item) =>
        item.compatible.includes(selectedLabel)
    );
  }

  return items;
}, [selectedLabel]);

const normalizedCategory =
  category === "All" || !category ? null : category;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      {/* BREADCRUMB */}
      <div className="text-sm text-black mb-5">
        <Link href="/" className="text-red-600 underline">Home</Link>
        {" / "}
        <Link href="/parts" className="text-red-600 underline">Parts</Link>
        {" / "}
        <span className="text-black">NISMO</span>
      </div>

      <h1 className="text-3xl font-bold mb-5">
        NISMO Parts
      </h1>

      <p className="text-gray-600 mb-5">
        Shop NISMO parts for Nissan Skyline R32, R33, and R34 GT-R featuring high performance and appeal.
      </p>

      {/* FILTERS + SORT */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div className="flex gap-3 flex-wrap">
          
        {PART_CATEGORIES.map((cat) => {

          const href =
            cat.slug === null
              ? basePath
              : `${basePath}/car/${cat.slug}`;

          const isActive =
          (cat.slug === null && normalizedCategory === null) ||
          cat.slug === normalizedCategory;

          return (
            <Link
              key={cat.label}
              href={href}
              className={`px-4 py-2 rounded border text-sm ${
                isActive
                  ? "bg-black text-white"
                  : "bg-white text-black border-gray-400 hover:bg-gray-100"
              }`}
            >
              {cat.label}
            </Link>
          );
        })}
        </div>
      </div>

      {/* ITEMS GRID */}
  
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {parts.map((item) => (
          <PartCard key={item.id} item={item} />
        ))}
      </div>

    </div>
  );
}
