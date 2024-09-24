/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // Remove this line if you're not using external domains for images
  },
}

module.exports = nextConfig