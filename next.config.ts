import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static export
  trailingSlash: true,
  images: {
    unoptimized: true, // Disable Image Optimization API for static export
  },
}

export default nextConfig;
