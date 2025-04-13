import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'cdn.builder.io',
      'res.cloudinary.com'
    ]
  }
};

export default nextConfig;


