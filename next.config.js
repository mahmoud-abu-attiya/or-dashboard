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
        source: '/dashboard',
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
      {
        source: '/clients',
        has: [
          {
            type: 'cookie',
            key: 'log',
            value: 'false',
          },
        ],
        permanent: false,
        destination: '/',
      },
      {
        source: '/clients/:id',
        has: [
          {
            type: 'cookie',
            key: 'log',
            value: 'false',
          },
        ],
        permanent: false,
        destination: '/',
      },
      {
        source: '/profile',
        has: [
          {
            type: 'cookie',
            key: 'log',
            value: 'false',
          },
        ],
        permanent: false,
        destination: '/',
      },
      {
        source: '/staff',
        has: [
          {
            type: 'cookie',
            key: 'log',
            value: 'false',
          },
        ],
        permanent: false,
        destination: '/',
      },
      {
        source: '/add-new-client',
        has: [
          {
            type: 'cookie',
            key: 'log',
            value: 'false',
          },
        ],
        permanent: false,
        destination: '/',
      },
    ];
  },
};
