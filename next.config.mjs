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
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
      },
    ],
  },
};

export default nextConfig;
