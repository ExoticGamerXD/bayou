import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/bayou",
  assetPrefix: "/bayou",
  images: {
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
    remotePatterns: [],
  },
};

export default nextConfig;
