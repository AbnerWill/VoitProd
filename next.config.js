module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://54.162.88.62/api/:path*',
        },
      ]
    },
};
