/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove assetPrefix and basePath if you're not using them
}

module.exports = nextConfig