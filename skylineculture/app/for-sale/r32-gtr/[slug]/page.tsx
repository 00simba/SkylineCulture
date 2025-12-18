import { generateListingMetadata } from "@/lib/generateListingMetadata";
import { generateListingJsonLd } from "@/lib/generateListingJsonLd";
import ListingDetailPage from "../ListingDetailPage";
import cars from "@/data/carData";

export async function generateMetadata(
  { params }: { params: { slug: string } }
) {
  const result = await (params as any);
  return generateListingMetadata({ params: result });
  
}

export default async function Page(
  { params }: { params: { slug: string } }
) {

  const result = await (params as any);

  const car = cars.find(
    (c) =>
      `${c.year}-${c.color}-${c.trim}-${c.id}`
        .toLowerCase()
        .replace(/\s+/g, "-") === result.slug
  );

  const url = `https://www.skylineculture.com/for-sale/r32-gtr/${result.slug}`
  const jsonLd = car ? generateListingJsonLd(car, url) : null;

  return(
    <>
      {jsonLd && (<script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
      />)
      }
      <ListingDetailPage slug={result.slug} />
    </>
  );
}
