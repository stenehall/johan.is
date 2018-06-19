import React from 'react'
import Main from './components/Main'

import styles from './index.block.css'

export class Amp extends React.Component {
  render() {
    return (
      <html amp="" lang="en" className={styles.html}>
        <head>
          <title>Johan Stenehall</title>
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

          <link rel="amphtml" href="https://johan.is/" />
          <script async src="https://cdn.ampproject.org/v0.js" />

          <style amp-boilerplate="">{`
body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}
`}</style>
          <style
            amp-custom=""
            dangerouslySetInnerHTML={{
              __html: `@font-face {
          font-family: 'Cardo';
          font-style: normal;
          font-weight: 400;
          font-display: fallback;
          src: local('Cardo'), local('Cardo-Regular'), url(https://fonts.gstatic.com/s/cardo/v9/wlp_gwjKBV1pqhv43IE7225P.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          font-display: fallback;
          src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }`
            }}
          />
          <noscript>
            <style amp-boilerplate="">{`
body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}
`}</style>
          </noscript>
        </head>
        <body className={styles.body}>
          <Main />
        </body>
      </html>
    )
  }
}
