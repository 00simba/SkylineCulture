import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d38opoffv15p79.cloudfront.net",
        port: "",
        pathname: "/**"
      }
    ]
  },
};

export default nextConfig;
