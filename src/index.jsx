import React from 'react'
import { Helmet } from 'react-helmet'

import Body from './components/Body'
import Main from './components/Main'

export const Index = () => (
  <Body>
    <Helmet encodeSpecialCharacters={false}>
      <link rel="amphtml" href="https://johan.is/amp.html" />
      <meta
        httpEquiv="Content-Security-Policy"
        content="default-src 'self'; img-src 'self'; script-src https://ajax.googleapis.com 'unsafe-inline' 'self'; style-src http://fonts.googleapis.com 'unsafe-inline'; font-src http://fonts.gstatic.com;"
      />
    </Helmet>
    <Main />
    <script
      dangerouslySetInnerHTML={{
        __html: `
      // WebFontConfig = {
      //   google: {
      //     families: ['Quattrocento:400', 'Fanwood Text:400']
      //   }
      // };
  
      // (d => {
      //     var wf = d.createElement('script'), s = d.scripts[0]
      //     wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
      //     wf.async = true
      //     s.parentNode.insertBefore(wf, s)
      // })(document)

      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js', {scope: './'}).then(registration => {}, err => {}))
      }
    `
      }}
    />
  </Body>
)

export const Amp = () => (
  <Body>
    <Helmet encodeSpecialCharacters={false}>
      <link rel="amphtml" href="https://johan.is/" />
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
