/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // 允许所有域名，生产环境建议限制具体域名
      },
    ],
    unoptimized: true, // Cloudflare Pages需要此配置
  },
  // 为Cloudflare Pages设置静态导出
  output: 'export',
  
  // 禁用React严格模式以避免开发时的双重渲染
  reactStrictMode: false,
  
  // 优化构建输出
  compress: true,
  poweredByHeader: false,
  
  // 实验性功能
  experimental: {
    optimizePackageImports: ['@heroicons/react'], // 优化特定包的导入
  },
  // 如果你使用了自定义域名，需要添加
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : ''
};

module.exports = nextConfig;
