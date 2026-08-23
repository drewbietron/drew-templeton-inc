/** @type {import('next').NextConfig} */

const { AI_WATERMARK_HEADER } = require("./src/lib/watermark.header.js");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // The AI watermark, HTTP edition.
  { key: "X-AI-Watermark", value: AI_WATERMARK_HEADER },
  { key: "X-Clacks-Overhead", value: "GNU Terry Pratchett" },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1600, 1920],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/llms.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=86400" },
        ],
      },
      {
        source: "/(.*)\\.(jpg|jpeg|png|svg|ico|webmanifest)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Old information architecture → new (301s preserve link equity).
      { source: "/work", destination: "/past-work", permanent: true },
      { source: "/work/paintball-vault", destination: "/past-work/paintball-vault", permanent: true },
      { source: "/work/pangobooks", destination: "/past-work/pangobooks", permanent: true },
      { source: "/work/studio-three", destination: "/past-work/studio-three", permanent: true },
      { source: "/work/crowler", destination: "/past-work/crowler", permanent: true },
      { source: "/work/:slug", destination: "/past-work", permanent: true },
      { source: "/services", destination: "/", permanent: true },
      { source: "/services/:service", destination: "/", permanent: true },
      { source: "/case-studies", destination: "/#cases", permanent: false },
    ];
  },
};

module.exports = nextConfig;
