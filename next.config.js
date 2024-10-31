/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.tomsoderlund.com']
  }
}

module.exports = nextConfig
