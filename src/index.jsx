import React from 'react'
import Main from './components/Main'

import styles from './index.block.css'

export class Index extends React.Component {
  render() {
    return (
      <html amp="" lang="en" className={styles.html}>
        <head>
          <title>Johan Stenehall</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
          />
          <meta
            name="description"
            content="A developer building things, currently for Volvo creating new things."
          />
          <link rel="manifest" href="static/manifest.json" />
          <link rel="canonical" href="https://johan.is/" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/safari-pinned-tab.svg"
            color="#000000"
          />
          <meta name="msapplication-TileColor" content="#ffc40d" />
          <meta name="theme-color" content="#ffffff" />

          <meta property="og:image:width" content="1648" />
          <meta property="og:image:height" content="863" />
          <meta
            property="og:description"
            content="A developer building things, currently for Volvo creating new things."
          />
          <meta property="og:title" content="Johan Stenehall" />
          <meta property="og:url" content="https://johan.is" />
          <meta
            property="og:image"
            content="https://johan.is/static/og-image.jpg"
          />
          <link rel="amphtml" href="https://johan.is/amp.html" />
        </head>
        <body className={styles.body}>
          <Main />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              WebFontConfig = {
                google: {
                  families: ['Quattrocento:400', 'Fanwood Text:400']
                }
              }
              (function(d) {
                  var wf = d.createElement('script'), s = d.scripts[0]
                  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
                  wf.async = true
                  s.parentNode.insertBefore(wf, s)
              })(document)

      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {navigator.serviceWorker.register('/sw.js', {scope: './'}).then(registration => {}, err => {})})
      }
      `
            }}
          />
        </body>
      </html>
    )
  }
}

export class Amp extends React.Component {
  render() {
    return (
      <html amp="" lang="en" className={styles.html}>
        <head>
          <title>Johan Stenehall</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
          />
          <meta
            name="description"
            content="A developer building things, currently for Volvo creating new things."
          />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="canonical" href="https://johan.is/" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/safari-pinned-tab.svg"
            color="#000000"
          />
          <meta name="msapplication-TileColor" content="#ffc40d" />
          <meta name="theme-color" content="#ffffff" />

          <meta property="og:image:width" content="1648" />
          <meta property="og:image:height" content="863" />
          <meta
            property="og:description"
            content="A developer building things, currently for Volvo creating new things."
          />
          <meta property="og:title" content="Johan Stenehall" />
          <meta property="og:url" content="https://johan.is" />
          <meta
            property="og:image"
            content="https://johan.is/static/og-image.jpg"
          />

          <link rel="amphtml" href="https://johan.is/" />
          <script async src="https://cdn.ampproject.org/v0.js" />

          <style amp-boilerplate="">{`body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`}</style>
          <noscript>
            <style amp-boilerplate="">{`body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`}</style>
          </noscript>
        </head>
        <body className={styles.body}>
          <Main />
        </body>
      </html>
    )
  }
}
