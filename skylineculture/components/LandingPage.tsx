import ProductCard from "@/components/ProductCard";
import data from "@/data/productData";
import partData from "@/data/partsData";
import Hero from "@/components/Hero";
import ListingCard from "./ListingCard";
import cars from "@/data/carData";
import PartCard from "./PartCard";
import Link from "next/link";

export default function LandingPage() {

  const featuredCars = cars.slice(0, 3);
  const featuredIndexes = [0, 2, 4, 5];
  const featuredParts = featuredIndexes.map(i => partData[i]).filter(Boolean);
  return (
    <div className="w-full mb-10">

      <Hero/>

      <h2 className="text-center my-5">
        <span className="inline-block text-black px-8 py-3 text-2xl font-semibold">
          Featured Skylines
        </span>
      </h2>


      <div className="flex justify-center">
        <div
          className={`grid gap-6 justify-items-center max-w-6xl px-2 ${
            featuredCars.length === 1
              ? "grid-cols-1"
              : featuredCars.length === 2
              ? "grid-cols-1 sm:grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {featuredCars.map((car, i) => (
            <ListingCard key={i} car={car} />
          ))}
        </div>
      </div>

      {/* VIEW SKYLINES BUTTON */}
      <div className="flex justify-center mt-5">
        <Link href="/for-sale">
          <h1
            className="mt-4 text-black font-medium underline hover:opacity-80 transition"
          >
            Browse Skylines →
          </h1>
        </Link>
      </div>

      <h2 className="text-center my-5">
        <span className="inline-block text-black px-8 py-3 text-2xl font-semibold">
          NISMO Parts
        </span>
      </h2>

      <div className="max-w-7xl mx-auto">
        <div className="grid items-center gap-5 ml-5 mr-5 grid-cols-2 sm:gap-10 sm:ml-10 sm:mr-10 sm:grid-cols-3 md:ml-30 md:mr-30 md:grid-cols-4">
          {featuredParts.map(item => (
            item.featured && <PartCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* VIEW ACCESSORIES BUTTON */}
      <div className="flex justify-center mt-5 ">
        <Link href="/parts">
          <h1
            className="mt-4 text-black font-medium underline hover:opacity-80 transition"
          >
            Browse Parts →
          </h1>
        </Link>
      </div>
      

      <h2 className="text-center my-5 ">
        <span className="inline-block text-black px-8 py-3 text-2xl font-semibold">
          Car Accessories
        </span>
      </h2>

      <div className="max-w-7xl mx-auto">
        <div className="grid items-center gap-5 ml-5 mr-5 grid-cols-2 sm:gap-5 sm:ml-10 sm:mr-10 sm:grid-cols-3 md:ml-30 md:mr-30 md:grid-cols-4">
          {data.map(item => (
            item.featured && <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* VIEW ACCESSORIES BUTTON */}
      <div className="flex justify-center mt-5">
        <Link href="/accessories">
          <h1
            className="mt-4 text-black font-medium underline hover:opacity-80 transition"
          >
            Browse Accessories →
          </h1>
        </Link>
      </div>

  
    </div>
  );
}
