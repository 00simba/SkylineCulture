import SellPage from "./SellPage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell Your Skyline | SkylineCulture",
  description:
    "Submit your Nissan Skyline for sale on SkylineCulture. Reach serious buyers through our verified marketplace and global audience.",
  openGraph: {
    title: "Sell Your Nissan Skyline | SkylineCulture",
    description:
      "List your Nissan Skyline for sale and connect with serious buyers through SkylineCulture’s verified marketplace.",
    url: "https://www.skylineculture.com/sell",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Your Nissan Skyline | SkylineCulture",
    description:
      "Sell your Nissan Skyline through SkylineCulture’s trusted marketplace.",
  },
};


export default function Page(){
    return(
        <>
            <SellPage/>
        </>
    );
}