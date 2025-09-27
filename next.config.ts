import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages base path
  basePath: "/agentall.ai",

  // Output configuration for static export
  output: "export",

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Trailing slash for GitHub Pages compatibility
  trailingSlash: true,

  // Asset prefix for GitHub Pages
  assetPrefix: "/agentall.ai",
};

export default nextConfig;
