import React from 'react'
import { Helmet } from 'react-helmet'
import data from './data'

import Body from './components/Body'
import Main from './components/Main'

export const Index = () => (
  <Body>
    <Helmet encodeSpecialCharacters={false}>
      <link rel="amphtml" href={`${data.domain}/amp.html`} />
      <meta
        httpEquiv="Content-Security-Policy"
        content="default-src 'self'; img-src 'self'; script-src https://ajax.googleapis.com 'unsafe-inline' 'self'; style-src http://fonts.googleapis.com 'unsafe-inline'; font-src http://fonts.gstatic.com;"
      />
    </Helmet>
    <Main />
    <script
      dangerouslySetInnerHTML={{
        __html: `if ('serviceWorker' in navigator) {window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js', {scope: './'}))}`
      }}
    />
  </Body>
)

export const Amp = () => (
  <Body>
    <Helmet encodeSpecialCharacters={false}>
      <link rel="amphtml" href={data.domain} />
      <script async="async" src="https://cdn.ampproject.org/v0.js" />
      <style amp-boilerplate="">{`
          body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}
          `}</style>
      <noscript>{`
            <style amp-boilerplate="">body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style>
          `}</noscript>
    </Helmet>
    <Main />
  </Body>
)
