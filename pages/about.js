import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/global.module.css'

import $ from 'jquery';

import { faFacebook, faInstagram, faGoogle} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function About() {

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
                

                <h1 id="ccofbagelright" className={styles.ccofbagelright}>THE <span className={styles.cream}>CREAM</span> <span className={styles.cheese}>CHEESE</span> TO YOUR BAGEL</h1>

                <div id="aboutus" className={styles.aboutus}>
                                 
                    <img src="static/images/about.jpg" alt="" className={styles.aboutimg} />
                        
                    <div id="aboutdesc" className={styles.aboutdesc}>
                        <p>Introducing J and E, two adventurous university students living on the 
                            edge, embarking on a quest through local supermarkets in search of the perfect cream cheese. J wasn't a fan 
                            of cheese at the start, but E's <strong className={styles.passion}>passion for cream cheese</strong> was undeniable, resulting in their grocery trolley 
                            cart always filled with this delectable spread.</p> 

                        <p>After trying numerous store-bought creamcheeses, they felt something 
                            was amiss - the intensity, portion, or flavors just didn't hit the mark. That's when <strong className={styles.inspiration}>inspiration</strong> struck! They decided to <strong className={styles.own}>create their very own 
                                cream cheese</strong>, infused with their unique touch.</p>
                            
                        <p>Yes, you heard it right. It's their cream cheese, crafted with their 
                            desired <strong className={styles.intensity}>intensity</strong>, <strong className={styles.portions}>portions</strong>, <strong className={styles.flavors}>flavors</strong>, and <strong className={styles.love}>overflowing love</strong>! (Unbiased opinion... well, maybe just a little biased) It stands among the best, finest, 
                            and <strong className={styles.awesome}>most awesome cream cheeses</strong> they've ever tasted. Now, they 
                            want to share this extraordinary creation with the world, starting with you.</p>
                            
                        <p>Don't hesitate any longer! Come on board and <strong className={styles.joinclub}>join the cream cheese club</strong> to elevate your cheese experience to extraordinary heights.</p>

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
