import products from "@/data/data";
import { notFound } from "next/navigation";

export function generateProductMetadata({ params } : { params: { slug: string }}){

    const slug = params.slug;
    const url = `https://www.skylineculture.com/product/${slug}`;

    const product = products.find((p) => p.url === slug);
    
    if(!product){
        notFound();
    }

    var description = product.description[0].slice(0, 140).replace(/\s+\S*$/, "");
    var image = product.img[0];

    const json = {
        title: `${product.title} – SkylineCulture`,
        description,

        openGraph: {
        title: `${product.title} | SkylineCulture`,
        description,
        url,
        type: "website",
        images: image
            ? [
                {
                url: image,
                width: 1200,
                height: 630,
                alt: product.title,
                },
            ]
            : [],
        },

        twitter: {
        card: "summary_large_image",
        title: product.title,
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
    return json;
}