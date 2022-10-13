import Header from 'components/header'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </>
  )
}

export default Home
