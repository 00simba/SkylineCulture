import { generateProductMetadata } from "@/lib/generateProductMetadata";
import ProductPage from "../ProductPage";

export async function generateMetadata({ params } : { params : { slug : string } }){
  const result = await (params as any);
  return generateProductMetadata( { params: result });
}

export default async function Page( { params } : { params: { slug : string}} ){
  const result = await (params as any);
  return(<ProductPage slug={result.slug}/>)
}

