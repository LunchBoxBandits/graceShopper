const Users = [
  {
    firstName: "Fernando",
    lastName: "Reyes",
    email: "thisisatestemail@gmail.com",
    password: "12345",
    address: "7668 Sunset St.Los Angeles, CA 90066",
    phone: "269 - 290 - 2565",
    isAdmin: false
  },
  {
    firstName: "Ugo",
    lastName: "Duru",
    email: "dfsadjfksd@gmail.com",
    password: "6789",
    address: "52 Carson St.Alameda, CA 94501",
    phone: "512 - 452 - 1803",
    isAdmin: false
  },
  {
    firstName: "Wilson",
    lastName: "Chen",
    email: "chenischess@gmail.com",
    password: "thisAlsoTest",
    address: "755 New Road London WC19 5EJ",
    phone: "256 - 763 - 1664",
    isAdmin: false, 
  },
  {
    firstName: "Goated",
    lastName: "Poke",
    email: "goatedPoke12@gmail.com",
    password: "asdf",
    address: "2 Shady Drive Thompson, MB R8N 7N5",
    phone: "606 - 507 - 6259",
    isAdmin: false,
  },
];
// Mens Collection

const Products = [
  // Beanies
  {
    name: "The North Face Light Blue Beanie",
    price: 15,
    description: "soft touch to your ears keeps your ears nice and warm",
    category_id: 1,
    gender_id: 3,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669078934/GRACE%20SHOPPER/MEN/Beanies/The%20North%20Face%20Light%20Blue%20Beanie.jpg",
  },
  {
    name: "The North Face Yellow Beanie",
    price: 15,
    description: "soft touch to your ears keeps your ears nice and warm",
    category_id: 1,
    gender_id: 3,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669078932/GRACE%20SHOPPER/MEN/Beanies/The%20North%20Face%20Yellow%20Beanie.jpg",
  },
  {
    name: "The North Face Grey Beanie",
    price: 15,
    description: "soft touch to your ears keeps your ears nice and warm",
    category_id: 1,
    gender_id: 3,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669078791/GRACE%20SHOPPER/MEN/Beanies/The%20North%20Face%20Grey%20Beanie.jpg",
  },
  {
    name: "The North Face Dark Grey Beanie",
    price: 15,
    description: "soft touch to your ears keeps your ears nice and warm",
    category_id: 1,
    gender_id: 3,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669078788/GRACE%20SHOPPER/MEN/Beanies/The%20North%20Face%20Dark%20Grey%20Beanie.jpg",
  },
  {
    name: "The North Face Red Beanie",
    price: 15,
    description: "soft touch to your ears keeps your ears nice and warm",
    category_id: 1,
    gender_id: 3,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669078781/GRACE%20SHOPPER/MEN/Beanies/The%20North%20Face%20Red%20Beanie.jpg",
  },
  {
    name: "Brownish Tan Beanie",
    price: 5,
    description: "soft touch to your ears keeps your ears nice and warm",
    category_id: 1,
    gender_id: 3,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669078745/GRACE%20SHOPPER/MEN/Beanies/Brownish%20Tan%20Beanie.jpg",
  },
  {
    name: "Black Beanie",
    price: 5,
    description: "soft touch to your ears keeps your ears nice and warm",
    category_id: 1,
    gender_id: 3,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669078691/GRACE%20SHOPPER/MEN/Beanies/Black%20Beanie.jpg",
  },
  {
    name: "Black and Tan Beanie",
    price: 5,
    description: "soft touch to your ears keeps your ears nice and warm",
    category_id: 1,
    gender_id: 3,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669078667/GRACE%20SHOPPER/MEN/Beanies/Black%20and%20Tan.jpg",
  },
  {
    name: "Grannies Beanie",
    price: 14,
    description: "soft touch to your ears keeps your ears nice and warm",
    category_id: 1,
    gender_id: 3,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669078659/GRACE%20SHOPPER/MEN/Beanies/Grannies%20Beanie.jpg",
  },
  // Pants
  {
    name: "Light White Pants",
    price: 45,
    description: "Pants with a good look",
    category_id: 2,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669079619/GRACE%20SHOPPER/MEN/Pants/Lights%20White%20Pants.jpg",
  },
  {
    name: "Gray Joggers",
    price: 35,
    description: "Pants with a good look",
    category_id: 2,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669079612/GRACE%20SHOPPER/MEN/Pants/Gray%20Joggers.jpg",
  },
  {
    name: "Black Sweats",
    price: 50,
    description: "Pants with a good look",
    category_id: 2,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669079608/GRACE%20SHOPPER/MEN/Pants/Black%20Sweats.jpg",
  },
  {
    name: "Ripped Jeans",
    price: 60,
    description: "Pants with a good look",
    category_id: 2,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669079580/GRACE%20SHOPPER/MEN/Pants/Ripped%20Jeans.jpg",
  },
  {
    name: "Black Ripped Jeans",
    price: 50,
    description: "Pants with a good look",
    category_id: 2,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669079578/GRACE%20SHOPPER/MEN/Pants/Black%20Ripped%20Jeans.jpg",
  },
  {
    name: "Burgundy Jeans",
    price: 50,
    description: "Pants with a good look",
    category_id: 2,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669079566/GRACE%20SHOPPER/MEN/Pants/download_np2ozk.jpg",
  },
  // Underwear
  {
    name: "Orange Underwear",
    price: 20,
    description: "Keeps the sack nice and dry and warm",
    category_id: 3,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669078404/GRACE%20SHOPPER/MEN/Underwear/Orange%20Underwear.jpg",
  },
  {
    name: "Pinkish Underwear",
    price: 20,
    description: "Keeps the sack nice and dry and warm",
    category_id: 3,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669077802/GRACE%20SHOPPER/MEN/Underwear/Purple-Underwear.webp",
  },
  {
    name: "Red Underwear",
    price: 20,
    description: "Keeps the sack nice and dry and warm",
    category_id: 3,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669077755/GRACE%20SHOPPER/MEN/Underwear/Red%20Underwear.jpg",
  },
  {
    name: "Blue Underwear",
    price: 20,
    description:
      "Keeps the sack nice and dry and warm these are not as comfortable",
    category_id: 3,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669077735/GRACE%20SHOPPER/MEN/Underwear/Blue%20Underwear.jpg",
  },
  {
    name: "BrickColor Underwear",
    price: 20,
    description: "Keeps the sack nice and dry and warm",
    category_id: 3,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669077724/GRACE%20SHOPPER/MEN/Underwear/BrickColor%20underwear.jpg",
  },
  {
    name: "Black Underwear",
    price: 20,
    description: "Keeps the sack nice and dry and warm",
    category_id: 3,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669077555/GRACE%20SHOPPER/MEN/Underwear/Black%20Underwear.webp",
  },
  {
    name: "White UnderWear",
    price: 30,
    description: "poop stains are very visible",
    category_id: 3,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669077469/GRACE%20SHOPPER/MEN/Underwear/White%20Underwear.webp",
  },
  // Shorts
  {
    name: "Grey Running Shorts",
    price: 125,
    description: "good for the summer",
    category_id: 4,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084235/GRACE%20SHOPPER/MEN/shorts/203028493-1-stone_mvuxb6.jpg",
  },
  {
    name: "Light Grey Shorts",
    price: 125,
    description: "good for the summer",
    category_id: 4,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084230/GRACE%20SHOPPER/MEN/shorts/201312553-1-greyheather_gdqr0s.jpg",
  },
  {
    name: "Black shorts",
    price: 125,
    description: "good for the summer",
    category_id: 4,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084221/GRACE%20SHOPPER/MEN/shorts/201312546-1-black_jf5yhm.webp",
  },
  {
    name: "Nike Black Shorts",
    price: 45,
    description: "Pants with a good look",
    category_id: 4,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084216/GRACE%20SHOPPER/MEN/shorts/201312731-1-black_aepei4.webp",
  },
  {
    name: "Light Pink Shorts",
    price: 45,
    description: "Pants with a good look",
    category_id: 4,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084214/GRACE%20SHOPPER/MEN/shorts/201710967-1-pastellilac_wmfi5x.webp",
  },
  {
    name: "GingerBread Shorts",
    price: 45,
    description: "Pants with a good look",
    category_id: 4,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084208/GRACE%20SHOPPER/MEN/shorts/203608679-1-green_sgcmhw.webp",
  },
  // Sweater
  {
    name: "Blue Sweater",
    price: 35,
    description: "good to keep you warm the color is blue",
    category_id: 5,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084377/GRACE%20SHOPPER/MEN/Hoodies%20and%20Sweaters/hmgoepprod_pjyjov.jpg",
  },
  {
    name: "green Sweater",
    price: 35,
    description: "good to keep you warm the color is green",
    category_id: 5,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084373/GRACE%20SHOPPER/MEN/Hoodies%20and%20Sweaters/hmgoepprod_dd72kn.jpg",
  },
  {
    name: "Grey Sweater",
    price: 35,
    description: "good to keep you warm the color is grey",
    category_id: 5,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084370/GRACE%20SHOPPER/MEN/Hoodies%20and%20Sweaters/hmgoepprod_b6yp4o.jpg",
  },
  {
    name: "Red Sweater",
    price: 35,
    description: "good to keep you warm the color is red",
    category_id: 5,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084366/GRACE%20SHOPPER/MEN/Hoodies%20and%20Sweaters/hmgoepprod_sl6yvs.jpg",
  },
  {
    name: "Another Grey Sweater",
    price: 35,
    description: "good to keep you warm the color is grey",
    category_id: 5,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084363/GRACE%20SHOPPER/MEN/Hoodies%20and%20Sweaters/hmgoepprod_iamsau.jpg",
  },
  {
    name: "White Sweater",
    price: 35,
    description: "good to keep you warm the color is blue",
    category_id: 5,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084359/GRACE%20SHOPPER/MEN/Hoodies%20and%20Sweaters/hmgoepprod_yh44fu.jpg",
  },
  {
    name: "Black Sweater",
    price: 35,
    description: "good to keep you warm the color is blue",
    category_id: 5,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084356/GRACE%20SHOPPER/MEN/Hoodies%20and%20Sweaters/hmgoepprod_zroom8.jpg",
  },
  // Cap
  {
    name: "The Wave Black Cap",
    price: 20,
    description: "just a black hat lol",
    category_id: 6,
    gender_id: 3,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669083566/GRACE%20SHOPPER/MEN/Hats/The%20Wave%20Black%20Cap.webp",
  },
  {
    name: "Astro Pink Cap",
    price: 20,
    description: "cool hat i guess",
    category_id: 6,
    gender_id: 3,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669083531/GRACE%20SHOPPER/MEN/Hats/ASTRO%20PINK%20HAT.webp",
  },
  {
    name: "Astro White Cap",
    price: 20,
    description: "pink cool hat lol",
    category_id: 6,
    gender_id: 3,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669083522/GRACE%20SHOPPER/MEN/Hats/ASTRO%20WHITE%20HAT.webp",
  },
  {
    name: "Astro Black Cap",
    price: 20,
    description: "hola",
    category_id: 6,
    gender_id: 3,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669083516/GRACE%20SHOPPER/MEN/Hats/ASTRO%20BLACK%20HAT.webp",
  },
  {
    name: "Astro Beige Cap",
    price: 20,
    description: "Beige i guess",
    category_id: 6,
    gender_id: 3,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669083506/GRACE%20SHOPPER/MEN/Hats/ASTRO%20BEIGE%20HAT.jpg",
  },
  // Shirts
  {
    name: "Green Shirt",
    price: 15,
    description: "nice looking shirt",
    category_id: 7,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084428/GRACE%20SHOPPER/MEN/T-Shirts%20and%20Tops/hmgoepprod_xlbwep.jpg",
  },
  {
    name: "Blue Grey Shirt",
    price: 15,
    description: "nice looking shirt",
    category_id: 7,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084425/GRACE%20SHOPPER/MEN/T-Shirts%20and%20Tops/hmgoepprod_hg17vs.jpg",
  },
  {
    name: "Grey Shirt",
    price: 15,
    description: "nice looking shirt",
    category_id: 7,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084415/GRACE%20SHOPPER/MEN/T-Shirts%20and%20Tops/hmgoepprod_hekbcl.jpg",
  },
  {
    name: "Black Shirt",
    price: 15,
    description: "nice looking shirt",
    category_id: 7,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084412/GRACE%20SHOPPER/MEN/T-Shirts%20and%20Tops/hmgoepprod_io051e.jpg",
  },
  {
    name: "White Shirt",
    price: 15,
    description: "nice looking shirt",
    category_id: 7,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084409/GRACE%20SHOPPER/MEN/T-Shirts%20and%20Tops/hmgoepprod_acwuxt.jpg",
  },
];

