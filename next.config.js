/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // Important: return the modified config
  //   return config;
  // },
};

const withCSS = require("@zeit/next-css");
module.exports = withCSS();

module.exports = nextConfig;
