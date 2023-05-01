/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
    },
  },

  swcMinify: true,

  reactStrictMode: true,
};

module.exports = nextConfig;