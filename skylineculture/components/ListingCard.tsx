import Image from "next/image";
import Link from "next/link";
import { Car } from "@/types/car";

export default function ListingCard({ car }: { car: Car }) {
  return (
    <div className="w-full rounded-lg border border-gray-300 bg-white shadow-md overflow-hidden hover:shadow-lg transition">

      <div className="relative w-full h-56">
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

        <Link href={`/listings/${car.id}`} className="block mt-4">
          <button className="w-full bg-black text-white py-2 rounded-md hover:bg-blue-600 transition">
            View Details
          </button>
        </Link>

      </div>
    </div>
  );
}
