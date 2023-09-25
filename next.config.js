/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.drewtempleton.com", "pangobooks.com"],
    unoptimized: process.env.NODE_ENV !== "production",
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
