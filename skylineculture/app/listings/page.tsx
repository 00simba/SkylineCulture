"use client";

import Link from "next/link";

export default function ListingsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      <div className="text-sm text-black mb-5">
        <Link href="/" className="text-black">Home</Link>
        {" / "}
        <span className="text-black">Listings</span>
      </div>

      <h1 className="text-3xl font-bold mb-8 text-black">
        Own Your Dream
      </h1>

      <p className="text-gray-600 mb-10">
        Browse a curated selection of Nissan Skyline models from trusted owners.  
        Every listing is verified for authenticity, giving you confidence while searching  
        for your next Skyline — whether it’s a legendary R32, iconic R33, or the dream R34 GT-R.
      </p>

      <h1 className="text-2xl font-bold mb-8 text-black">
       Coming Soon...
      </h1>

      {/*

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cars.map((car) => (
          <Link
            key={car.id}
            href={`/listings/${car.id}`}
            className="block bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="relative w-full h-56">
              <Image
                src={car.img[0]}
                alt={`${car.make} ${car.model}`}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <h2 className="text-xl font-semibold text-black">
                {car.year} {car.make} {car.model}
              </h2>
              <p className="text-gray-600">{car.trim}</p>

              <p className="text-gray-800 text-lg mt-2 font-semibold">
                {car.price}
              </p>

              <p className="text-gray-500 text-sm mt-1">
                {car.milage} km • {car.color}
              </p>

              <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-blue-600 transition">
                View Details
              </button>
            </div>
          </Link>
        ))}
      </div>

      */}
    </div>
  );
}
