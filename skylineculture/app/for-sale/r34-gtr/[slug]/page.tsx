import { generateListingMetadata } from "@/lib/generateListingMetadata";
import ListingDetailPage from "./ListingDetailPage";

export async function generateMetadata(
  { params }: { params: { slug: string } }
) {
  return generateListingMetadata({ params });
}

export default function Page(
  { params }: { params: { slug: string } }
) {
  return <ListingDetailPage params={params} />;
}
