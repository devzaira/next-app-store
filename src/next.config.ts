import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Remove standalone output for Vercel deployment
  // output: 'standalone', // Only needed for Docker, not Vercel
  
  // Disable turbopack experimental features for better compatibility
  // experimental: {
  //   turbo: {
  //     rules: {
  //       '*.svg': {
  //         loaders: ['@svgr/webpack'],
  //         as: '*.js',
  //       },
  //     },
  //   },
  // },
  
  images: {
    // Use remotePatterns instead of domains (domains is deprecated)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  
  // Ensure TypeScript checking during build
  typescript: {
    // Don't fail build on type errors in development
    ignoreBuildErrors: false,
  },
  
  // Ensure ESLint checking during build
  eslint: {
    // Don't fail build on ESLint errors in development
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;