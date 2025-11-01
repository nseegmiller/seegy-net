import Head from 'next/head'

export default function Header({ title }) {
  return (
    <Head>
      <title>seegy.net</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Head>
  )
}
