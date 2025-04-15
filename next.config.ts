/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // 允许所有域名，生产环境建议限制具体域名
      },
    ],
  },
  // 添加Cloudflare Pages所需的配置
  output: 'standalone',
};

module.exports = nextConfig;
