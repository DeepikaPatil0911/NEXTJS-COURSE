import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import styles1 from '../styles/home2.module.css'
import Dummy from '@/components/dummy'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Dummy/>
      <Head>
        <title>project 1</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles1.bg}></div>
      <main className={styles.main}>
      
        <div className={styles.heading}>
          <h1>My First Project</h1>
          <div className={styles.img_sec}>
              <img src="/professional.jpg" />
          </div>
          
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        
      </main>
    </>
  )
}
