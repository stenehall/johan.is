const fs = require('fs')
const path = require('path')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const uglifycss = require('uglifycss')
const Helmet = require('react-helmet').Helmet

const Pages = require('./docs/bundle')

var uglified = uglifycss.processFiles(
  ['./src/style.css', './docs/bundle.css'],
  {
    maxLineLen: 500,
    expandVars: true
  }
)

const styleTag = key => {
  let styleString = uglified
  // if (key === 'Amp') {
  //   // Because AMP really is so very broken.
  //   styleString += `@font-face {
  //     font-family: 'Cardo';
  //     font-style: normal;
  //     font-weight: 400;
  //     font-display: fallback;
  //     src: local('Cardo'), local('Cardo-Regular'), url(https://fonts.gstatic.com/s/cardo/v9/wlp_gwjKBV1pqhv43IE7225P.woff2) format('woff2');
  //     unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  //   }
  //   @font-face {
  //     font-family: 'Open Sans';
  //     font-style: normal;
  //     font-weight: 400;
  //     font-display: fallback;
  //     src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format('woff2');
  //     unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  //   }`
  // }

  return `<style amp-custom="">${uglified}</style>`
}

Object.keys(Pages).map(key => {
  try {
    const renderedStaticMarkup = ReactDOMServer.renderToStaticMarkup(
      React.createElement(Pages[key])
    )
    const helmet = Helmet.renderStatic()
    const regexp = / data-react-helmet="true"/g

    const html = `<!doctype html>
<html amp="" lang="en" ${helmet.htmlAttributes.toString()}>
  <head>
    ${helmet.title.toString().replace(regexp, '')}
    ${helmet.meta.toString().replace(regexp, '')}
    ${helmet.link.toString().replace(regexp, '')}
    ${helmet.script.toString().replace(regexp, '')}
    ${helmet.style.toString().replace(regexp, '')}
    ${helmet.noscript.toString().replace(regexp, '')}
    ${styleTag(key)}
  </head>
  ${renderedStaticMarkup}
</html>`

    const htmlPath = `docs/${key.toLowerCase()}.html`
    fs.writeFile(path.resolve(htmlPath), html, err => {
      if (err) {
        return console.log(err)
      }
      console.log(`Saving: ${htmlPath}`)
    })
  } catch (error) {
    console.log(`Error: '${error}'\nProperty: '${key}'`)
  }
})
