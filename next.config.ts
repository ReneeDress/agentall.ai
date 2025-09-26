import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages base path
  basePath: process.env.GITHUB_PAGES === "true" ? "/agentall.ai" : "",

  // Output configuration for static export
  output: process.env.GITHUB_PAGES === "true" ? "export" : undefined,

  // Disable image optimization for static export
  images:
    process.env.GITHUB_PAGES === "true"
      ? {
          unoptimized: true,
        }
      : undefined,

  // Trailing slash for GitHub Pages compatibility
  trailingSlash: process.env.GITHUB_PAGES === "true" ? true : undefined,

  // Asset prefix for GitHub Pages
  assetPrefix: process.env.GITHUB_PAGES === "true" ? "/agentall.ai" : "",
};

export default nextConfig;
