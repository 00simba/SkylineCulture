import { generateProductMetadata } from "@/lib/generateProductMetadata";
import { generateProductJsonLd } from "@/lib/generateProductJsonLd";
import ProductPage from "../ProductPage";
import products from "@/data/data";

export async function generateMetadata({ params } : { params : { slug : string } }){
  const result = await (params as any);
  return generateProductMetadata( { params: result });
}

export default async function Page( { params } : { params: { slug : string}} ){

  const result = await (params as any);
  const product = products.find((p) => p.url === result.slug);
  const url = `https://skylineculture.com/products/${result.slug}`
  const jsonLd = product ? generateProductJsonLd(product, url) : null;

  return(
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
      <ProductPage slug={result.slug}/>
    </>
  )
}