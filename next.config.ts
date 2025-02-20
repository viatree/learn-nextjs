import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config) {
    return config; // No manual CSS loaders needed
  },
};

export default nextConfig;
