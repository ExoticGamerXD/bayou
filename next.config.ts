import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/bayou",
  assetPrefix: "/bayou",
  images: {
    loader: "custom",
    loaderFile: "./lib/imageLoader.ts",
    formats: ["image/webp", "image/avif"],
    remotePatterns: [],
  },
};

export default nextConfig;
