import TrackOrderPage from "./TrackOrderPage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track Your Order | SkylineCulture",
  description:
    "Track the status of your SkylineCulture order using your order number and email.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page(){
    return(
    <>
        <TrackOrderPage/>
    </>
    );
}