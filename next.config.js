/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: [
      'graphql/__generated__'
    ]
  }
}

module.exports = nextConfig
