import Head from 'next/head'
import Banner from '../components/Banner'
import Copyright from '../components/Copyright'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ToTo Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Header />
      <Navbar />

      <Banner />
      </main>

      <Footer />
      <Copyright />
    </div>
  )
}
