import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {},
  outputFileTracingExcludes: {
    "*": ["./.next/next-server.js.nft.json"],
  },
};

export default nextConfig;