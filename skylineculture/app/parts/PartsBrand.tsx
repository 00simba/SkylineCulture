import Image from "next/image";
import Link from "next/link";

type PartsBrandProps = {
  brand: string;
  description: string;
  href: string;
  logoUrl: string;
};

export default function PartsBrand({
  brand,
  description,
  href,
  logoUrl,
}: PartsBrandProps) {
  return (
    <div
      className="
        rounded-xl
        shadow
        border border-gray-300
        p-8
        text-center
        transition
      "
    >
      {/* LOGO */}
      <div className="flex justify-center mb-6">
        <Image
          src={logoUrl}
          alt={`${brand} logo`}
          width={300}
          height={300}
          className="h-12 md:h-25 w-auto object-contain"
        />
      </div>

      {/* BRAND NAME */}
      <h2 className="text-2xl font-semibold tracking-wide mb-3">
        {brand}
      </h2>

      {/* DESCRIPTION */}
      <p className="text-gray-600 max-w-md mx-auto mb-6">
        {description}
      </p>

      {/* CTA */}
      <Link
        href={href}
        className="
          inline-flex items-center gap-2
          px-6 py-2.5
          rounded-md
          bg-black text-white
          text-sm font-medium
          hover:bg-zinc-800
          transition
        "
      >
        Shop {brand} Parts →
      </Link>
    </div>
  );
}
