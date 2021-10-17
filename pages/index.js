import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Tesla Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Tesla Project" />
        <p className="description">
          just do <code>Tesla</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
