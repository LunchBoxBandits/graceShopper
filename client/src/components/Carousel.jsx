import femalehat from "../assets/female-model-hat.jpg";
import suits from "../assets/row-of-suits.jpg";
import styles from "../syles/Carousel.module.css";
import logo from "../assets/Real Fake Clothes Logo.png";
export default function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner relative w-full overflow-hidden">
        <div class="carousel-item active float-left w-full">
          <div class="text-white justify-items-start m-48">
            <h1 class="font-bold text-3xl my-4">Risk Free!</h1>
            <p class="w-2/5 my-4">
              Keep the good stuff at home while you battle the elements in our
              real fake clothes!
            </p>{" "}
            <p className="text-xl text-customyellow">Stains?</p>{" "}
            <p className="text-xl text-customyellow">Irreversable damages?</p>
            <p> No worries just buy more real fake clothes!</p>{" "}
            <img
              src={logo}
              className="absolute flex top-0  right-10 rounded-full opacity-90 w-60 md:w-auto"
            />
            <button class="inline-flex items-center justify-center px-4 py-2 text-base font-bold  leading-6 text-amber-400 whitespace-no-wrap bg-stone-100 border border-black rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
              {" "}
              read more
            </button>
          </div>
        </div>
        <div class="carousel-item float-left w-full">
          <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2 text-6xl m-20 font-bebas ">
            <h1 className="text-white opacity-70 "> ONLINE SHOPPING</h1>
            <h1 className="text-customyellow opacity-80 "> ONLINE SHOPPING</h1>
            <h1 className="text-black opacity-90">ONLINE SHOPPING</h1>
          </div>

          <img
            src={femalehat}
            class="block w-full"
            className={styles.logo}
            alt="Female Model with Hat"
          />
        </div>
        <div class="carousel-item float-left w-full h-5/6">
          {" "}
          <p className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-bebas ">
            SUITS
          </p>
          <img
            src={suits}
            class="block w-full"
            className={styles.logo}
            alt="Bunch of Suits"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
