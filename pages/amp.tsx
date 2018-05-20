import Head from 'next/head'
import Main from '../components/Main'
// import css from '../static/style.css'

export default () => [
  <Head>
    <link rel="amphtml" href="https://johan.is/" />
    <script async src="https://cdn.ampproject.org/v0.js" />

    <style amp-boilerplate="">{`
body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}
`}</style>
    <noscript>
      <style amp-boilerplate="">{`
body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}
`}</style>
    </noscript>
  </Head>,
  <Main />,
  <footer>
    <p>
      <a href="mailto://johan@stenehall.se">johan@stenehall.se</a>
      <br />
    </p>
  </footer>
]
