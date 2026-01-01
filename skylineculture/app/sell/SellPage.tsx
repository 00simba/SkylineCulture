"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function SellPage() {
  const [images, setImages] = useState<File[]>([]);
  const [preview, setPreview] = useState<string[]>([]);
  const [imageError, setImageError] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeFee, setAgreeFee] = useState(false);
  const [checkboxError, setCheckboxError] = useState("");

  const [carForm, setCarForm] = useState({
    make: "Nissan Skyline",
    model: "",
    trim: "",
    year: "",
    color: "",
    mileage: "",
    vin: "",
    price: "",
    description: "",
  });

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  // ----------------- IMAGE UPLOAD -----------------
  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files) return;

    const newFiles = Array.from(files);
    const combinedFiles = [...images, ...newFiles].slice(0, 20);
    setImages(combinedFiles);

    const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
    const combinedPreviews = [...preview, ...newPreviews].slice(0, 20);
    setPreview(combinedPreviews);

    setImageError("");
  }

  function removeImage(index: number) {
    setPreview((prev) => prev.filter((_, i) => i !== index));
    setImages((prev) => prev.filter((_, i) => i !== index));
  }

  // ----------------- FORM SUBMIT -----------------
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (images.length === 0) {
      setImageError("Please upload at least one image.");
      return;
    }

    if (!agreeTerms || !agreeFee) {
      setCheckboxError("You must agree to both checkboxes before submitting.");
      return;
    }

    setCheckboxError("");

    // Build formData
    const formData = new FormData();
    formData.append("form", JSON.stringify({ car: carForm, contact }));
    images.forEach((img) => formData.append("images", img));

    let uploadRes;

    try {
      uploadRes = await fetch("https://skylineculture-api.onrender.com/sell-car", {
        method: "POST",
        body: formData,
      });
    } catch (err) {
      console.error("UPLOAD FAILED:", err);
      alert("Network error uploading listing. Please try again.");
      return;
    }

    if (!uploadRes.ok) {
      console.error("SERVER ERROR:", await uploadRes.text());
      alert("Upload failed. Please try again.");
      return;
    }

    let data: any;

    try {
      data = await uploadRes.json();
    } catch (err) {
      console.error("INVALID JSON FROM SERVER:", err);
      alert("Server returned invalid response.");
      return;
    }

    console.log("BACKEND RESPONSE:", data);

    if (!data.success || !data.images) {
      alert("Upload failed. Try again.");
      return;
    }

    const imageUrls = data.images;
    console.log("CLOUDFRONT URLS:", imageUrls);

    // Send email with correct URLs
    emailjs.send(
      "service_2mphqx7",
      "template_nxdamx6",
      {
        car_details: JSON.stringify(carForm, null, 2),
        contact_details: JSON.stringify(contact, null, 2),
        image_urls: imageUrls.join("\n"),
      },
      "tMgSATKzaRQ4LzWTM"
    );

    alert("Your listing has been submitted! We will review it shortly.");

    // Reset form
    setImages([]);
    setPreview([]);

    setCarForm({
      make: "Nissan Skyline",
      model: "",
      trim: "",
      year: "",
      color: "",
      mileage: "",
      vin: "",
      price: "",
      description: "",
    });

    setContact({
      name: "",
      email: "",
      phone: "",
      location: "",
    });

    setAgreeTerms(false);
    setAgreeFee(false);
  }

  // ----------------- UI -----------------
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-sm text-black mb-5">
        <Link href="/" className="text-red-600 underline">
          Home
        </Link>{" "}
        / <span>Sell</span>
      </div>

      <h1 className="text-3xl font-bold text-black mb-5">List Your Skyline</h1>

      <p className="text-gray-600 mb-6">
        Sell your Skyline with confidence. Your listing will be featured on
        <span className="font-semibold"> SkylineCulture</span> — a leading Nissan Skyline page established in{" "}
        <span className="font-semibold">2016</span> with over
        <span className="font-semibold"> 430,000 followers</span>.
        <br />
        <br />
        Reviewed within 24–48 hours.
      </p>

      <form onSubmit={handleSubmit} className="bg-gray-100 rounded-lg p-8 shadow-md space-y-8">
        {/* CAR DETAILS */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-4">Car Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ["Model", "model"],
              ["Trim", "trim"],
              ["Year", "year"],
              ["Color", "color"],
              ["Mileage", "mileage"],
            ].map(([label, field]) => (
              <div key={field}>
                <label className="text-sm font-medium text-gray-700">{label}</label>
                <input
                  required
                  type={field === "year" ? "number" : "text"}
                  placeholder={label}
                  value={(carForm as any)[field]}
                  className="w-full bg-white rounded p-3 mt-1"
                  onChange={(e) => setCarForm({ ...carForm, [field]: e.target.value })}
                />
              </div>
            ))}

            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-700">VIN / Chassis Code</label>
              <input
                required
                type="text"
                placeholder="BNR34-401489"
                value={carForm.vin}
                className="w-full bg-white rounded p-3 mt-1"
                onChange={(e) => setCarForm({ ...carForm, vin: e.target.value })}
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-700">Asking Price (USD)</label>
              <input
                required
                type="number"
                value={carForm.price}
                className="w-full bg-white rounded p-3 mt-1"
                onChange={(e) => setCarForm({ ...carForm, price: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-4">Description</h2>
          <textarea
            required
            value={carForm.description}
            className="w-full bg-white rounded p-4 h-32"
            placeholder="Condition, mods, service history, etc."
            onChange={(e) => setCarForm({ ...carForm, description: e.target.value })}
          />
        </div>

        {/* UPLOAD IMAGES */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-4">Upload Media</h2>
          <p className="text-gray-600 mb-3">
            Upload up to <strong>20 images and videos</strong>.
          </p>

          <input
            required
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full p-2 bg-white rounded"
          />

          {imageError && <p className="text-red-600 text-sm mt-2">{imageError}</p>}

          {preview.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
              {preview.map((src, i) => (
                <div key={i} className="relative w-full h-32 bg-gray-200 rounded overflow-hidden group">
                  <Image src={src} alt={`preview-${i}`} fill className="object-cover" />

                  <button
                    type="button"
                    onClick={() => removeImage(i)}
                    className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-4">Contact Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ["Full Name", "name"],
              ["Email", "email"],
              ["Phone Number", "phone"],
              ["Location", "location"],
            ].map(([label, field]) => (
              <div key={field}>
                <label className="text-sm font-medium text-gray-700">{label}</label>
                <input
                  required
                  type={field === "email" ? "email" : "text"}
                  placeholder={label}
                  value={(contact as any)[field]}
                  className="w-full bg-white rounded p-3 mt-1"
                  onChange={(e) => setContact({ ...contact, [field]: e.target.value })}
                />
              </div>
            ))}
          </div>
        </div>

        {/* AGREEMENTS */}
        <div className="space-y-4">
          <label className="flex items-start gap-3 text-black">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="mt-1"
            />
            <span>
              I agree to the{" "}
              <Link href="/terms-and-services" className="text-red-600 underline">
                Terms & Services
              </Link>
              .
            </span>
          </label>

          <label className="flex items-start gap-3 text-black">
            <input
              type="checkbox"
              checked={agreeFee}
              onChange={(e) => setAgreeFee(e.target.checked)}
              className="mt-1"
            />
            <span>
              I acknowledge that SkylineCulture charges a one-time, non-refundable listing fee of $39 USD to publish a vehicle for sale once approved.
            </span>
          </label>

          {checkboxError && <p className="text-red-600 text-sm">{checkboxError}</p>}
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full bg-black text-white py-4 rounded-lg text-lg font-semibold hover:bg-red-600 transition"
        >
          Submit Listing Request
        </button>
      </form>
    </div>
  );
}
