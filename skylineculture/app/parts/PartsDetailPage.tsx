"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import parts from "@/data/partsData";
import { VariantOption } from "@/types/part";
import { useCart } from "@/app/context/CartContext";
import toast from "react-hot-toast";
import NotFound from "@/app/not-found";
import { generateProductMetadata } from "@/lib/generateProductMetadata";
import Link from "next/link";

export async function generateMetadata(
  { params } : { params : { slug : string } }
){
  const result = await (params as any);
  return generateProductMetadata({ params: result});

}

export default function PartsDetailPage({ slug } : any ) {
  const { addToCart } = useCart();

  const part = parts.find((p) => p.url[0] === slug);

  console.log(slug);
  

  if (!part) return <NotFound />;

  /** IMAGE STATE */
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((i) => (i + 1) % part.img.length);
  const prevSlide = () => setIndex((i) => (i - 1 + part.img.length) % part.img.length);

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
    part.variants?.[0] && Object.keys(part.variants[0]).length > 0
      ? part.variants[0]
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
  {/*
  useEffect(() => {
    axios.post("https://skylineculture-api.onrender.com/get-stock", {
        productName: part.title,
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
  }, [selectedVariant]); */}

  /** RECOMMENDED ITEMS */
  
  return (

    <div className="max-w-6xl mx-auto px-6 py-10 text-white">

      {/* BACK BUTTON 
      <Link
        href={`/${part.compatible[0].toLowerCase().replace(" ", "-")}`}
        className="text-black mb-6 inline-block"
      >
        ← Back to {part.compatible[0]}
      </Link>
        */}

      {/* BREADCRUMB 
      <div className="text-sm text-black mb-5">
        <Link href="/" className="text-black">Home</Link>
        {" / "}
        <Link
          href={`/${part.compatible[0].toLowerCase().replace(" ", "-")}`}
          className="text-black"
        >
          {part.compatible[0]}
        </Link>
        {" / "}
        <span className="text-black">{part.compatible[0]}</span>
      </div>
        */}
      

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
              src={part.img[index]}
              alt={part.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>

          {part.img.length > 1 && (
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
                {part.img.map((_, i) => (
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
          <h1 className="text-red-600 text-xl font-bold mb-1">NISMO</h1>
          <h1 className="text-black text-2xl font-bold mb-1 ">{part.title}</h1>
          

          {/* PRICE */}
          <div className="flex items-center gap-3 mb-2">
            {part.sale_price  ?
              <>
              <p className="text-xl font-semibold text-black">${part.sale_price}</p>
              <p className="text-xl line-through text-gray-400">${part.price.toFixed(2)}</p>
              </> 
             
              :
              <>
              <p className="text-xl font-semibold text-black">${part.price.toFixed(2)}</p>
              </>
            
            }
  
          </div>

          {/* SOLD OUT LABEL */}
          {isSoldOut && (
            <p className="text-red-600 font-semibold mb-2 text-lg">OUT OF STOCK</p>
          )}

          {/* VARIANT SELECTOR */}
          {variantName && (
            <div className="mb-4">
              <h3 className="text-black text-lg font-semibold mb-2">{variantName}</h3>
              <div className="flex gap-3 flex-wrap">
                {variantOptions.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedVariant(option)}
                    className={`px-4 py-2 rounded-md border bg-black ${
                      selectedVariant === option
                        ? "bg-red-600 border-red-500"
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
          <div className="mb-5 whitespace-pre-line">
            <ul className="text-black space-y-2">
              {part.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>

          {/* SPECS */}
          {part.specs && (
            <div className="mb-5">
              <h2 className="text-xl font-semibold mb-1 text-black">Details</h2>
              <p className="text-black whitespace-pre-line">{part.specs}</p>
              { part.catalogue ?
                <p>
                  <Link href={`${part.catalogue}`} target="_blank" rel="noopener noreferrer">
                    <span className="text-red-600 underline">Parts Catalogue</span>
                  </Link> 
                    <span className="text-black">: {part.partNumber.join(", ")}</span>
                </p>
                :
                <p className="text-gray-600 cursor-not-allowed">
                  <span className="underline">Parts Catalogue</span>
                  <span>: {part.partNumber.join(", ")}</span>
                </p>
              }
            </div>
          )}

          {/* SHIPPING */}
          {part.shipping && (
            <div className="mb-5">
              <h2 className="text-xl font-semibold mb-1 text-black">Shipping</h2>
              <p className="text-black whitespace-pre-line">{part.shipping[0]}</p>
            </div>
          )}

          {/* QUANTITY */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-1 text-black">Quantity</h3>

            <div className="flex items-center w-32 border border-gray-400 rounded-md overflow-hidden">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-10 h-10 flex items-center justify-center text-xl text-black hover:bg-gray-200 cursor-pointer"
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
                className="w-10 h-10 flex items-center justify-center text-xl text-black hover:bg-gray-200 cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-blue-600">Earn Skyline (SKYLN) on this purchase</p>
            <p className="text-gray-400">SKYLN earned is based on your order total.</p>
          </div>

          {/* ADD TO CART */}
          <button
            disabled={isSoldOut}
            className={`w-full py-3 rounded-md text-lg font-semibold transition cursor-pointer ${
              isSoldOut
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-500 text-white"
            }`}
            onClick={() => {
              if (isSoldOut) return;
              addToCart(part, qty, selectedVariant);
              toast.success("Added to cart!");
            }}
          >
            {isSoldOut ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      </div>

    </div>
  );
}
