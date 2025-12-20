import TermsPage from "./TermsPage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Services | SkylineCulture",
  description:
    "Review SkylineCulture’s terms and services governing the use of our marketplace, listings, and website.",
};

export default function Page(){
    return(
    <>
        <TermsPage/>
    </>
    );
}