"use client";

import { Suspense } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useCart } from "@/app/context/CartContext";

function OrderCompleteContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const { clearCart } = useCart();

  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [orderNumber, setOrderNumber] = useState<number | null>(null);

  useEffect(() => {
    async function handleOrder() {
      try {
        const cart = localStorage.getItem("cart");

        const res = await axios.post(
          "https://skylineculture-api.onrender.com/order-complete",
          { session_id: sessionId, cart }
        );

        setName(res.data.name.split(" ")[0]);
        setOrderNumber(res.data.orderNumber);

        await axios.post(
          "https://skylineculture-api.onrender.com/remove-inventory",
          { orderNumber: res.data.orderNumber, cart }
        );

        clearCart();
        localStorage.clear();
      } catch (err) {
        console.error(err);
      }

      setLoading(false);
    }

    handleOrder();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center py-20">
        <div className="animate-pulse text-2xl mb-10">
          Processing your order...
        </div>
        <a
          href="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Return Home
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto text-center py-16">
      <h1 className="text-3xl font-bold mb-4">
        Thank you for your order {name}!
      </h1>
      <h2 className="text-xl text-gray-700 mb-6">Order #{orderNumber}</h2>

      <p className="text-gray-600">
        Visit the Track Order page for estimated shipping times.
      </p>
      <p className="text-gray-600 mb-6">
        For questions about your order email info@skylineculture.com.
      </p>

      <a
        href="/"
        className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
      >
        Return Home
      </a>
    </div>
  );
}

export default function OrderCompletePage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <OrderCompleteContent />
    </Suspense>
  );
}
