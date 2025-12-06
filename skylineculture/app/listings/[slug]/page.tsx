"use client";

import { useParams } from "next/navigation";
import cars from "@/data/carData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ListingDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const car = cars.find((c) => c.id === slug);

  const [index, setIndex] = useState(0);

  if (!car) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-bold">Listing Not Found</h1>
      </div>
    );
  }

  const nextSlide = () => setIndex((i) => (i + 1) % car.img.length);
  const prevSlide = () =>
    setIndex((i) => (i - 1 + car.img.length) % car.img.length);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* Breadcrumb */}
      <div className="text-sm text-black mb-5">
        <Link href="/" className="text-black">Home</Link> /{" "}
        <Link href="/listings" className="text-black">Listings</Link> /{" "}
        <span className="text-black">{car.make} {car.model}</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-black mb-2">
        {car.year} {car.make} {car.model}
      </h1>

      <p className="text-gray-600 mb-10">{car.trim}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* IMAGE CAROUSEL */}
        <div>
          <div className="relative w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden bg-gray-200">
            <Image
              src={car.img[index]}
              alt={car.model}
              fill
              className="object-contain"
            />

            {/* Left Arrow */}
            {car.img.length > 1 && (
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded-full"
              >
                ‹
              </button>
            )}

            {/* Right Arrow */}
            {car.img.length > 1 && (
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded-full"
              >
                ›
              </button>
            )}
          </div>

          {/* Thumbnail Row */}
          {car.img.length > 1 && (
            <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
              {car.img.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`relative w-24 h-16 rounded-md overflow-hidden cursor-pointer border ${
                    index === i ? "border-blue-600" : "border-gray-300"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`thumb-${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT INFO PANEL */}
        <div className="space-y-6">

          {/* PRICE */}
          <h2 className="text-3xl font-bold text-black">{car.price}</h2>

          {/* DETAILS */}
          <div className="space-y-2 text-black">
            <p><span className="font-semibold">Year:</span> {car.year}</p>
            <p><span className="font-semibold">Mileage:</span> {car.milage} km</p>
            <p><span className="font-semibold">Color:</span> {car.color}</p>
            <p><span className="font-semibold">Trim:</span> {car.trim}</p>
            <p><span className="font-semibold">Chassis Code:</span> {car.code}</p>
          </div>

          {/* INQUIRY BOX */}
          <div className="border rounded-lg p-6 bg-white shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-black">
              Inquire About This Vehicle
            </h3>

            <p className="text-gray-600 mb-4">
              Want more details? Fill out the form below and we’ll contact you within 24 hours.
            </p>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded p-3"
                required
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded p-3"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded p-3"
              />

              <textarea
                className="w-full border rounded p-3 h-24"
                placeholder="Your message..."
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded hover:bg-blue-600 transition"
              >
                Send Inquiry
              </button>

            </form>
          </div>

        </div>
      </div>

    </div>
  );
}
