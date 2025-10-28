import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages base path
  basePath: "/agentall.ai",
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Asset prefix for GitHub Pages
  assetPrefix: "/agentall.ai",
  // Output configuration for static export
  output: "export",
  // Trailing slash for GitHub Pages compatibility
  trailingSlash: true,
  // output: "standalone",
};

export default nextConfig;
