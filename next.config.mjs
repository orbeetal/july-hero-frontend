/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["july-heroes-backend.orbeetal.com"], // ✅ Add allowed domain
  },
  env: {
     SERVER: process.env.SERVER,
    },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "july-heroes-backend.orbeetal.com",
      },
    ],
  },
};

export default nextConfig;
