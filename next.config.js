const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://18.138.176.141:8080/api/:path*',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)', // หรือกำหนด path ที่ต้องการ
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // ตั้งค่า CORS origin
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true',
          },
        ],
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
