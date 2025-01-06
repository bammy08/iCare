/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false, // Ensure build-time TypeScript errors are caught
  },
  eslint: {
    ignoreDuringBuilds: false, // Ensure build-time ESLint errors are caught
  },
  reactStrictMode: true, // Enable React strict mode
  swcMinify: true, // Enable SWC minification
};

export default nextConfig;
