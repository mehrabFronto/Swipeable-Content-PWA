/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  cacheOnFrontEndNav: true,
  disable: process.env.NODE_ENV === "development",
  reloadOnOnline: true,
  scope: "/app",
  maximumFileSizeToCacheInBytes: 5000000, // Max file size to cache (in bytes)
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withPWA(nextConfig);
