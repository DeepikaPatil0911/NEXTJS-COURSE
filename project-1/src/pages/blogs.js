import React from 'react'
import styles from '../styles/blog.module.css'
import Dummy from "@/components/dummy";
import Link from 'next/link';

const Blogs = () => {
  return (
    <>
    <Dummy/>
    <main className={styles.main}>
      <div className={styles.blogItem}>
        <Link href={'/blogpost/learn-javascript'}>
        <h3>How to learn NextJs?</h3>
        <p>Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.</p>
        </Link>
      </div>
      <div className={styles.blogItem}>
        <h3>How to learn NextJs?</h3>
        <p>Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.</p>
      </div>
      <div className={styles.blogItem}>
        <h3>How to learn NextJs?</h3>
        <p>Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.</p>
      </div>
    </main>
    </>
    
  )
}

export default Blogs