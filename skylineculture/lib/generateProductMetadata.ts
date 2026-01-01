import products from "@/data/productData";
import { notFound } from "next/navigation";

export function generateProductMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  // 1️⃣ Find product by base slug OR variant slug
  const product = products.find(
    (p) =>
      p.url === slug ||
      p.options?.values.some((opt) => opt.slug === slug)
  );

  if (!product) {
    notFound();
  }

  // 2️⃣ Resolve variant (if any)
  const selectedOption =
    product.options?.values.find((opt) => opt.slug === slug) || null;

  // 3️⃣ Build correct URL
  const url = `https://www.skylineculture.com/accessories/${product.collection}/${slug}`;

  // 4️⃣ Title (include variant for SEO clarity)
  const title = selectedOption
    ? `${product.title} – ${selectedOption.label} | SkylineCulture`
    : `${product.title} | SkylineCulture`;

  // 5️⃣ Description
  const description = product.description[0]
    .slice(0, 140)
    .replace(/\s+\S*$/, "");

  const image = product.img[0];

  return {
    title,
    description,

    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : [],
    },

    other: {
      "og:image": image,
      "product:price:amount": (
        product.sale_price ?? product.price
      ).toString(),
      "product:price:currency": "USD",
    },
  };
}
