/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // GitHub Pages can't run Next's image optimizer
  },
  // Only needed if NOT using a custom domain — i.e. site lives at
  // https://username.github.io/repo-name/
  basePath: '/repo-name',
  assetPrefix: '/repo-name/',
};

export default nextConfig;