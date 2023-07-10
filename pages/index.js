import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/global.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { useEffect } from 'react';
import $ from 'jquery';


import { faFacebook, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





export default function Index() {

  useEffect(() => {
    $(document).ready(function() {

      var gifh = $('#gifh')[0];
      var gifc = $('#gifc')[0];

      var navbar = $('#navbar');
      var content = $('#content');
      var vidimg = $('#vidimg');
      var vidimgver = $('#vidimgver');
      var footer = $('#footer');
  

      // hide content initially
      navbar.hide();
      content.hide();
      vidimg.hide();
      vidimgver.hide();
      footer.hide();
  

      setTimeout(() => {
        // show the content and navbar after sliding down
        gifh.style.display = 'none';
        gifc.style.display = 'none';

        navbar.slideDown(1000);

        // determine the screen width
        var screenWidth = window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
        
        if (screenWidth >= 800) {
          // wide screen
          vidimg.show();
          vidimgver.hide();
        } else {
          // smaller screen
          vidimg.hide();
          vidimgver.show();
        }

        content.slideDown(1000);
        footer.show();
  
        // scroll to the content below
        $('html, body').animate({
          scrollTop: $('#content').offset().top
        }, 1000);

      }, 9500);

      // Resize event listener to handle screen width changes
      $(window).resize(function() {
      var screenWidth = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      if (screenWidth >= 800) {
        // Wide screen
        if (!vidimg.is(':visible')) {
          vidimg.show();
          vidimgver.hide();
        }
      } else {
        // Smaller screen
        if (!vidimgver.is(':visible')) {
          vidimg.hide();
          vidimgver.show();
        }
      }
    });


    });
  }, []);


  return (
    <div>
      <Head>
        <title>creamcheeseclub.com</title>
        <link rel = "icon" href = "/static/images/home.jpg" type = "image/x-icon" />
       
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
      </Head>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" 
      integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
      
      
      <main className={styles.body}>
        <div id="navbar" className={styles.navbar}>
          <img id="logo" src="/static/images/creamcheeseclub.jpg" alt="" />

          <li><Link href="/home">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/faq">FAQs</Link></li>

          <a href="https://www.instagram.com/creamcheeseclub" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className={styles.ig}/>
          </a>
          
        </div>



        <img id="gifh" className={`${styles.video} ${styles.gifhorizontal}`} src="static/images/ccc.gif" alt="" />

        <img id="gifc" className={`${styles.video} ${styles.gifvertical}`} src="static/images/cccver.gif" alt="" />



        <img className={styles.vidimgver} id="vidimgver" src="static/images/cccver.jpg" alt="" />

        <img className={styles.vidimg} id="vidimg" src="static/images/vidimg.jpg" alt="" />
        

        <div id="content">

            <div id="products">
                <br/>
                    <h1 className={styles.center} id="ccofbagel">THE <span className={styles.cream}>CREAM</span> <span className={styles.cheese}>CHEESE</span> TO YOUR BAGEL</h1>
                    
                    <div id="menu" className={styles.menu}>
                        <div className={`${styles.menu_item} ${styles.menu_item_left}`}>
                            <div className={styles.menu_item_des}>
                                <h1>Garlic & Chives</h1>
                                <p>Aromatic flavors of garlic with mild zest of chives.</p>
                            </div>
                            <img src="static/images/matcha.jpg" alt="" />
                        </div>
                        <br/>


                        <div className={`${styles.menu_item} ${styles.menu_item_left}`}>
                            
                            <div className={styles.menu_item_des}>
                                <h1>Apricot & Macadamia</h1>
                                <p>Delightful fusion of fruity apricots & buttery crunch of macadamia nuts.</p>
                            </div>      
                            <img src="static/images/matcha.jpg" alt="" />
                        </div>

                        
                        <br/>
                            
                        <div className={`${styles.menu_item} ${styles.menu_item_left}`}>
                            <div className={styles.menu_item_des}>
                                <h1>Blueberry</h1>
                                <p>Symphony of creamy richness & burst of juicy blueberry goodness.</p>
                            </div>
                            <img src="static/images/matcha.jpg" alt=""/>
                        </div>
                    </div>
                

                    <h2 className={`${styles.center} ${styles.ourcc}`}>Our versatile cream cheeses are available in <span className={styles.three}>three</span> sizes and <span className={styles.three}>three</span> price options, allowing you to choose the perfect fit for your cravings and budget.</h2>

                    <div id="price" className={styles.price}>


                    <img src="static/images/size4.jpg" alt="" />
                            

                    <div id="size" className={styles.size}>
                        <div className={styles.eachsize}>
                            <h5>Small</h5>
                            <p>120g<br/>$15</p>
                        </div>

                        <div className={styles.eachsize}>
                            <h5>Medium</h5>
                            <p>300g<br/>$30</p>
                        </div>

                        <div className={styles.eachsize}>
                            <h5 >Large</h5>
                            <p>550g<br/>$45</p>
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
