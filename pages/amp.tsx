import Head from 'next/head'
import Main from '../components/Main'
import Footer from '../components/Footer'
// import css from '../static/style.css'

export default () => [
  <Head>
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
  </Head>,
  <Main />,
  <Footer />
]
