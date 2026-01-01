"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import products from "@/data/productData";
import { Product } from "@/types/product";
import { useCart } from "@/app/context/CartContext";
import toast from "react-hot-toast";
import NotFound from "@/app/not-found";
import axios from "axios";
import { generateProductMetadata } from "@/lib/generateProductMetadata";
import { useParams, useRouter } from "next/navigation";


export async function generateMetadata(
  { params } : { params : { slug : string } }
){
  const result = await (params as any);
  return generateProductMetadata({ params: result});
}

const stockCache: Record<string, any> = {};

export default function ProductPage() {

  const router = useRouter();
  const { addToCart } = useCart();
  const params = useParams();
  const slug = params.slug as string;

  const product: Product | undefined = products.find(
  (p) =>
    p.url === slug ||
    p.options?.values.some((opt) => opt.slug === slug)
);


  if (!product) return <NotFound />;

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

  /** VARIANT STATE (OPTIONS) */
  const variantName = product.options?.name ?? null;
  const variantOptions = product.options?.values ?? [];

  

const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
const [qty, setQty] = useState(1);

  /** ----------------------------
   *  STOCK SYSTEM
   * ---------------------------- */
  const [variantsStock, setVariantsStock] = useState<any[]>([]);
const [isSoldOut, setIsSoldOut] = useState(false);


  useEffect(() => {
  const cacheKey = product.title;

  if (stockCache[cacheKey]) {
    setVariantsStock(stockCache[cacheKey]);
    return;
  } 

  axios
    .post("http://localhost:8080/get-stock", {
      url: `/${product.url}`,
    })
    .then((res) => {
      stockCache[cacheKey] = res.data;
      setVariantsStock(res.data);
    })
    .catch(console.error);
}, [product.title]);

useEffect(() => {
  if (!variantsStock.length) return;

  // Product has variants but user has not selected one yet
  if (variantName && !selectedVariant) {
    setIsSoldOut(true); // block add-to-cart
    return;
  }

  // Product has variants and one is selected
  if (variantName && selectedVariant) {
    const variant = variantsStock.find(
      (v) =>
        v.name.trim().toLowerCase() ===
        selectedVariant.trim().toLowerCase()
    );

    setIsSoldOut(!variant || variant.stock <= 0);
    return;
  }

  // Product has NO variants (single-variant product)
  setIsSoldOut(variantsStock[0].stock <= 0);
}, [selectedVariant, variantsStock, variantName]);



useEffect(() => {
  if (!product.options) {
    setSelectedVariant(null);
    return;
  }

  const option = product.options.values.find(
    (opt) => opt.slug === slug
  );

  setSelectedVariant(option?.label ?? null);
}, [slug, product.options]);



  const effectiveVariant =
  selectedVariant ??
  product.options?.values.find((opt) => opt.slug === slug)?.label ??
  null;

  const hasVariants = Boolean(variantName);
  const variantNotSelected = hasVariants && selectedVariant === null;

  
  /** RECOMMENDED ITEMS */
  const recommended = products
    .filter((p) => p.collection === product.collection && p.url !== product.url)
    .slice(0, 3);


  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-white">

      {/* BACK BUTTON */}
      <Link
        href={`/accessories/${product.collection.toLowerCase()}`}
        className="text-black mb-6 inline-block"
      >
        ← Back to {product.collection.charAt(0).toUpperCase() + product.collection.slice(1)}
      </Link>

      {/* BREADCRUMB */}
      <div className="text-sm text-black mb-5">
        <Link href="/" className="text-red-600 underline">Home</Link>
        {" / "}
        <Link href="/accessories" className="text-red-600 underline">Accessories</Link>
        {" / "}
        <Link
          href={`/accessories/${product.collection}`}
          className="text-red-600 underline"
        >
          {product.collection.charAt(0).toUpperCase() + product.collection.slice(1)}
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
              unoptimized
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
              <p className="text-xl font-semibold text-black">${product.sale_price}</p>
              <p className="text-xl line-through text-gray-400">${product.price.toFixed(2)}</p>
              </> 
             
              :
              <>
              <p className="text-xl font-semibold text-black">${product.price.toFixed(2)}</p>
              </>
            
            }
  
          </div>

          {/* SOLD OUT LABEL */}
          {isSoldOut && !variantNotSelected && (
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
                   onClick={() => {
                      router.push(`/accessories/${product.collection}/${option.slug}`);
                    }}
                    className={`px-4 py-2 rounded-md border bg-black ${
                      selectedVariant === option.label
                        ? "bg-red-800 border-red-500"
                        : "border-gray-500 hover:border-gray-300"
                    }`}
                  >
                    {option.label}
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

          {/*

          <div className="mb-5">
            <p className="text-slate-600 text-sm">
              Earn Skyline <span className="font-medium">(SKYLN)</span> automatically with this purchase
            </p>
            <p className="text-gray-400 text-xs mt-1">
              SKYLN rewards are calculated based on your order total.
            </p>
          </div>

          */}


         {/* ADD TO CART */}
        <button
          disabled={isSoldOut || variantNotSelected}
          className={`w-full py-3 rounded-md text-lg font-semibold transition ${
            isSoldOut || variantNotSelected
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-800 hover:bg-red-700 text-white"
          }`}
          onClick={() => {
            if (isSoldOut || variantNotSelected) return;

            addToCart(product, qty, effectiveVariant);
            toast.success("Added to cart!");
          }}
        >
          {variantNotSelected
            ? product.options?.name ?? "Select Option"
            : isSoldOut
            ? "Out of Stock"
            : "Add to Cart"}
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
