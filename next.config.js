/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    node_env: process.env.NODE_ENV,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
