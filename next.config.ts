import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // 允许所有域名，生产环境建议限制具体域名
      },
    ],
  },
};

export default nextConfig;
