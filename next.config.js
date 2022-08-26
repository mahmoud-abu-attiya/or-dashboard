/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'cookie',
            key: 'log',
            value: 'true',
          },
        ],
        permanent: false,
        destination: '/dashboard',
      },
      {
        source: '/:path((?!$).*)',
        has: [
          {
            type: 'cookie',
            key: 'log',
            value: "false",
          },
        ],
        permanent: false,
        destination: '/',
      },
      // super redirctions
      {
        source: '/employees/:path*',
        has: [
          {
            type: 'cookie',
            key: 'state',
            value: "super_admin",
          },
        ],
        permanent: false,
        destination: '/dashboard',
      },
      {
        source: '/customers/:path*',
        has: [
          {
            type: 'cookie',
            key: 'state',
            value: "super_admin",
          },
        ],
        permanent: false,
        destination: '/dashboard',
      },
      // employees redirctions
      {
        source: '/:path((?!employees).*)',
        has: [
          {
            type: 'cookie',
            key: 'state',
            value: "employee",
          },
        ],
        permanent: false,
        destination: '/employees',
      },
    ];
  },
};
