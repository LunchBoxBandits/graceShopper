import femalehat from "../assets/female-model-hat.jpg";
import suits from "../assets/row-of-suits.jpg";
import styles from "../syles/Carousel.module.css";
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
            <h1 class="font-bold text-3xl my-4">Lorem ipsum dolor</h1>
            <p class="w-2/5 my-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
              necessitatibus molestiae odit perspiciatis voluptates quidem..
            </p>{" "}
            <button class="inline-flex items-center justify-center px-4 py-2 text-base font-bold  leading-6 text-amber-400 whitespace-no-wrap bg-stone-100 border border-black rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
              {" "}
              read more
            </button>
          </div>
        </div>
        <div class="carousel-item float-left w-full">
          <p className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2 text-6xl m-20 ">
            ONLINE SHOPPING
          </p>
          <p className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  m-36">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <img
            src={femalehat}
            class="block w-full"
            className={styles.logo}
            alt="Female Model with Hat"
          />
        </div>
        <div class="carousel-item float-left w-full h-5/6">
          {" "}
          <p className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl ">
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
