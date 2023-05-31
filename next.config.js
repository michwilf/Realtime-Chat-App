/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  env: {
    NEXTAUTH_SECRET: "VMM96XqrG77#tep",
  },
};

module.exports = nextConfig;