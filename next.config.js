/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/drops',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
