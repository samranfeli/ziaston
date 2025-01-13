import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.baghzeytoon.ir',
        port: '',
        search: '',
      },
    ],
  },
  env: {
    BLOG_END_POINT:"https://www.baghzeytoon.ir"
  }
};

export default nextConfig;
