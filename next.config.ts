import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};
// next.config.js
module.exports = {
  module: {
      rules: [
          {
              test: /\.scss$/,
              use: ['style-loader', 'css-loader', 'sass-loader'],
          
          },
      ],
  },
};
export default nextConfig;
