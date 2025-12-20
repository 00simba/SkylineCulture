import PrivacyPolicyPage from "./PrivacyPolicyPage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SkylineCulture",
  description:
    "Read SkylineCulture’s privacy policy to understand how we collect, use, and protect your personal information.",
};

export default function Page(){
  return(
  <>
    <PrivacyPolicyPage/>
  </>);
}