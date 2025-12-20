import OrderCompletePage from "./OrderCompletePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Complete | SkylineCulture",
  description:
    "Your order has been successfully completed. Thank you for shopping with SkylineCulture.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page(){
    return(
    <>
        <OrderCompletePage/>
    </>
    );
}