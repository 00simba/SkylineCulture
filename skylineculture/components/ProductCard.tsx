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
          {item.sale_price  ?
              <>
              <p className="text-xl font-semibold text-blue-600">${item.sale_price}</p>
              <p className="text-xl line-through text-gray-400">${item.price.toFixed(2)}</p>
              </>    
              :
              <>
              <p className="text-xl font-semibold text-blue-600">${item.price.toFixed(2)}</p>
              </>
            
            }
        </div>
      </div>
    </Link>
  );
}
