/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/dashboard/:path*',
        destination: '/:path*', // The :path parameter is used here so will not be automatically passed in the query
      },
    ];
  },
}

module.exports = nextConfig
