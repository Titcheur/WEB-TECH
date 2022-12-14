import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout.js'

export default function Home() {
  return (
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>La coloc</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenue a la coloc De Big Draancy 
        </h1>

        <p className={styles.description}>
          Edité par Titouan Garreta & Benjamin Guyon
        </p>

        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h2>A propos &rarr;</h2>
            <p>Apprends à connaitre la colocation de big Draancy</p>
          </a>

          <a href="/contact" className={styles.card}>
            <h2>Contacts &rarr;</h2>
            <p>Tu veux contacter les beaux gosses de Draancy ?</p>
          </a>

          <a
            href="/courses"
            className={styles.card}
          >
            <h2>Cours &rarr;</h2>
            <p>Le nombre d'heures séchées par les deux bolosses</p>
          </a>

          
        </div>
      </main>
    </div>
    </Layout>
  )
}
