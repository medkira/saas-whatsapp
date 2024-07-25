/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['https://www.brother.eu'],
    
    remotePatterns: [
      {
        hostname: 'fouoflrwnuelvlfgsats.supabase.co',
      }
    ],
  },

  async redirects() {
    return [
      {
        source: '/products',
        destination: '/products/machines/1',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
