import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Form from '@/components/Form'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Login • Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Form/>
      </main>
      <Footer></Footer>
    </>
  )
}

