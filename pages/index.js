import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mint Ventures AI Demo!</title>
        <link rel="icon" href="/MV_favicon.svg" />
      </Head>

      <main>
        <Header title="Welcome to Mint Ventures AI Article Generator Demo!" />
        <p className="description">
          Type a topic and I will write the article! Get started by clicking on the bot icon.
        </p>
      </main>

      <Footer />
    </div>
  )
}
