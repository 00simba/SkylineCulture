"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "@/app/context/CartContext";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accessoriesOpen, setAccessoriesOpen] = useState(false); // NEW
  const [browseOpen, setBrowseOpen] = useState(false); // NEW
  const [partsOpen, setPartsOpen] = useState(false); // NEW
  const logoWidth = 250;
  const logoHeight = 250;

  const accessoriesLinks = [
    { name: "All", href: "/accessories" },
    { name: "Keychains", href: "/accessories/keychains" },
    { name: "Stickers", href: "/accessories/stickers" },
    { name: "Diecasts", href: "/accessories/diecast-cars" },
    { name: "Other", href: "/accessories/other"}
  ];

  const listingsLinks = [
    { id: "listings-0", name: "All", href: "/for-sale"},
    { id: "listings-1", name: "R34 GT-R", href: "/for-sale/r34-gtr"},
    { id: "listings-2", name: "R33 GT-R", href: "/for-sale/r33-gtr"},
    { id: "listings-3",name: "R32 GT-R", href: "/for-sale/r32-gtr"},
  ]

    const partsLinks = [
    { id: "parts-0", name: "NISMO", href: "/parts/nismo"},
  ];

  const navLinks = [
    { name: "Sell", href: "/sell" },
  ];

  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.productQuantity, 0);
  const cloudFrontUrl = 'https://d38opoffv15p79.cloudfront.net/Images';

  return (

    // DESKTOP 
    
    <header className="sticky w-full bg-black top-0 left-0 z-50 relative select-none">

      {/* ANNOUNCEMENT BAR */}
      <div className="w-full bg-zinc-800 text-white text-sm text-center py-2">
        Free USA/Canada shipping on part orders over <span className="font-semibold">$250+</span>
      </div>

      <div className="hidden lg:flex flex-row max-w-6xl mx-auto px-6 h-25 items-center justify-between">

        <Link href="/" className="flex items-center gap-2">
          <Image
            src= {`${cloudFrontUrl}/public/logo.webp`}
            alt="SkylineCulture"
            width={logoWidth}
            height={logoHeight}
            className="object-contain"
          />
        </Link>

        <nav className="flex items-center gap-8 text-lg font-medium text-white">

          <div className="relative group lg:block hidden">
          <Link href="/for-sale">
            <button className="hover:text-zinc-300 transition cursor-pointer">
              Browse
            </button>
          </Link>
  

          <div className="absolute left-0 mt-2 w-30 bg-white text-black rounded-md shadow-lg 
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  transition-all duration-200 overflow-hidden">
              {listingsLinks.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="block px-4 py-2 text-sm hover:bg-gray-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

        

          <div className="relative group lg:block hidden">
          <Link href={'/parts'}>
            <button  className="hover:text-zinc-300 transition cursor-pointer">
              Parts
            </button>
          </Link>

      
          <div className="absolute left-0 mt-2 w-30 bg-white text-black rounded-md shadow-lg 
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                          transition-all duration-200 overflow-hidden">
            {partsLinks.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="block px-4 py-2 text-sm hover:bg-gray-200"
              >
                {item.name}
              </Link>
            ))}

          </div>
        </div>

        {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-zinc-300 transition"
            >
              {link.name}
            </Link>
          ))}


<div className="relative group lg:block hidden">
  <Link href={'/accessories'}>
    <button  className="hover:text-zinc-300 transition">
      Accessories
    </button>
  </Link>
  
  <div className="absolute left-0 mt-2 w-30 bg-white text-black rounded-md shadow-lg 
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  transition-all duration-200 overflow-hidden">
    {accessoriesLinks.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        className="block px-4 py-2 text-sm hover:bg-gray-200"
      >
        {item.name}
      </Link>
    ))}
  </div>
</div>
 <Link
    href="/contact"
    className="hover:text-zinc-300 transition"
  >
    Contact
  </Link>
        </nav>

        <Link href="/cart" className="relative">
  <FiShoppingCart className="text-2xl hover:text-zinc-300 transition text-white" />

  {cartCount > 0 && (
    <span className="
      absolute -top-2 -right-2 
      bg-red-800 text-white 
      text-xs font-semibold 
      w-5 h-5 flex items-center justify-center 
      rounded-full shadow
    ">
      {cartCount}
    </span>
  )}
</Link>
      </div>


<div className="hidden lg:hidden md:flex flex-col">

  <div className="w-full flex max-w-6xl mx-auto h-25 items-center justify-around">

    <div></div>

    <Link href="/" className="flex items-center gap-2">
      <div className="flex-none">
        <Image
          src={`${cloudFrontUrl}/public/logo.webp`}
          alt="SkylineCulture"
          width={logoWidth}
          height={logoHeight}
          priority
          className="object-contain"
          unoptimized
        />
      </div>
    </Link>

    <Link href="/cart" className="relative">
  <FiShoppingCart className="text-white text-2xl hover:text-zinc-300 transition" />

  {cartCount > 0 && (
    <span className="
      absolute -top-2 -right-2 
      bg-red-800 text-white 
      text-xs font-semibold 
      w-5 h-5 flex items-center justify-center 
      rounded-full shadow
    ">
      {cartCount}
    </span>
  )}
