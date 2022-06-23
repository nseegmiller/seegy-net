import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>seegy.net</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
