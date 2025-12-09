// next.config.mjs

/** @type {import('next').NextConfig} */
console.log("CONFIG LOADED >>>>>>>>>");

const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
