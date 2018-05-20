import Head from 'next/head'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default () => [
  <Head>
    <link rel="amphtml" href="https://johan.is/amp/" />
  </Head>,
  <Main />,
  <Footer />
]
