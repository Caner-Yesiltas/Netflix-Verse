/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  env: {
    NEXT_PUBLIC_TMDB_API_KEY: process.env.TMDB_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
