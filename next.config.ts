import type { NextConfig } from "next";

// GitHub Pages serves a project repo under /<repo-name>. The deploy workflow sets
// PAGES_BASE_PATH (empty for a <user>.github.io repo), so local dev runs at "/".
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
