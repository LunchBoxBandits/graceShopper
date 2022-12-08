import styles from "../syles/Homepage.module.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/joy/Button";

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
            href="#_"
            class="relative inline-flex items-center px-8 py-1 overflow-hidden text-lg font-medium text-white border-2 border-black rounded-full hover:text-white group hover:bg-gray-50 mt-14"
            onClick={() => {
              nav("/products");
            }}
          >
            <span class="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="relative">Shop Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
