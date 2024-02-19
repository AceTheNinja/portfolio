/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev.to',
      },
    ],
  },
}

module.exports = nextConfig
