"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import heroData from "@/data/heroData"

export default function Hero() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // --- Swipe detection ---
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const minSwipeDistance = 50; // required distance

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const distance = touchEndX.current - touchStartX.current;

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) {
      // swipe right → previous slide
      setIndex((prev) => (prev - 1 + heroData.length) % heroData.length);
    } else {
      // swipe left → next slide
      setIndex((prev) => (prev + 1) % heroData.length);
    }

    startTimer();
  };

  // --- Auto slide timer ---
  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroData.length);
    }, 4000);
  };

  useEffect(() => {
  startTimer();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleDotClick = (i: number) => {
    setIndex(i);
    startTimer();
  };

  return (
    <div
      className="relative w-full h-[55vh] md:h-[60vh] overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {heroData.map((slide, i) => (
          <div key={i} className="relative w-full h-full flex-shrink-0">
            <Image
              src={slide.img}
              alt={slide.title}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
              <h1 className="text-3xl md:text-5xl font-semibold mb-4 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl mb-6 opacity-90">
                {slide.subtitle}
              </p>

              <a
                href={slide.href}
                className="px-6 py-3 bg-black hover:bg-red-600 text-white rounded-md text-lg font-medium transition"
              >
                {slide.button}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {heroData.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
