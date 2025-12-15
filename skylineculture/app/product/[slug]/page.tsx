"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import data from "@/data/data";
import { Product, VariantOption } from "@/types/product";
import { useParams } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import toast from "react-hot-toast";
import ProductNotFound from "./not-found";
import axios from "axios";

export default function ProductPage() {
  const { addToCart } = useCart();

  const params = useParams();
  const slug = params.slug as string;

  const product: Product | undefined = data.find((p) => p.url === slug);

  if (!product) return <ProductNotFound />;

  /** IMAGE STATE */
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((i) => (i + 1) % product.img.length);
  const prevSlide = () => setIndex((i) => (i - 1 + product.img.length) % product.img.length);

  /** -------------------------------------
   *  SWIPE SUPPORT (MOBILE)
   * ------------------------------------- */
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const distance = touchEndX.current - touchStartX.current;

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) {
      prevSlide(); // swipe right
    } else {
      nextSlide(); // swipe left
    }
  };

  /** VARIANT STATE */
  const firstVariantGroup: VariantOption | undefined =
    product.variants?.[0] && Object.keys(product.variants[0]).length > 0
      ? product.variants[0]
      : undefined;

  const variantName = firstVariantGroup ? Object.keys(firstVariantGroup)[0] : null;
  const variantOptions = variantName ? firstVariantGroup![variantName] : [];

  const [selectedVariant, setSelectedVariant] = useState<string | null>(
    variantOptions.length > 0 ? variantOptions[0] : "Default"
  );

  const [qty, setQty] = useState(1);

  /** ----------------------------
   *  STOCK SYSTEM
   * ---------------------------- */
  const [stockData, setStockData] = useState<any>(null);
  const [isSoldOut, setIsSoldOut] = useState(false);

  // Load stock from MongoDB
  useEffect(() => {
    axios
      .post("https://skylineculture-api.onrender.com/get-stock", {
        productName: product.title,
      })
      .then((res) => {
        setStockData(res.data[0]?.stock);

        if (!res.data[0]?.stock) return;

        let soldOut = false;

        res.data[0].stock.forEach((obj: any) => {
          for (const [key, value] of Object.entries(obj)) {
            if ((key === selectedVariant || key === "Default") && value === 0) {
              soldOut = true;
            }
          }
        });

        setIsSoldOut(soldOut);
      })
      .catch((err) => console.error(err));
  }, [selectedVariant]);

  /** RECOMMENDED ITEMS */
  const recommended = data
    .filter((p) => p.collection === product.collection && p.url !== product.url)
    .slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-white">

      {/* BACK BUTTON */}
      <Link
        href={`/${product.collection.toLowerCase().replace(" ", "-")}`}
        className="text-black mb-6 inline-block"
      >
        ← Back to {product.collection}
      </Link>

      {/* BREADCRUMB */}
      <div className="text-sm text-black mb-5">
        <Link href="/" className="text-black">Home</Link>
        {" / "}
        <Link
          href={`/${product.collection.toLowerCase().replace(" ", "-")}`}
          className="text-black"
        >
          {product.collection}
        </Link>
        {" / "}
        <span className="text-black">{product.title}</span>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* IMAGE CAROUSEL */}
        <div className="relative">
          <div
            className="relative w-full h-[300px] rounded-lg overflow-hidden sm:h-[450px] md:h-[600px]"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <Image
              src={product.img[index]}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>

          {product.img.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black"
              >
                ‹
              </button>

              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black"
              >
                ›
              </button>

              <div className="flex justify-center gap-2 mt-3">
                {product.img.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-3 h-3 rounded-full ${
                      i === index ? "bg-black" : "bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* INFO */}
        <div>
          <h1 className="text-black text-2xl font-bold mb-1">{product.title}</h1>

          {/* PRICE */}
          <div className="flex items-center gap-3 mb-2">
            {product.sale_price  ?
              <>
              <p className="text-xl font-semibold text-blue-600">${product.sale_price}</p>
              <p className="text-xl line-through text-gray-400">${product.price.toFixed(2)}</p>
              </> 
             
              :
              <>
              <p className="text-xl font-semibold text-blue-600">${product.price.toFixed(2)}</p>
              </>
            
            }
  
          </div>

          {/* SOLD OUT LABEL */}
          {isSoldOut && (
            <p className="text-red-600 font-semibold mb-2 text-lg">OUT OF STOCK</p>
          )}

          {/* VARIANT SELECTOR */}
          {variantName && (
            <div className="mb-6">
              <h3 className="text-black text-lg font-semibold mb-2">{variantName}</h3>
              <div className="flex gap-3 flex-wrap">
                {variantOptions.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedVariant(option)}
                    className={`px-4 py-2 rounded-md border bg-black ${
                      selectedVariant === option
                        ? "bg-blue-600 border-blue-500"
                        : "border-gray-500 hover:border-gray-300"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* DESCRIPTION */}
          <div className="mb-6 whitespace-pre-line">
            <h2 className="text-xl font-semibold mb-2 text-black">Description</h2>
            <ul className="text-black space-y-2">
              {product.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>

          {/* SPECS */}
          {product.specs && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-black">Specifications</h2>
              <p className="text-black whitespace-pre-line">{product.specs}</p>
            </div>
          )}

          {/* SHIPPING */}
          {product.shipping && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-black">Shipping</h2>
              <p className="text-black whitespace-pre-line">{product.shipping[0]}</p>
            </div>
          )}

          {/* QUANTITY */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-black">Quantity</h3>

            <div className="flex items-center w-32 border border-gray-400 rounded-md overflow-hidden">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-10 h-10 flex items-center justify-center text-xl text-black hover:bg-gray-200"
              >
                -
              </button>

              <input
                type="number"
                value={qty}
                min={1}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  setQty(isNaN(value) || value < 1 ? 1 : value);
                }}
                className="w-full text-center text-black outline-none"
              />

              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-10 h-10 flex items-center justify-center text-xl text-black hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>

          {/* ADD TO CART */}
          <button
            disabled={isSoldOut}
            className={`w-full py-3 rounded-md text-lg font-semibold transition ${
              isSoldOut
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-500 text-white"
            }`}
            onClick={() => {
              if (isSoldOut) return;
              addToCart(product, qty, selectedVariant);
              toast.success("Added to cart!");
            }}
          >
            {isSoldOut ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      </div>

      {/* RECOMMENDED ITEMS */}
      {recommended.length > 0 && (
        <div className="mt-16">
          <h2 className="text-black text-center text-2xl font-semibold mb-6">
            You May Also Like
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {recommended.map((item) => (
              <Link
                key={item.id}
                href={`/product/${item.url}`}
                className="bg-gray-900 rounded-lg overflow-hidden hover:opacity-80 transition border-2 border-gray-200"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={item.img[0]}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-3 bg-black">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-white text-sm">${item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
