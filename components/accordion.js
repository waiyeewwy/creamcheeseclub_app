import { useState } from "react";
import styles from '../styles/global.module.css';


export default function Accordion(props) {
    const [isShowing, setIsShowing] = useState(false);
  
    const toggle = () => {
      setIsShowing(!isShowing);
    };
  
    return (
      <div className={styles.accordion}>
        <button
          className={styles.btn}
          onClick={toggle}
          type="button"
        >
          <p>{props.title}</p>        
        </button>
        <div
            className={styles.content}
            style={{ display: isShowing ? "block" : "none"}}
            dangerouslySetInnerHTML={{
            __html: props.content
          }}
        />
      </div>
    );
  }