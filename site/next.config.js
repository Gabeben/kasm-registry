/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Bendee Workspaces',
    description: 'bendee workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://Gabeben.github.io/kasm-registry/',
    contactUrl: 'https://github.com/Gabeben/',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
