import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ item } : { item: Product }) {
  return (
    <Link href={`/product/${item.url}`} className="block cursor-pointer">
      <div>
        <Image
          src={item.img[0]}
          alt={item.title}
          width={500}
          height={500}
          className="rounded-md object-contain w-full h-full"
        />

        <h2 className="mt-3 text-lg font-semibold">{item.title}</h2>

        <div className="flex items-center gap-2 mt-1">
          <span className="text-gray-500 text-lg line-through">
            ${item.price}
          </span>
          <span className="text-blue-600 text-lg font-bold">
            ${item.sale_price}
          </span>
        </div>
      </div>
    </Link>
  );
}
