"use client";

import { useState } from "react";
import Link from "next/link";

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<null | string>(null);

  function handleOrderIdChange(value: string) {
    // Allow only digits
    const digitsOnly = value.replace(/\D/g, "");

    // Limit to 4 digits max
    if (digitsOnly.length <= 4) {
      setOrderId(digitsOnly);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (orderId.length !== 4) {
      setError("Order number must be exactly 4 digits.");
      return;
    }

    setError("");
    setSubmitted(true);

    // Later replace with backend API response
    setStatus("Your order has been shipped and is currently in transit.");
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">

      {/* Breadcrumbs */}
      <div className="text-sm text-black mb-5">
        <Link href="/" className="text-black">Home</Link>
        {" / "}
        <span className="text-black">Track Order</span>
      </div>

      <h1 className="text-3xl font-bold text-black mb-4">Track Your Order</h1>

      <p className="text-gray-700 mb-8">
        Enter your 4-digit order number and email to check the status of your purchase.
      </p>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-6 bg-white border rounded-lg p-8 shadow-md">

        {/* ORDER NUMBER */}
        <div className="flex flex-col">
          <label className="font-medium text-black mb-1">Order Number</label>
          <input
            required
            type="text"
            inputMode="numeric"
            maxLength={4}
            value={orderId}
            onChange={(e) => handleOrderIdChange(e.target.value)}
            placeholder="1234"
            className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-600"
          />
          {error && (
            <p className="text-red-600 text-sm mt-2">{error}</p>
          )}
        </div>

        {/* EMAIL */}
        <div className="flex flex-col">
          <label className="font-medium text-black mb-1">Email</label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition"
        >
          Track Order
        </button>
      </form>

      {/* RESULT */}
      {submitted && (
        <div className="mt-8 p-6 bg-gray-100 border rounded-md">
          <h2 className="text-xl font-semibold text-black mb-2">Order Status</h2>
          <p className="text-gray-700">
            {status}
          </p>
        </div>
      )}
    </div>
  );
}
