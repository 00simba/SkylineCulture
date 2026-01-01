import PartsDetailPage from "../PartsDetailPage";

export const metadata = {
  title: "Parts | SkylineCulture",
  description: "Browse SkylineCulture for Skyline R32, R33, and R34 GT-R NISMO parts",
}

export default async function Page( { params } : { params :  { slug : string}}) {

    const result = await (params as any);

  return(
    <>
      <PartsDetailPage slug={result.slug}/>
    </>
  );
}
