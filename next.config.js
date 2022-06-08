/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "gateway.ipfscdn.io",]
  },
};

module.exports = nextConfig;
