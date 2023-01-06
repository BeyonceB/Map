import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Map from '../components/map'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.text}>Expoline Skytrain Map</div>
        <Map />
      </main>

      <footer className={styles.footer}>
          <span className={styles.logo}>
          © 2023 TransLink, all rights reserved
          </span>
      </footer>
    
    </>
  )
}
