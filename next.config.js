/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/react-website' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/react-website' : '',
}

module.exports = nextConfig