"use client"

import cars from "@/data/carData";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import NotFound from "@/app/not-found";

export default function ListingDetailPage({ slug } : any) {

  const car = cars.find((c) => `${c.year}-${c.color}-${c.trim}-${c.id}`.toLowerCase() === slug);

  const [index, setIndex] = useState(0);

  // LIGHTBOX
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // EmailJS
  const formRef = useRef<HTMLFormElement | null>(null);
  const [sent, setSent] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mphqx7",
        "template_nxdamx6",
        formRef.current!,
        "tMgSATKzaRQ4LzWTM"
      )
      .then(
        () => {
          setSent(true);
          setFullName("");
          setEmail("");
          setPhone("");
          setMessage("");
        },
        (error) => console.error("EmailJS Error:", error)
      );
  };

  if (!car) {
    return (
      <NotFound/>
    );
  }

  const nextSlide = () => setIndex((i) => (i + 1) % car.img.length);
  const prevSlide = () => setIndex((i) => (i - 1 + car.img.length) % car.img.length);

  // Detect video
  const isVideo = car.img[index].toLowerCase().endsWith(".mov") || car.img[index].toLowerCase().endsWith(".mp4");

  // ESC closes fullscreen
  useEffect(() => {
    
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 overflow-hidden">

      {/* FULLSCREEN LIGHTBOX */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-5 text-white text-4xl"
          >
            ✕
          </button>

          {/* Arrows */}
          <button
            className="absolute left-4 text-white text-7xl"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
          >
            ‹
          </button>

          <button
            className="absolute right-4 text-white text-7xl"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
          >
            ›
          </button>

          {/* MEDIA in LIGHTBOX */}
          {isVideo ? (
            <video
              src={car.img[index]}
              controls
              autoPlay
              className="object-contain max-h-[90vh] w-auto"
            />
          ) : (
            <Image
              src={car.img[index]}
              alt="fullscreen"
              width={1400}
              height={1400}
              className="object-contain max-h-[90vh] w-auto"
            />
          )}
        </div>
      )}

      {/* Breadcrumb */}
      <div className="text-sm text-black mb-5">
        <Link href="/" className="text-red-600 underline">Home</Link> /{" "}
        <Link href="/for-sale" className="text-red-600 underline">Listings</Link> / <Link href="/for-sale/r34-gtr" className="text-red-600 underline">R33 GT-R</Link> /{" "}
        <span className="text-black">{car.year} {car.color} {car.trim}</span>
      </div>

    
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT - MAIN IMAGE */}
        <div>
          <div
            className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-gray-200 cursor-pointer"
            onClick={() => setLightboxOpen(true)}
          >

            {/* MEDIA IN MAIN VIEWER */}
            {isVideo ? (
              <video
                src={car.img[index]}
                className="w-full h-full object-cover"
                muted
                controls
                playsInline
              />
            ) : (
              <Image
                src={car.img[index]}
                alt={car.model}
                fill
                className="object-cover"
              />
            )}

            {car.img.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                  }}
                  className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded-full"
                >
                  ‹
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                  }}
                  className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded-full"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {/* THUMBNAILS */}
          {car.img.length > 1 && (
            <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-none">
              {car.img.map((img, i) => {
                const isThumbVideo = img.toLowerCase().endsWith(".mov") || img.toLowerCase().endsWith(".mp4");

                return (
                  <div
                    key={i}
                    onClick={() => {
                      setIndex(i);
                      setLightboxOpen(true);
                    }}
                    className={`relative w-24 h-20 rounded-md overflow-hidden cursor-pointer border flex-shrink-0 ${
                      index === i ? "border-red-600" : "border-gray-300"
                    }`}
                  >
                    {isThumbVideo ? (
                      <video src={img} className="w-full h-full object-cover" muted />
                    ) : (
                      <Image src={img} alt={`thumb-${i}`} fill className="object-cover" />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* Title */}
          <h1 className="text-2xl font-bold text-black mb-1">
            {car.make} {car.model}
          </h1>

          <h2 className="text-xl font-bold text-black mb-3">{car.price}</h2>

          <div className="space-y-2 text-black">
            <p><span className="font-semibold">Year:</span> {car.year}</p>
            <p><span className="font-semibold">Model:</span> {car.model}</p>
            <p><span className="font-semibold">Trim:</span> {car.trim}</p>
            <p><span className="font-semibold">Mileage:</span> {car.milage}</p>
            <p><span className="font-semibold">Color:</span> {car.color}</p>
            <p><span className="font-semibold">Code:</span> {car.code}</p>
            <p><span className="font-semibold">Location:</span> {car.location}</p>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {car.description}
            </p>
          </div>

          {/* CONTACT FORM */}
          <div className="rounded-lg p-6 bg-gray-100 shadow-md border border-gray-300">

            {sent ? (
              <div className="bg-green-100 text-green-800 border border-green-300 p-4 rounded">
                Your inquiry has been sent! We’ll get back to you within 24 hours.
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold mb-3 text-black">
                  Inquire About This Vehicle
                </h3>

                <p className="text-black mb-4">
                  Want more details? Fill out the form and we’ll contact you within 24 hours.
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">

                  <input type="hidden" name="car_title" value={`${car.year} ${car.make} ${car.model}`} />
                  <input type="hidden" name="car_trim" value={car.trim} />
                  <input type="hidden" name="car_price" value={car.price} />
                  <input type="hidden" name="car_code" value={car.code} />
                  <input type="hidden" name="car_id" value={car.id} />

                  <input type="hidden" name="customer_name" value={fullName} />
                  <input type="hidden" name="customer_email" value={email} />
                  <input type="hidden" name="customer_phone" value={phone} />
                  <input type="hidden" name="customer_message" value={message} />

                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="w-full rounded-md p-3 h-24 bg-white border border-zinc-300"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full rounded-md p-3 h-24 bg-white border border-zinc-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full rounded-md p-3 h-24 bg-white border border-zinc-300"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <textarea
                    name="message"
                    placeholder="Your message..."
                    className="w-full rounded-md p-3 h-24 bg-white border border-zinc-300"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />

                  <button
                    type="submit"
                    className="w-full bg-red-800 text-white py-3 rounded hover:bg-red-700 transition"
                  >
                    Send Inquiry
                  </button>
                </form>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
