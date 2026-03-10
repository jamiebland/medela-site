import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: "/resources",
        destination: "/learning-resources",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
