const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript({
  exportPathMap: defaultPathMap => ({
    '/': { page: '/' }
  }),
  staticMarkup: true,
  nextExport: false
})
