import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: ".",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
