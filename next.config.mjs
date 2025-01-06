/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable strict TypeScript and ESLint checks for better code quality
  typescript: {
    // Keep this false to ensure build-time TypeScript errors are caught
    ignoreBuildErrors: false,
  },
  eslint: {
    // Ensure build-time ESLint errors are caught
    ignoreDuringBuilds: false,
  },
  // Add other configurations as needed
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
