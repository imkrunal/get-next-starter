import "./env.mjs";

/** @type {import('next').NextConfig} */
const config = {
  transpilePackages: ["@repo/ui"],
  reactStrictMode: true,
};

export default config;
