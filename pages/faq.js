import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/global.module.css'

import $ from 'jquery';
import { useEffect } from 'react';
import Accordion from "../components/accordion";


import { faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';






export default function Faq() {



  
      return (
        <div>
            <Head>
                <title>creamcheeseclub.com</title>
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

                    <li><Link href="/home">Home</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/faq">FAQs</Link></li>

                    <a href="https://www.instagram.com/creamcheeseclub" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>

                    
                </div>

                

                <div id="fq" className={styles.fq}>

                    <h1 id="faqtitle" className={`${styles.center} ${styles.faqtitle}`}>Frequently Asked Questions</h1>
                    <img src="static/images/contact.jpg" alt="" id="contactimg" className={styles.faqimg} />



                    

                    <div id="faq" className={styles.faq}>
                        
                        <Accordion title="What sizes of cream cheese do you offer?" 
                        content="Our cream cheese is available in three sizes: small, medium, and large, catering to different needs and preferences." />

                        <Accordion title="How long does the cream cheese stay fresh and what are the storing conditions?" 
                        content="Our cream cheese is made fresh and has a shelf life of approximately 3 weeks. For optimal freshness, it is recommended to 
                        store our cream cheese in a cool area at a temperature below 5 degrees Celsius." />


                        <Accordion title="Do you offer any specialty or limited edition cream cheese flavors?" 
                        content="Yes, we occasionally introduce specialty or limited edition cream cheese flavors to surprise and delight our customers. 
                        Keep an eye out for exciting new offerings!" />

                        <Accordion title="Are your cream cheeses suitable for individuals with dietary restrictions (e.g., lactose-free / nut-free)?" 
                        content="Yes, we understand the importance of catering to dietary restrictions. We offer the options such as lactose-free and nut-free cream 
                        cheeses to accommodate various dietary preferences." />

                        <Accordion title="Can I place a bulk order for events or special occasions?" 
                        content="Certainly! We welcome bulk orders for events or special occasions at discounted prices, ensuring that everyone can savor the 
                        delightful taste of our cream cheese. Please reach out to our customer support team to discuss your specific requirements." />

                        <Accordion title="What are the delivery options and charges for shipping cream cheese?" 
                        content="While we currently do not provide delivery options for shipping cream cheese, we do offer a convenient pick-up option at no additional cost. 
                        You can collect your order directly from our Melbourne CBD, Doncaster, or Point Cook locations, ensuring a hassle-free experience." />


                        <Accordion title="Is there a minimum order requirement for purchasing cream cheese?" 
                        content="There is no minimum order requirement for purchasing cream cheese from our online shop. You can order as little or as much as you desire." />

                        <Accordion title="How far in advance should I place my order to ensure availability?" 
                        content="To ensure availability, we recommend placing your cream cheese order at least three days in advance." />

                        <Accordion title="What are the storage recommendations for your cream cheese products?" 
                        content="For optimal freshness, we suggest storing our cream cheese products in the refrigerator. It's best to follow the storage instructions provided with your order." />

                        <Accordion title="Are there any discounts or promotions available for regular customers?" 
                        content="We are thrilled to offer special discounts and promotions to our regular customers. Stay updated on the latest deals and offers by 
                        following us on social media. Keep an eye out for exciting discounts that will make your cream cheese experience even more delightful!" />

                        <Accordion title="Do you offer gift packaging or options for sending cream cheese as a gift?" 
                        content="Yes, we provide gift packaging options for sending cream cheese as a thoughtful present. You can select gift packaging during the ordering process." />

                        <Accordion title="Are the ingredients used in your cream cheeses sourced locally or sustainably?" 
                        content="At our cream cheese shop, we place a high priority on sourcing ingredients locally and sustainably whenever feasible. Supporting local producers 
                        and embracing environmentally friendly practices is at the core of our values. In addition, we are dedicated to using only premium products to ensure the 
                        utmost quality in every bite." />


                        <Accordion title="Are your cream cheese products available across Australia?" 
                        content="Currently, we are only located at Melbourne. We look forward to supplying our products across Australia in the near future." />

                        <Accordion title="How can I contact customer support for any further inquiries or assistance?" 
                        content="If you have any further inquiries or require assistance, our dedicated customer support team is ready to help. You can reach out to us via email or 
                        message our social media account and we'll be delighted to assist you." />


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
                                <p><i className="fa fa-envelope"></i></p><p>creamcheeseclub00@gmail.com</p>
                            </div>

                            <div id="contact-info" className={styles.contact_info}>
                                <p><i className="fa fa-instagram"></i></p><p>creamcheeseclub</p>
                            </div>

                            <div id="contact-info" className={styles.contact_info}>
                            <a href="https://facebook.com">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a><p>cream cheese club</p>
                            </div>
                        </div>

                    </div>
                </div>

            </main>

        </div>

    )
}