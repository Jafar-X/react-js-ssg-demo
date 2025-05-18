// File: next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable image optimization
  images: {
    domains: ["jsonplaceholder.typicode.com"],
  },
  // Enable static export
  // Uncomment this if you want a fully static export that doesn't need a Node.js server
  /*
  output: 'export',
  // Disable server-side features in export mode
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  */
};

export default nextConfig;
