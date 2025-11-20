import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://ojzligl3yrtkdify.public.blob.vercel-storage.com/**')],
  },
};

export default nextConfig;
