"use client";

import Image from "next/image";
import Link from "next/link";
import cars from "@/data/carData";

export default function ListingsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      <div className="text-sm text-black mb-5">
        <Link href="/" className="text-red-600 underline">Home</Link>
        {" / "}
        <span className="text-black">Listings</span>
      </div>

      <h1 className="text-3xl font-bold mb-5 text-black">
        Nissan Skyline GT-R For Sale
      </h1>

      <p className="text-gray-600 mb-10">
        Browse a curated selection of Nissan Skyline models from trusted owners.  
        Every listing is verified for authenticity, giving you confidence while searching  
        for your next Skyline — whether it’s a legendary R32, iconic R33, or the dream R34 GT-R.
      </p>

      {/*

      <h1 className="text-2xl font-bold mb-8 text-black">
       Coming Soon...
      </h1>

      */}


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cars.map((car) => (
          <Link
            key={car.id}
            href={`/for-sale/${car.model.split(' ')[0] + '-' + car.model.split(' ')[1].replace('-', "")}/${car.year}-${car.color}-${car.trim}-${car.id}`.toLowerCase()}
            className="w-full rounded-lg border border-zinc-300 shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative w-full h-56 ">
              <Image
                src={car.img[0]}
                alt={`${car.make} ${car.model}`}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">

              <h2 className="text-xl font-bold">
                {car.year} {car.make} {car.model}
              </h2>

               <p className="text-gray-600 text-sm mt-1">
                {car.code} · {car.trim} · {car.color}
              </p>

              <div className="mt-3 space-y-1 text-sm">
                <p>
                  <span className="font-semibold">Mileage:</span> {car.milage}
                </p>
                <p>
                  <span className="font-semibold">Price:</span> {car.price}
                </p>
              </div>

              <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-zinc-800 transition">
                View Details
              </button>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
