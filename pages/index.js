import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout />
    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <meta name="description" content="PT Mandjur Sehat Abadi menyediakan berbagai macam obat tradisional dan herbal dengan kualitas terbaik dan informasi akurat" />
    //     <meta name="keywords" content="Obat, Obat tradisional, Herbal, Jamu, Obat China" />
    //     <meta name="viewport" content="width=device-width, minimum-scale=1, maximum-scale=1" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>
  )
}
