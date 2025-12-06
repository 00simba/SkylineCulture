

import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProductNotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-28">
      <h1 className="text-3xl font-extrabold text-black mb-3">
        Product Not Found
      </h1>

      <p className="text-gray-600 max-w-md mb-8">
        The product you’re looking for doesn’t exist or may no longer be available.
      </p>

      <Link
        href="/accessories"
        className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold 
                   hover:bg-blue-600 transition"
      >
        Browse Accessories
      </Link>
    </div>
  );
}
