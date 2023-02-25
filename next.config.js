/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
}

module.exports = nextConfig
