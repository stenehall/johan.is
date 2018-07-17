import React from 'react'
import { Helmet } from 'react-helmet'
import data from '../data'
import styles from './Body.block.css'

export default ({ children }) => (
  <body className={styles.body}>
    <Helmet encodeSpecialCharacters={false}>
      <title>{data.title}</title>
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
      <link rel="canonical" href={data.domain} />
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
      <link rel="manifest" href="/static/site.webmanifest" />
      <meta name="theme-color" content="#ffffff" />

      <meta property="og:image:width" content="1648" />
      <meta property="og:image:height" content="863" />
      <meta
        property="og:image"
        content={`${data.domain}/static/og-image.jpg`}
      />

    <link rel="author" href="humans.txt" />

    <link type="text/plain" rel="author" href={`${data.domain}/humans.txt`} />
    </Helmet>
    {children}
  </body>
)
