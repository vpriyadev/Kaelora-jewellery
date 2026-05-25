import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows images from any HTTPS domain; narrow this down for better security
      },
    ],
    unoptimized: true, // Optional: set to true if you are on a free tier and want to avoid optimization costs
  },
};

export default nextConfig;
