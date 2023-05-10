import styles from "../styles/pages/Home.module.scss";
import Link from "next/link";

//import components
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
   return (
      <div>
         <Head>
            <title>Home</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

      <ul>
        <li>
          <Link href="/"><a><li>Home</li></a></Link>
          <Link href="/blog"><a><li>Blog</li></a></Link>
        </li>
      </ul>

         {/* <Header /> */}
         <main className={`${styles.index_page}`}>
            <section className={`${styles.banner_section}`}>
               <img src="../img/home/modern-living.jpg" alt="" />
               <div className={`${styles.banner_text}`}>
                  <h2 className={`${styles.section_title} text_500 text_xxl`}>
                     Bring Serenity to Your Place<br />
                     With Interior Plants</h2>
                  <p>find your dream plant for you home decoration<br /> with us, and we will make it happen.</p>
               </div>
            </section>

            <div className="container">

               <section className={`${styles.mobile_shopping} section_spacing`}>
                  <div className={`${styles.shoppiner_inner}`}>
                     <div className={`${styles.options} col-md-4`}>
                        <img src="../img/home/box-icon1.svg" alt="" />
                        <div className={`${styles.online_option}`}>
                           <h4 className="text_lg">Free Shapping</h4>
                           <p>No charge for each delivery</p>
                        </div>
                     </div>
                     <div className={`${styles.options} col-md-4`}>
                        <img src="../img/home/box-icon2.svg" alt="" />
                        <div className={`${styles.online_option}`}>
                           <h4 className="text_lg">Quick Payment</h4>
                           <p>100% secure payment</p>
                        </div>
                     </div>
                     <div className={`${styles.options} col-md-4`}>
                        <img src="../img/home/box-icon3.svg" alt="" />
                        <div className={`${styles.online_option}`}>
                           <h4 className="text_lg">24/7 Support</h4>
                           <p>Quick support</p>
                        </div>
                     </div>
                  </div>
               </section>

               <section className={`${styles.best_sellar_product} section_spacing`}>
                  <div className={`${styles.left_sec} col-md-4`}>
                     <h3 className="text_xl">Best Seller<br />
                        Product</h3>
                     <Link href="#"><p className="text_md">See all colection &#10509;</p></Link>
                  </div>
                  <div className={`${styles.right_sec} col-md-8`}>
                     <div className={`${styles.product_sec} col-md-4`}>
                        <img src="../img/home/image1.png" alt="" />
                        <div className={`${styles.grey_bg}`}></div>
                        <div className={`${styles.product_detail}`}></div>
                     </div>
                  </div>
               </section>
            </div>
         </main>
         <Footer />
      </div>
   );
}
