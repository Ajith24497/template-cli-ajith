/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // async rewrites() {
  //   return {
  //     afterFiles: [{ source: "/(.*)", destination: "/" }],
  //   };
  // },
};

module.exports = nextConfig;
