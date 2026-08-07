import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
  // Uncomment and change this if deploying to a subpath (e.g. username.github.io/repo-name)
  // basePath: '/GitHub-profile',
};

export default nextConfig;
