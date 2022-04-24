/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.traction.one"],
  },
  async redirects() {
    return [
      {
        source: '/pokemon/0',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
