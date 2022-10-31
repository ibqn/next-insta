import Feed from 'components/feed'
import Header from 'components/header'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="next insta app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Feed />
    </>
  )
}

export default Home
