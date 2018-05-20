import Document, { Head } from 'next/document'
import style from '../components/style'

console.log(style)

const minifyCss = string =>
  string
    .replace(/\/\*.+?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/: /g, ':')
    .replace(/; /g, ';')
    // .replace(/, /g, ',')
    .replace(/ {/g, '{')
    .replace(/{ /g, '{')
    .replace(/ }/g, '}')
    .replace(/} /g, '}')

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

          <style
            amp-custom=""
            dangerouslySetInnerHTML={{
              __html: minifyCss(style)
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
