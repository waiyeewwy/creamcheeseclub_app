import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/global.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { useEffect } from 'react';
import $ from 'jquery';


import { faFacebook, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export default function Index() {


  return (
    <div>
      <Head>
        <title>creamcheeseclub</title>
        <link rel = "icon" href = "/static/images/home.jpg" type = "image/x-icon" />
       
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
      </Head>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" 
      integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
      
      
      <main className={styles.body}>
        <div id="navbar" className={styles.navbar}>
          <img id="logo" src="/static/images/creamcheeseclub.jpg" alt="" />

          <li><Link href="/index">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/faq">FAQs</Link></li>

          <a href="https://www.instagram.com/creamcheeseclub" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className={styles.ig}/>
          </a>
          
        </div>

        <img className={styles.vidimg} id="vidimg" src="static/images/logo-2.jpg" alt="" />
        


        <div id="content">

            <div id="products">
                <br/>

                <h1 className={`${styles.hometitle} ${styles.center}`} id="ccofbagel"><span className={styles.premium}>PREMIUM.</span> <span className={styles.artisan}>ARTISAN.</span> <span className={styles.handcrafted}>HAND CRAFTED.</span></h1>
                <h3 className={`${styles.homesubtitle} ${styles.center}`} id="ccofbagel">Transforming <span className={styles.ordinary}>Ordinary</span> Moments Into <span className={styles.extraordinary}>Extraordinary</span> Delights.</h3>
    
                    <div id="menu" className={styles.menu}>
                        <div className={`${styles.menu_item} ${styles.menu_item_left}`}>
                            <div className={styles.menu_item_des}>
                                <h1>Garlic & Chives</h1>
                                <p>Aromatic flavors of garlic with mild zest of chives.</p>
                            </div>
                            <img src="static/images/garlic.jpg" alt="" />
                        </div>

                        <br/>
                            
                        <div className={`${styles.menu_item} ${styles.menu_item_left}`}>
                            <div className={styles.menu_item_des}>
                                <h1>Blueberry</h1>
                                <p>Symphony of creamy richness & burst of juicy blueberry goodness.</p>
                            </div>
                            <img src="static/images/blueberry.jpg" alt=""/>
                        </div>

                        <br/>


                        <div className={`${styles.menu_item} ${styles.menu_item_left}`}>
                            
                            <div className={styles.menu_item_des}>
                                <h1>Apricot & Macadamia</h1>
                                <p>Delightful fusion of fruity apricots & buttery crunch of macadamia nuts.</p>
                            </div>      
                            <img src="static/images/apricot.jpg" alt="" />
                        </div>

                        
                        
                    </div>
                

                    <h2 className={`${styles.center} ${styles.ourcc}`}>Our versatile cream cheeses are available in <span className={styles.three}>three</span> sizes and price options, allowing you to choose the perfect fit for your cravings.</h2>

                    <div id="price" className={styles.price}>


                    <img src="static/images/size.jpg" alt="" />
                            

                    <div id="size" className={styles.size}>
                        <div className={styles.eachsize}>
                            <h5>Small</h5>
                            <p>120g<br/>$15</p>
                        </div>

                        <div className={styles.eachsize}>
                            <h5>Medium</h5>
                            <p>300g<br/>$25</p>
                        </div>

                        <div className={styles.eachsize}>
                            <h5 >Large</h5>
                            <p>550g<br/>$40</p>
                        </div>
                    </div>
                            
                </div>
            </div>

        </div>


        <div  className={`row ${styles.footer}`} id="footer" class="row">
            <div className="col-sm-5">
                <h1><srtong>Location</srtong></h1>
                <p>We are currently a small local business, however, with your continuous support, we are looking forward to having a physical store in the near future.</p>
                
                <h1><srtong>Open 24/7</srtong></h1>
                <p>We take great pride in offering you the finest cream cheese in town all day every day, ensuring you never have to worry about finding the perfect spread.</p>
            </div>

            <div className="col-sm-2"></div>

            <div className="col-sm-5">
                <h1><srtong>Contact Us</srtong></h1>
                <p>We welcome you to reach out to us with any requests or feedback you may have. We value your input and look forward to hearing from you.</p>

                <div id="contact">
                  <div id="contact-info" className={styles.contact_info}>
                    <p><FontAwesomeIcon icon={faGoogle} /></p><p>creamcheeseclub00@gmail.com</p>
                  </div>

                  <div id="contact-info" className={styles.contact_info}>
                    <p><FontAwesomeIcon icon={faInstagram} /></p><p>creamcheeseclub</p>
                  </div>

                  <div id="contact-info" className={styles.contact_info}>
                    <p><FontAwesomeIcon icon={faFacebook} /></p><p>cream cheese club</p>
                  </div>

                </div>
            </div>
        </div>

      </main>
        

    </div>
)}
