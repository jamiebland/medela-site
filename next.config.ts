import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.ycodeapp.com",
      },
    ],
  },
};

export default nextConfig;
