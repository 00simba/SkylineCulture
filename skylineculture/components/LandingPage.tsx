import ProductCard from "@/components/ProductCard";
import data from "@/data/data";
import Hero from "@/components/Hero";
import ListingCard from "./ListingCard";
import cars from "@/data/carData";

export default function LandingPage() {
  return (
    <div className="w-full mb-10">

      <Hero/>

      <h1 className="text-2xl font-bold mt-10 mb-10 text-center mx-auto">Featured Listings</h1>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {cars.slice(0, 3).map((car, i) => (
            <ListingCard key={i} car={car} />
          ))}
        </div>
      </div>

      <h1 className="text-2xl font-bold mt-10 mb-10 text-center">Featured Accessories</h1>

      <div className="grid items-center gap-5 ml-5 mr-5 grid-cols-2 sm:gap-5 sm:ml-10 sm:mr-10 sm:grid-cols-3 md:ml-30 md:mr-30 md:grid-cols-4">
        {data.map(item => (
          item.featured && <ProductCard key={item.id} item={item} />
        ))}
      </div>

      {/* VIEW ACCESSORIES BUTTON */}
      <div className="flex justify-center mt-10">
        <a href="/accessories">
          <button
            className="px-10 py-2 bg-black text-white rounded-md hover:bg-blue-600 transition"
          >
            View Accessories
          </button>
        </a>
      </div>

      

  
    </div>
  );
}
