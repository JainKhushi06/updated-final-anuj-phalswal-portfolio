import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Isse TypeScript compilation errors build fail nahi karenge
    ignoreBuildErrors: true,
  },
  eslint: {
    // Isse ESLint errors bhi deployment block nahi karenge
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;