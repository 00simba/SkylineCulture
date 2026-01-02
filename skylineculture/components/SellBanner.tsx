import Link from "next/link";

export default function SellBanner(){
    return(<>

    <div className="border-t border-gray-300 bg-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div>
          <h2 className="text-2xl font-bold text-black">
            Looking To Sell Your Skyline?
          </h2>
          <p className="text-gray-700 mt-2 max-w-xl">
            List your R32, R33, or R34 Skyline with SkylineCulture. We connect sellers with serious buyers through a trusted enthusiast marketplace.
          </p>
        </div>
    
        <div className="flex gap-4">
          <Link
            href="/sell"
            className="px-6 py-3 bg-black text-white rounded-md font-semibold hover:bg-zinc-800 transition"
          >
            List Skyline →
          </Link>
    
          <Link
            href="/for-sale"
            className="px-6 py-3 border border-zinc-300 text-black rounded-md font-semibold hover:bg-zinc-200 transition"
          >
            View Listings
          </Link>
        </div>
    
      </div>
    </div>
    
    
    
    </>)
}