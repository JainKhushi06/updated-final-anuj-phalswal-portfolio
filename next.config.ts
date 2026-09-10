import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'standalone',  <-- Is line ko hata dein agar present ho
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;