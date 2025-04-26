/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: false, // <--- TRÈS IMPORTANT !!
  },
  typescript: {
    ignoreBuildErrors: true, // ⬅️ Ignore tous les problèmes de type au build
  },
  reactStrictMode: true,
};

export default nextConfig;
