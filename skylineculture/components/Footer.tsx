import Image from "next/image";
import Link from "next/link";

const cloudFrontUrl = 'https://d38opoffv15p79.cloudfront.net/Images';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white mt-20 pt-12 pb-8">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6">
        
        <div>
          <Image
            src={`${cloudFrontUrl}/public/logo.webp`}
            alt="SkylineCulture Logo"
            width={160}
            height={50}
            className="mb-4"
          />
          <p className="text-gray-400 text-sm leading-relaxed">
            SkylineCulture — your home for Nissan Skyline accessories,
            collectibles, and marketplace listings.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Shop</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/for-sale" className="hover:text-white">Browse</Link></li>
            <li><Link href="/accessories" className="hover:text-white">Accessories</Link></li>
            <li><Link href="/stickers" className="hover:text-white">Stickers</Link></li>
            <li><Link href="/diecast-cars" className="hover:text-white">Diecast Models</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link href="/track-order" className="hover:text-white">Track Order</Link></li>
            <li><Link href="/terms-and-service" className="hover:text-white">Terms & Service</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/skylineculture" target="_blank" rel="noreferrer">
              <Image src="/icons/instagram.svg" alt="Instagram" width={26} height={26} />
            </a>
            <a href="https://www.facebook.com/nskylineculture/" target="_blank" rel="noreferrer">
              <Image src="/icons/facebook.svg" alt="Facebook" width={26} height={26} />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6">
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} SkylineCulture. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