</Link>


  </div>
  
  {/* TABLET */}

  <div className="flex pb-5 justify-center">
    <nav className="flex text-white items-center gap-8 text-lg font-medium">

      <div className="relative">
        <button
          onClick={() => {setBrowseOpen(!browseOpen); setAccessoriesOpen(false); setPartsOpen(false)}}
          className="hover:text-zinc-300 transition"
        >
          Browse ▾
        </button>

        {browseOpen && (
          <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-30">
            {listingsLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm hover:bg-gray-200"
                onNavigate={() => setBrowseOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="relative">
        <button
          onClick={() => {setPartsOpen(!partsOpen); setBrowseOpen(false); setAccessoriesOpen(false)}}
          className="hover:text-zinc-300 transition"
        >
          Parts ▾
        </button>

        {partsOpen && (
          <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-30">
            {partsLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm hover:bg-gray-200"
                onNavigate={() => setPartsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
      
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="hover:text-zinc-300 transition"
        >
          {link.name}
        </Link>
      ))}

      <div className="relative">
        <button
          onClick={() => {setAccessoriesOpen(!accessoriesOpen); setBrowseOpen(false); setPartsOpen(false)}}
          className="hover:text-zinc-300 transition"
        >
          Accessories ▾
        </button>

        {accessoriesOpen && (
          <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-30">
            {accessoriesLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm hover:bg-gray-200"
                onNavigate={() => setAccessoriesOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      

       <Link
          href="/contact"
          className="hover:text-zinc-300 transition"
        >
          Contact
        </Link>

    </nav>
  </div>
</div>


      <div className="md:hidden px-4 h-20 flex items-center justify-between">

        <button onClick={() => setMenuOpen(true)} className="text-white">
          <HiOutlineMenu className="text-3xl" />
        </button>

        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Image
            src={`${cloudFrontUrl}/public/logo.webp`}
            alt="SkylineCulture"
            width={logoWidth}
            height={logoHeight}
            priority
            className="object-contain"
          />
        </Link>

        <Link href="/cart" className="relative">
  <FiShoppingCart className="text-white text-2xl" />

  {cartCount > 0 && (
    <span className="
      absolute -top-2 -right-2 
      bg-red-800 text-white 
      text-xs font-semibold 
      w-5 h-5 flex items-center justify-center 
      rounded-full shadow
    ">
      {cartCount}
    </span>
  )}
</Link>

    </div>
        
       {/* MOBILE */}

      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setMenuOpen(false)}>
          <div
            className="absolute left-0 top-0 w-64 h-full bg-black shadow-xl p-6 flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => {setMenuOpen(false); setAccessoriesOpen(false); setBrowseOpen(false); setPartsOpen(false)}} className="text-white mb-4">
              <HiOutlineX className="text-3xl" />
            </button>

            <Link
                href="/"
                className="text-white text-xl font-medium hover:text-zinc-300 transition"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Home
            </Link>

            <div>
              <button
                onClick={() => {setBrowseOpen(!browseOpen); setAccessoriesOpen(false); setPartsOpen(false)}}
                className="text-white text-xl font-medium hover:text-zinc-300 transition"
              >
                Browse ▾
              </button>

              {browseOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {listingsLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => {{setMenuOpen(false); setAccessoriesOpen(false); setBrowseOpen(false)}}}
                      className="text-white text-lg hover:text-zinc-300 transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => {setPartsOpen(!partsOpen); setBrowseOpen(false); setAccessoriesOpen(false)}}
                className="text-white text-xl font-medium hover:text-zinc-300 transition"
              >
                Parts ▾
              </button>

              {partsOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {partsLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => {{setMenuOpen(false); setAccessoriesOpen(false); setBrowseOpen(false); setPartsOpen(false)}}}
                      className="text-white text-lg hover:text-zinc-300 transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
                href="/sell"
                className="text-white text-xl font-medium hover:text-zinc-300 transition"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Sell
            </Link>


  
            
            <div>
              <button
                onClick={() => {setAccessoriesOpen(!accessoriesOpen); setBrowseOpen(false); setPartsOpen(false)}}
                className="text-white text-xl font-medium hover:text-zinc-300 transition"
              >
                Accessories ▾
              </button>

              {accessoriesOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {accessoriesLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => {setMenuOpen(false); setAccessoriesOpen(false); setBrowseOpen(false); setPartsOpen(false);}}
                      className="text-white text-lg hover:text-zinc-300 transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

             <Link
                href="/contact"
                className="text-white text-xl font-medium hover:text-zinc-300 transition"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Contact
              </Link>

              <Link
                href="/track-order"
                className="text-white text-xl font-medium hover:text-zinc-300 transition"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Track Order
              </Link>
        </div>
      </div>
      )}
    </header>
  );
}
