import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};
// next.config.js
module.exports = {
  // ...
  css: {
    loaderOptions: {
      css: {
        modules: true,
      },
    },
  },
};
export default nextConfig;
