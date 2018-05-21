const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript({
  exportPathMap: defaultPathMap => ({
    '/': { page: '/' },
    '/amp': { page: '/amp' }
  }),
  staticMarkup: true,
  nextExport: false
})
