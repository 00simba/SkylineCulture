"use client";

import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const [country, setCountry] = useState("Select Country");
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (country === "Select Country") {
      alert("Please select a shipping country.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        cartItems: cart,
        selected: country,
      };

      const res = await axios.post(
        "https://skylineculture-api.onrender.com/create-checkout-session",
        payload,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept",
          },
        }
      );

      window.location.href = res.data.url;
    } catch (err) {
      console.error(err);
      alert("Checkout error — please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-black mb-4">
          Your Cart is Empty
        </h1>
        <Link href="/accessories" className="text-red-600 underline">
          Browse Items →
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-black">Your Cart</h1>

      <div className="space-y-6">
        {cart.map((item, i) => (
          <div
            key={i}
            className="flex gap-4 border p-4 rounded-md bg-white"
          >
            <div className="relative w-28 h-28">
              <Image
                src={item.productImage}
                alt={item.productName}
                fill
                className="object-cover rounded"
              />
            </div>

            <div className="flex-1">
              <h2 className="text-lg font-semibold text-black">
                {item.productName}
              </h2>

              <p className="text-gray-600 text-sm">
                Variant:{" "}
                {item.productVariant !== "null"
                  ? item.productVariant
                  : "Default"}
              </p>

              <p className="text-gray-800 font-semibold mt-1">
                Qty: {item.productQuantity}
              </p>

              <p className="text-black-600 font-bold mt-1">
                ${item.productPrice}
              </p>

              <button
                onClick={() =>
                  removeFromCart(item.productId, item.productVariant)
                }
                className="text-red-600 text-sm mt-2 underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Country selector */}
      <div className="mt-8">
        <label className="text-black font-semibold">
          Shipping Country
        </label>
        <select
          className="border p-3 rounded w-full mt-2"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option>Select Country</option>
          <option>Canada</option>
          <option>USA</option>
          <option>International</option>
        </select>
      </div>

      {/* Checkout */}
      <button
        className="w-full mt-6 bg-black text-white py-4 rounded-lg font-semibold hover:bg-red-600 transition disabled:opacity-50"
        onClick={handleCheckout}
        disabled={loading}
      >
        {loading ? "Processing..." : "Proceed to Checkout"}
      </button>
    </div>
  );
}
