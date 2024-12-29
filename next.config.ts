import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors:true,
  },
   eslint: {
    // Ignore linting during production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
