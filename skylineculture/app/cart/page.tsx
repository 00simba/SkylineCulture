import CartPage from "./CartPage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Cart | SkylineCulture",
  description:
    "Review the items in your SkylineCulture shopping cart before checkout.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <CartPage/>
    </>
  );
}