const Categories = [
  {
    id: 1,
    name: "Beanies",
  },
  {
    id: 2,
    name: "Pants",
  },
  {
    id: 3,
    name: "Underwear",
  },
  {
    id: 4,
    name: "Shorts",
  },
  {
    id: 5,
    name: "Hoodies_and_Sweaters",
  },
  {
    id: 6,
    name: "Hats",
  },
  {
    id: 7,
    name: "Tshirts",
  },
];

const Gender = [
  {
    id: 1,
    name: "Male",
  },
  {
    id: 2,
    name: "Female",
  },
  {
    id: 3,
    name: "Unisex",
  },
];

const Orders = [
  {
    userId: 4,
    total: 20,
  },
  {
    userId: 3,
    total: 500,
  },
];
const Order_Products = [
  {
    order_id: 1,
    product_id: 1,
    quantity: 2
  },
  {
    order_id: 1,
    product_id: 2,
    quantity: 4
  },
  {
    order_id: 1,
    product_id: 3,
    quantity: 6
  },
  {
    order_id: 2,
    product_id: 4,
    quantity: 1
  },
];

const Payment_Details = [
  {
    order_id: 1,
    amount: 2000,
    provider: "Chase",
    nameOnCard: "ferni",
    cardNumber: "2222405343248877",
    experationDate: "12/32",
    cvc:234
  },
];

module.exports = {
  Users,
  Products,
  Orders,
  Categories,
  Gender,
  Order_Products,
  Payment_Details,
};
