import react from "react";
import styles from "../syles/Homepage.module.css";
import {useNavigate} from "react-router-dom"

function Home() {
    const nav = useNavigate();
  return (
    <div>
      {/* this is the div for the nav */}
      <div></div>

      {/* div to put image to the left */}
      <div></div>

      {/* put the wording to the right  */}
      <div className={styles.sepImgWord}>
        <img className={styles.manPic} src="model.jpg" alt="model" />
        <div className={styles.text}>
          <h1 className={styles.title}>Grace Shopper</h1>
          <h4>Come get your real fake cloths TODAY!!!!</h4>
          <button 
          className={styles.shopButton}
          onClick={()=>{
            nav("/products")
          }}
          >Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
