import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/global.module.css'

import $ from 'jquery';
import { useEffect } from 'react';
import Accordion from "../components/accordion";


import { faFacebook, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';






export default function Faq() {
  
      return (
        <div>
            <Head>
                <title>creamcheeseclub</title>
                <link rel = "icon" href = "/static/images/home.jpg" type = "image/x-icon" />
            
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />
            </Head>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" 
                integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
                crossOrigin="anonymous"></script>
            
            
            <main className={styles.body}>
                <div className={styles.navbar}>
                    <img id="logo" src="/static/images/creamcheeseclub.jpg" alt="" />

                    <li><Link href="/index">Home</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/faq">FAQs</Link></li>

                    <a href="https://www.instagram.com/creamcheeseclub" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} className={styles.ig} />
                    </a>

                    
                </div>

                

                <div id="fq" className={styles.fq}>

                    <h1 id="faqtitle" className={`${styles.center} ${styles.faqtitle}`}>Frequently Asked Questions</h1>
                    <img src="static/images/contact.jpg" alt="" id="contactimg" className={styles.faqimg} />



                    

                    <div id="faq" className={styles.faq}>
                        
                        <Accordion title="How can I place my order for the cream cheese?" 
                        content="To place an order for our delightful cream cheese, kindly send us a private message via our social media channels. 
                        We'll be more than happy to assist you with the ordering process and answer any questions you may have. 
                        Please note that we are currently upgrading our website's purchase system, and we apologize for any inconvenience caused." />

                        <Accordion title="How long does the cream cheese stay fresh and what are the storing conditions?" 
                        content="Our cream cheese is crafted with freshness in mind and is best enjoyed within 10 days of purchase. 
                        To ensure optimal flavor, please store our cream cheese refrigerated at all times and avoid exposure to moisture." />

                        <Accordion title="What are the delivery options and charges for shipping cream cheese?" 
                        content="Take advantage of our convenient pick-up option near Doncaster, 
                        or enjoy the added convenience of complimentary delivery to Melbourne CBD areas for orders over $70." />


                        <Accordion title="Are your cream cheeses suitable for individuals with dietary restrictions (e.g., lactose-free/nut-free)?" 
                        content="Yes, we understand the importance of catering to dietary restrictions. We offer the options such as lactose-free and nut-free cream 
                        cheeses to accommodate various dietary preferences." />

                        <Accordion title="Are the ingredients used in your cream cheeses sourced locally or sustainably?" 
                        content="At our cream cheese shop, we place a high priority on sourcing ingredients locally and sustainably whenever feasible. Supporting local producers 
                        and embracing environmentally friendly practices is at the core of our values. In addition, we are dedicated to using only premium products to ensure the 
                        utmost quality in every bite." />

                        <Accordion title="Are there any discounts or promotions available for regular customers?" 
                        content="We are thrilled to offer special discounts and promotions to our regular customers. Stay updated on the latest deals and offers by 
                        following us on social media. Keep an eye out for exciting discounts that will make your cream cheese experience even more delightful!" />

                        <Accordion title="Can I place a bulk order for events or special occasions?" 
                        content="Certainly! Celebrate your special occasions with our cream cheese by placing bulk orders at discounted prices. 
                        We invite you to contact us via email to discuss your specific requirements and create a memorable experience for all." />



                    </div>
                </div>



                


                <div className={`row ${styles.footer}`} id="footer">

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

    )
}
