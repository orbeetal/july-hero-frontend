/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["julyheroes.orbeetal.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "julyheroes.orbeetal.com",
      },
    ],
  },
  env: {
    SERVER: process.env.SERVER,
  },
};

export default nextConfig;
