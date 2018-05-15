import Document, { Head } from 'next/document'

export default class MyDocument extends Document {
  constructor(props) {
    super(props)
    const { __NEXT_DATA__ } = props
    __NEXT_DATA__.strictHTML = true
  }

  render() {
    const { html } = this.props
    return (
      <html amp="" lang="en">
        <Head>
          <title>Johan Stenehall</title>
          <meta charSet="utf-8" />
          <link rel="canonical" href="/" />
          <meta name="viewport" content="width=device-width,minimum-scale=1" />
          <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
          <meta name="description" content="A developer building things, currently for Volvo creating new things." />
          <link rel="canonical" href="https://stenehall.se" />
          <link rel="manifest" href="static/manifest.json" />

          <style amp-boilerplate="">{`body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`}</style>
          <noscript>
            <style amp-boilerplate="">{`body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`}</style>
          </noscript>
          <script async src="https://cdn.ampproject.org/v0.js" />
          <style
            amp-custom=""
            dangerouslySetInnerHTML={{
              __html: `
    @font-face {
      font-family: 'Fira Mono';
      font-style: normal;
      font-weight: 400;
      font-display: fallback;
      src: local('Fira Mono Regular'), local('FiraMono-Regular'), url(https://fonts.gstatic.com/s/firamono/v6/N0bX2SlFPv1weGeLZDtgJv7Ss9XZYQ.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
      font-family: 'Fira Mono';
      font-style: normal;
      font-weight: 700;
      font-display: fallback;
      src: local('Fira Mono Bold'), local('FiraMono-Bold'), url(https://fonts.gstatic.com/s/firamono/v6/N0bS2SlFPv1weGeLZDtondvHnvfUS5NBBA.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* Milligram */

    *,
    *:after,
    *:before {
      box-sizing: inherit;
    }

    html {
      box-sizing: border-box;
      font-size: 75%;
      /* 62.5%; */
    }

    body {
      color: #606c76;
      font-family: 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
      font-size: 1.6em;
      font-weight: 300;
      letter-spacing: .01em;
      line-height: 1.6;
    }

    a {
      color: #000;
      text-decoration: none;
    }

    a:focus,
    a:hover {
      color: #606c76;
    }

    p {
      margin-top: 0;
    }

    h1,
    h2,
    h3 {
      font-weight: 300;
      letter-spacing: -.1rem;
      margin-bottom: 2.0rem;
      margin-top: 0;
    }

    h1 {
      font-size: 4.6rem;
      line-height: 1.2;
    }

    h2 {
      font-size: 3.6rem;
      line-height: 1.25;
    }

    h3 {
      font-size: 2.8rem;
      line-height: 1.3;
    }

    /* Custom css */

    body {
      font: 140% monaco, 'Open Sans', "helvetica neue", helvetica, sans-serif;
      color: #444;
      padding: 4rem 2rem;
    }

    h1 a,
    h2 a,
    h3 a {
      color: #000;
    }

    header h1 {
      position: relative;
      margin-bottom: 20px;
      font-size: 28px;
      font-family: 'Fira Mono', monospace;
      font-weight: 700;
    }

    header h1:after {
      border: 2px solid currentColor;
      position: absolute;
      left: -4px;
      bottom: -16px;
      width: 30px;
      content: ';
    }

    h2,
    h3 {
      font-family: 'Fira Mono', monospace;
      font-weight: 500;
    }

    h2,
    h3 {
      font-size: 2rem;
      margin-top: 2em;
      margin-bottom: 0;
    }

    h3 {
      margin-top: 0;
      font-size: 1.6rem;
    }

    time {
      display: block;
      margin-bottom: 1rem;
      font-size: 0.8em;
    }

    h2:after {
      content: "_"
    }

    p a {
      color: #000;
      text-decoration: underline;
      text-underline-position: under;
    }

    .inline {
      font-size: 1.2rem;
      padding: 0;
    }

    .inline li {
      display: inline;
    }

    .inline li:after {
      content: ", "
    }

    .inline li:last-child:after {
      content: ""
    }

    main,
    footer {
      max-width: 700px;
      margin: 0 auto;
    }

    main {
      display: block;
    }

    header {
      grid-column: 1;
      grid-row: 1;
    }

    .contact {
      grid-column: 2;
      grid-row: 1;
    }

    .main {
      grid-column: 1;
      grid-row: 2;
    }

    aside {
      grid-column: 2;
      grid-row: 2;
    }

    .sub-grid h2 {
      grid-column: 1 / span 2
    }

    ul,
    address {
      margin: 1rem 0 3rem;
    }

    address {
      text-style: normal;
      font-style: inherit;
    }

    footer {
      margin-top: 3rem;
    }

    @media screen and (min-width: 900px) {
      main,
      footer {
        margin: 0 auto 0 100px;
      }
    }

    @media screen and (min-width: 650px) {
      main {
        display: grid;
        grid-template-columns: 1fr 200px;
        grid-gap: 20px;
      }
      .sub-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
      }
    }
    `
            }}
          />
        </Head>
        <body>
          <div id="__next" dangerouslySetInnerHTML={{ __html: html }} />
        </body>
      </html>
    )
  }
}
