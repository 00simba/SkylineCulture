import { generateListingMetadata } from "@/lib/generateListingMetadata";
import ListingDetailPage from "../ListingDetailPage";

export async function generateMetadata(
  { params }: { params: { slug: string } }
) {
  const resolved = await params;
  return generateListingMetadata({ params: resolved });
}

export default async function Page(
  { params }: { params: { slug: string } }
) {
  const resolve = await params;

  return <ListingDetailPage slug={resolve.slug} />;
}
