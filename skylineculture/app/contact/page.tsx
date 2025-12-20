import ContactPage from "./ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | SkylineCulture",
  description:
    "Get in touch with SkylineCulture for vehicle listings, merchandise inquiries, or general questions.",
};

export default function Page(){
  return(
  <>
    <ContactPage/>
  </>
  );
}