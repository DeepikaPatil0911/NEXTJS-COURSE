import React from 'react'
import Link from "next/link";
import styles from "../styles/components/Header.module.scss"

const Header = () => {
   return (

      <div className={`${styles.main_header}`}>
         <div className="container">
            <ul>
               <li>
                  <Link href="/"><a>Home</a></Link>
               </li>
               <li><Link href="/blog"><a>Blog</a></Link></li>
            </ul>
         </div>
      </div>
   )
}

export default Header
