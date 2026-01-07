import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.filestackcontent.com", // actual host after redirect
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", //  For Unsplash images
      },
    ],
  },
};

export default nextConfig;