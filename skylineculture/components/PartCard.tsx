import { Part } from "@/types/part";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ item } : { item: Part }) {
  return (
    <Link href={`/parts/${item.brand.toLocaleLowerCase()}/${item.url}`} className="block cursor-pointer">
      <div>
        <div className="relative w-full aspect-square max-w-[500px]">
          <Image
            src={item.img[0]}
            alt={item.title}
            fill
            className="rounded-md object-cover"
            unoptimized
          />
        </div>

        <h2 className="mt-3 text-lg font-semibold">{item.title}</h2>

        <div className="flex items-center gap-2">
          {item.sale_price  ?
              <>
              <p className="text-xl font-semibold text-black-600">${item.sale_price}</p>
              <p className="text-xl line-through text-gray-400">${item.price.toFixed(2)}</p>
              </>    
              :
              <>
              <p className="text-xl font-semibold text-black-600">${item.price.toFixed(2)}</p>
              </>
            }
        </div>
      </div>
    </Link>
  );
}
