module.exports = {
  async rewrites() {
    return [
      {
        source: '/blog/:slug*',
        destination: `http://localhost:4000/blog/:slug*`,
      },
    ]
  },
}
