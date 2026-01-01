"use client";

import { useState } from "react";

type ShippingFormData = {
  firstName: string;
  lastName: string;
  email: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
};

export default function ShippingForm({
  onCalculate,
}: {
  onCalculate: (data: ShippingFormData) => void;
}) {
  const [form, setForm] = useState<ShippingFormData>({
    firstName: "",
    lastName: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "Canada",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isValid =
    form.firstName &&
    form.lastName &&
    form.email &&
    form.address1 &&
    form.city &&
    form.state &&
    form.postalCode &&
    form.country;

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-300 shadow space-y-6 mt-10">

      <h2 className="text-2xl font-bold text-black">
        Shipping Address
      </h2>

      {/* Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="font-medium mb-1 text-black">First Name</label>
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First name"
            className="bg-white rounded-md px-4 py-2 border border-zinc-300"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-1 text-black">Last Name</label>
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last name"
            className="bg-white rounded-md px-4 py-2 border border-zinc-300"
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label className="font-medium mb-1 text-black">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="bg-white rounded-md px-4 py-2 border border-zinc-300"
        />
      </div>

      {/* Address 1 */}
      <div className="flex flex-col">
        <label className="font-medium mb-1 text-black">
          Street Address
        </label>
        <input
          name="address1"
          value={form.address1}
          onChange={handleChange}
          placeholder="Street address"
          className="bg-white rounded-md px-4 py-2 border border-zinc-300"
        />
      </div>

      {/* Address 2 */}
      <div className="flex flex-col">
        <label className="font-medium mb-1 text-black">
          Apartment, Suite, Unit (Optional)
        </label>
        <input
          name="address2"
          value={form.address2}
          onChange={handleChange}
          placeholder="Apt, Suite, etc."
          className="bg-white rounded-md px-4 py-2 border border-zinc-300"
        />
      </div>

      {/* City / State */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="font-medium mb-1 text-black">City</label>
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City"
            className="bg-white rounded-md px-4 py-2 border border-zinc-300"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-1 text-black">
            Province / State
          </label>
          <input
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="ON / CA"
            className="bg-white rounded-md px-4 py-2 border border-zinc-300"
          />
        </div>
      </div>

      {/* Postal / Country */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="font-medium mb-1 text-black">
            Postal Code
          </label>
          <input
            name="postalCode"
            value={form.postalCode}
            onChange={handleChange}
            placeholder="M5V 1A1"
            className="bg-white rounded-md px-4 py-2 border border-zinc-300"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-1 text-black">
            Country
          </label>
          <select
            name="country"
            value={form.country}
            onChange={handleChange}
            className="bg-white rounded-md px-4 py-2 border border-zinc-300"
          >
            <option>Canada</option>
            <option>United States</option>
            <option>International</option>
          </select>
        </div>
      </div>

      {/* Phone */}
      <div className="flex flex-col">
        <label className="font-medium mb-1 text-black">
          Phone (Optional)
        </label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+1 416 000 0000"
          className="bg-white rounded-md px-4 py-2 border border-zinc-300"
        />
      </div>

      {/* Submit */}
      <button
        disabled={!isValid}
        onClick={() => onCalculate(form)}
        className={`w-full py-3 rounded-md text-lg font-semibold transition ${
          isValid
            ? "bg-red-800 hover:bg-red-700 text-white"
            : "bg-zinc-400 text-white cursor-not-allowed"
        }`}
      >
        Calculate Shipping
      </button>
    </div>
  );
}
