import styles from "../syles/Homepage.module.css";
import { useNavigate } from "react-router-dom";
import wilson from "../assets/wilson pfp.jpeg";
import ferni from "../assets/fernando pfp.png";
import ugo from "../assets/ugonna pfp.png";
function Home() {
  const nav = useNavigate();
  return (
    <div>
      {/* this is the div for the nav */}
      <div></div>
      {/* div to put image to the left */}
      <div></div>
      {/* put the wording to the right  */}
      <div className={styles.text}>
        <h1 className={styles.title}>Real Fake Clothes</h1>
        <h4 className="text-pyellow text-2xl">2209 Capstone Project</h4>

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
          <span class="relative p-4 ">Shop Now</span>
        </button>
      </div>{" "}
      <div className="flex flex-row items-center justify-center text-pgray absolute bottom-0 w-full items-center p-6 bg-black">
        <div className="flex flex-col items-center">
          <img
            className="flex items-center justify-center relative rounded-full h-24 "
            src={wilson}
            alt="model"
          />
          <p className=" text-3xl justify-center mr-4">Wilson Chen</p>
          <div>
            <a
              href="https://github.com/Wilsonrchen"
              className="hover:text-pyellow p-2"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/wilsonrchen/"
              className="hover:text-pyellow p-2"
            >
              {" "}
              LinkedIn
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-x-8">
          <img
            className="flex items-center justify-center relative rounded-full h-24 "
            src={ferni}
            alt="model"
          />
          <p className=" text-3xl justify-center mr-4">Fernando Reyes</p>
          <div>
            <a
              href="https://github.com/unkn3wn"
              className="hover:text-pyellow p-2"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/fernando-reyes-673860240/"
              className="hover:text-pyellow p-2"
            >
              {" "}
              LinkedIn
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-x-8">
          <img
            className="flex items-center justify-center relative rounded-full h-24 "
            src={ugo}
            alt="model"
          />
          <p className=" text-3xl justify-center">Ugonna Duru</p>
          <div>
            <a
              href="https://github.com/Uduru10"
              className="hover:text-pyellow p-2"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/ugo-duru-780aa6257/"
              className="hover:text-pyellow p-2"
            >
              {" "}
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
