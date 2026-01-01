"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-28">
      <h1 className="text-6xl font-extrabold text-black mb-4">404</h1>

      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Page Not Found
      </h2>

      <p className="text-gray-600 max-w-md mb-10">
        The page you’re looking for doesn’t exist or may have been moved.
      </p>

      <Link
        href="/"
        className="bg-black text-white px-8 py-3 rounded-lg text-lg font-semibold 
                   hover:bg-red-800 transition duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
}
