import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    domains: ['images.prismic.io', 'i.vimeocdn.com'], // add external image domains
  },
};

export default nextConfig;
