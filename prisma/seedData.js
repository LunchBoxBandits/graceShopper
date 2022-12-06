const Users = [
  {
    firstName: "Fernando",
    lastName: "Reyes",
    email: "thisisatestemail@gmail.com",
    password: "12345",
    address: "7668 Sunset St.Los Angeles, CA 90066",
    phone: "269 - 290 - 2565",
    isAdmin: false,
  },
  {
    firstName: "Ugo",
    lastName: "Duru",
    email: "dfsadjfksd@gmail.com",
    password: "6789",
    address: "52 Carson St.Alameda, CA 94501",
    phone: "512 - 452 - 1803",
    isAdmin: false,
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
    name: "TNF™ Logo Boxed Cuffed Beanie",
    price: 15,
    description:
      "Tame the most unruly mops with the TNF™ logo cuffed beanie, a rib knit hat with soft yarn for added stretch and comfort",
    category_id: 1,
    gender_id: 3,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669078934/GRACE%20SHOPPER/MEN/Beanies/The%20North%20Face%20Light%20Blue%20Beanie.jpg",
  },
  {
    name: "TNF™ Logo Box Cuffed Beanie",
    price: 15,
    description:
      "Tame the most unruly mops with the TNF™ logo cuffed beanie, a rib knit hat with soft yarn for added stretch and comfort",
    category_id: 1,
    gender_id: 3,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669078932/GRACE%20SHOPPER/MEN/Beanies/The%20North%20Face%20Yellow%20Beanie.jpg",
  },
  {
    name: "TNF™ Logo Box Pom Beanie",
    price: 15,
    description:
      "Tame the most unruly mops with the TNF™ Logo Box Pom Beanie, a rib-knit hat with a pom detail and soft yarn for added stretch, comfort, and style.",
    category_id: 1,
    gender_id: 3,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669078791/GRACE%20SHOPPER/MEN/Beanies/The%20North%20Face%20Grey%20Beanie.jpg",
  },
  {
    name: "TNF™ Logo Box Cuffed Beanie",
    price: 15,
    description:
      "Tame the most unruly mops with the TNF™ Logo Box Pom Beanie, a rib-knit hat with a pom detail and soft yarn for added stretch, comfort, and style.",
    category_id: 1,
    gender_id: 3,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669078788/GRACE%20SHOPPER/MEN/Beanies/The%20North%20Face%20Dark%20Grey%20Beanie.jpg",
  },
  {
    name: "TNF™ Logo Box Cuffed Beanie",
    price: 15,
    description:
      "Tame the most unruly mops with the TNF™ logo cuffed beanie, a rib knit hat with soft yarn for added stretch and comfort",
    category_id: 1,
    gender_id: 3,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669078781/GRACE%20SHOPPER/MEN/Beanies/The%20North%20Face%20Red%20Beanie.jpg",
  },
  {
    name: "Mens Knit Cuffed Beanie",
    price: 5,
    description:
      "On cold days, stay in style with our knit beanie, with great comfort and warmth will satisfy your desire for warmth ",
    category_id: 1,
    gender_id: 3,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669078745/GRACE%20SHOPPER/MEN/Beanies/Brownish%20Tan%20Beanie.jpg",
  },
  {
    name: "Mens Knit Cuffed Beanie",
    price: 5,
    description:
      "On cold days, stay in style with our knit beanie, with great comfort and warmth will satisfy your desire for warmth",
    category_id: 1,
    gender_id: 3,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669078691/GRACE%20SHOPPER/MEN/Beanies/Black%20Beanie.jpg",
  },
  {
    name: "Half and Half Cuffed Knit Beanie",
    price: 5,
    description:
      "On the coldest day be in style with our two tone beanie, with added great comfort and warmth will satisfy your desire for warmth",
    category_id: 1,
    gender_id: 3,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669078667/GRACE%20SHOPPER/MEN/Beanies/Black%20and%20Tan.jpg",
  },
  {
    name: "Granny Beanie",
    price: 14,
    description:
      "On the coldest day, stay in style with the granny beanie, the comfort and warmth feels like a grandmothers hug",
    category_id: 1,
    gender_id: 3,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669078659/GRACE%20SHOPPER/MEN/Beanies/Grannies%20Beanie.jpg",
  },
  // Pants
  {
    name: "Mens Patch Pocket Straight Cargo Pants",
    price: 45,
    description:
      "These inner city mens cargo pants made from linen fabric, features large pockets along the leg. The straight leg feel, with an adjustable waist fit. ",
    category_id: 2,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669079619/GRACE%20SHOPPER/MEN/Pants/Lights%20White%20Pants.jpg",
  },
  {
    name: "Men's Joggers",
    price: 35,
    description:
      "These high and in style joggers will give you the best look while being in the most comfort, with drawstring on the cuff of the pants and waist line, nice and fitting for all four seasons",
    category_id: 2,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669079612/GRACE%20SHOPPER/MEN/Pants/Gray%20Joggers.jpg",
  },
  {
    name: "Loose Fit Track",
    price: 50,
    description:
      "Our Loose Fit Track made from cotton features an all day comfort, drawstring fitting on waistline and elastic cuff on the bottom give you an option of a loose but fitting feel",
    category_id: 2,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669079608/GRACE%20SHOPPER/MEN/Pants/Black%20Sweats.jpg",
  },
  {
    name: "Men's Light Washed Ripped Slim Straight Jeans",
    price: 60,
    description:
      "Keep it cool and laidback, in our ripped jeans, ripped details in the leg area this loose straight leg fit for all-day comfort.",
    category_id: 2,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669079580/GRACE%20SHOPPER/MEN/Pants/Ripped%20Jeans.jpg",
  },
  {
    name: "Black Skinny Comfort Stretch Jeans",
    price: 50,
    description:
      "Upgrade your wardrobe with help with Skinny Comfort Stretch Jeans. Durable fabric with great comfort will have you wearing whilst staying home.",
    category_id: 2,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669079578/GRACE%20SHOPPER/MEN/Pants/Black%20Ripped%20Jeans.jpg",
  },
  {
    name: "Wilson Chen Cargo Pants",
    price: 50,
    description:
      "Get into style with fashion experts design Wilson Chen Cargo Pants.  These pants have a great fit with pocket down the side of the leg and adjustable waistline for all fit",
    category_id: 2,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669079566/GRACE%20SHOPPER/MEN/Pants/download_np2ozk.jpg",
  },
  // Underwear
  {
    name: "Mens Microfiber Boxer Briefs",
    price: 20,
    description:
      "Designed for optimal comfort, the boxer briefs are made from soft microfibers with cooling properties and four-way stretch for ease of movement",
    category_id: 3,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669078404/GRACE%20SHOPPER/MEN/Underwear/Orange%20Underwear.jpg",
  },
  {
    name: "Boxer Briefs",
    price: 20,
    description:
      "Perfect combo of soft and free yet supportive and strong. These briefs will form to any figure, allowing for carefree comfort all day. Our durable stiching keeps your Undies in place for whatever you get into, which means no bunching, and best of all, no wedgies.",
    category_id: 3,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669077802/GRACE%20SHOPPER/MEN/Underwear/Purple-Underwear.webp",
  },
  {
    name: "Boxer Briefs",
    price: 20,
    description:
      "Perfect combo of soft and free yet supportive and strong. These briefs will form to any figure, allowing for carefree comfort all day. Our durable stiching keeps your Undies in place for whatever you get into, which means no bunching, and best of all, no wedgies.",
    category_id: 3,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669077755/GRACE%20SHOPPER/MEN/Underwear/Red%20Underwear.jpg",
  },
  {
    name: "Amazon Mens Briefs",
    price: 20,
    description:
      "Regular-rise briefs by Amazon. Topped with exposed waistbands, these briefs are crafted in stretch cotton for natural comfort and breathability.",
    category_id: 3,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669077735/GRACE%20SHOPPER/MEN/Underwear/Blue%20Underwear.jpg",
  },
  {
    name: "Yahoo Mens Briefs",
    price: 20,
    description:
      "Regular-rise briefs by Yahoo. Topped with exposed waistbands, these briefs are crafted in stretch cotton for natural comfort and breathability.",
    category_id: 3,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669077724/GRACE%20SHOPPER/MEN/Underwear/BrickColor%20underwear.jpg",
  },
  {
    name: "Mens Boxer Briefs",
    price: 20,
    description:
      "Designed for optimal comfort, the boxer briefs are made from soft microfibers with cooling properties and four-way stretch for ease of movement",
    category_id: 3,
    gender_id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669077555/GRACE%20SHOPPER/MEN/Underwear/Black%20Underwear.webp",
  },
  {
    name: "Mens Boxer Briefs",
    price: 30,
    description:
      "Designed for optimal comfort, the boxer briefs are made from soft microfibers with cooling properties and four-way stretch for ease of movement",
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
  {
    name: "Women Square Neck Long Sleeve Bodycon Dress",
    price: 200,
    description:
      "You'll look absoluting stunning in the Square Neck Longs Sleeve Bodycon dress in beige! Strechy cotton this classic dress that has a mock neckline, fitted long sleeves and a bodycon silhouette, be in comfort and style with our 1/50 dresses made.",
    category_id: 8,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084694/GRACE%20SHOPPER/WOMEN/Dresses/hmgoepprod_ey7gre.jpg",
  },
  {
    name: "Womens Midi Long Sleeve Bodycon Dress",
    price: 200,
    description:
      "You'll look absoluting stunning in the Square Neck Longs Sleeve Bodycon dress in grey! Strechy cotton this classic dress that has a mock neckline, fitted long sleeves and a bodycon silhouette, be in comfort and style with our 1/50 dresses made.",
    category_id: 8,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084690/GRACE%20SHOPPER/WOMEN/Dresses/hmgoepprod_xbssno.jpg",
  },
  {
    name: "Womens Midi Long Sleeve Bodycon Dress",
    price: 200,
    description:
      "You'll look absoluting stunning in the Square Neck Longs Sleeve Bodycon dress in brown! Strechy cotton this classic dress that has a mock neckline, fitted long sleeves and a bodycon silhouette, be in comfort and style with our 1/50 dresses made.",
    category_id: 8,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084687/GRACE%20SHOPPER/WOMEN/Dresses/hmgoepprod_ha1clv.jpg",
  },
  {
    name: "Womens Midi Long Sleeve Bodycon Dress",
    price: 200,
    description:
      "You'll look absoluting stunning in the Square Neck Longs Sleeve Bodycon dress in black! Strechy cotton this classic dress that has a mock neckline, fitted long sleeves and a bodycon silhouette, be in comfort and style with our 1/50 dresses made.",
    category_id: 8,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084683/GRACE%20SHOPPER/WOMEN/Dresses/hmgoepprod_acgkn3.jpg",
  },
  //Hoodies and Sweatshirts
  {
    name: "Oversized Sweatshirt",
    price: 45,
    description:
      "Stay in style with our crew neck made from cotton for absolute comfort, this crewneck keeps your warm in the winter and with a oversize fit and look with great added comfrot",
    category_id: 5,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084988/GRACE%20SHOPPER/WOMEN/Hoodies%20and%20SweatShirts/hmgoepprod_nr8z5z.jpg",
  },
  {
    name: "Womens Oversized Zipper Jacket",
    price: 60,
    description:
      "You will absolutely love this warmth feeling of the cotton inside, our oversized jacket will have you in style in todays times",
    category_id: 5,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084955/GRACE%20SHOPPER/WOMEN/Hoodies%20and%20SweatShirts/hmgoepprod_vnkitn.jpg",
  },
  {
    name: "Womens Sweater Zipper Jacket",
    price: 45,
    description:
      "Enjoy the winter time in our grey sweater jacket, with zipper.  Can style with zipper all the way up or down to your liking, stay warm and cozy with our cotton fabric",
    category_id: 5,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084953/GRACE%20SHOPPER/WOMEN/Hoodies%20and%20SweatShirts/hmgoepprod_mkwrzy.jpg",
  },
  {
    name: "Womens Sweater Zipper Jacket",
    price: 45,
    description:
      "Our exclusive green sweater jacket will have you in style with some of the top fashionista in the world.  Stay in cozy and warm with our cotton fabric. Style it with zipper to your liking. ",
    category_id: 5,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084950/GRACE%20SHOPPER/WOMEN/Hoodies%20and%20SweatShirts/hmgoepprod_fpmqpi.jpg",
  },
  {
    name: "Womens Sweater Zipper Jacket",
    price: 45,
    description:
      "This dark grey jacket gives a hint of mystery added style, zipper to add your flare either open or closed, stay in style and in comfort in our Sweater Jacket",
    category_id: 5,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084947/GRACE%20SHOPPER/WOMEN/Hoodies%20and%20SweatShirts/hmgoepprod_sbcrws.jpg",
  },
  {
    name: "Womens Sweater Zipper Jacket",
    price: 45,
    description:
      "Enjoy the winter time in our brown sweater jacket, with zipper.  Can style with zipper all the way up or down to your liking, stay warm and cozy with our cotton fabric",
    category_id: 5,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084944/GRACE%20SHOPPER/WOMEN/Hoodies%20and%20SweatShirts/hmgoepprod_lw08fk.jpg",
  },
  {
    name: "Womens Sweater Zipper Jacket",
    price: 45,
    description:
      "Enjoy the winter time in our brown sweater jacket, with zipper.  Can style with zipper all the way up or down to your liking, stay warm and cozy with our cotton fabric",
    category_id: 5,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084939/GRACE%20SHOPPER/WOMEN/Hoodies%20and%20SweatShirts/hmgoepprod_kzhqxb.jpg",
  },
  //womens pants
  {
    name: "Straight Leg Corduroy Pants",
    price: 55,
    description:
      "A great pair of straight-leg cord trousers, woven in cotton. Generously cut throught the leg with a slight taper to the ankle, good comfort from the waistline give you a relax feeling when wearing.",
    category_id: 2,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084807/GRACE%20SHOPPER/WOMEN/Jeans/hmgoepprod_x0rqof.jpg",
  },
  {
    name: "Straight Leg Corduroy Pants",
    price: 55,
    description:
      "A great pair of straight-leg cord trousers, woven in cotton. Generously cut throught the leg with a slight taper to the ankle, good comfort from the waistline give you a relax feeling when wearing.",
    category_id: 2,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084804/GRACE%20SHOPPER/WOMEN/Jeans/hmgoepprod_mjascd.jpg",
  },
  {
    name: "Straight Leg Corduroy Pants",
    price: 55,
    description:
      "A great pair of straight-leg cord trousers, woven in cotton. Generously cut throught the leg with a slight taper to the ankle, good comfort from the waistline give you a relax feeling when wearing.",
    category_id: 2,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084798/GRACE%20SHOPPER/WOMEN/Jeans/hmgoepprod_ksdfsc.jpg",
  },
  {
    name: "Straight Leg Corduroy Pants",
    price: 55,
    description:
      "A great pair of straight-leg cord trousers, woven in cotton. Generously cut throught the leg with a slight taper to the ankle, good comfort from the waistline give you a relax feeling when wearing.",
    category_id: 2,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084795/GRACE%20SHOPPER/WOMEN/Jeans/hmgoepprod_thuvlc.jpg",
  },
  //lingerie
  {
    name: "Cotton Jersey Triangle Bralette",
    price: 35,
    description:
      "A perfect everyday option for a lightweight, comfortable hold, this Triangle Bralette is lined with cotton jersey for softness against skin and a mesh interlining support.",
    category_id: 3,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669085108/GRACE%20SHOPPER/WOMEN/Lingerie/hmgoepprod_h1ge1x.jpg",
  },
  {
    name: "Cotton Jersey Triangle Bralette",
    price: 35,
    description:
      "A perfect everyday option for a lightweight, comfortable hold, this Triangle Bralette is lined with cotton jersey for softness against skin and a mesh interlining support.",
    category_id: 3,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669085102/GRACE%20SHOPPER/WOMEN/Lingerie/hmgoepprod_kapkga.jpg",
  },
  {
    name: "Cotton Jersey Triangle Bralette",
    price: 35,
    description:
      "A perfect everyday option for a lightweight, comfortable hold, this Triangle Bralette is lined with cotton jersey for softness against skin and a mesh interlining support.",
    category_id: 3,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669085100/GRACE%20SHOPPER/WOMEN/Lingerie/hmgoepprod_qutllo.jpg",
  },
  //Shirts and Blouses
  {
    name: "Angelic-The Icon Oversized Shirt In Stripe",
    price: 98,
    description:
      "Cut with ease and crafted from our washed cotton poplin, this high fashion oversized shirt in black and white will have you stylish at any formal setting. Cut for a loose, relaxed fit with a dropped shoulder.",
    category_id: 3,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084743/GRACE%20SHOPPER/WOMEN/Shirts%20and%20Blouses/hmgoepprod_l2wpeb.jpg",
  },
  {
    name: "Angelic-The Icon Oversize Shirt",
    price: 98,
    description:
      "Cut with ease and crafted from our washed cotton poplin, This high fashion oversized shirt in pink will have you the talk of the town.  Cut for a loose, relaxed fit with a dropped shoulder.",
    category_id: 3,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084740/GRACE%20SHOPPER/WOMEN/Shirts%20and%20Blouses/hmgoepprod_rsp4qn.jpg",
  },
  {
    name: "Angelic-The Icon Oversized Shirt In Stripe",
    price: 98,
    description:
      "Cut with ease and crafted from our washed cotton poplin, this high fashion oversized shirt in blue and white will have you stylish at any formal setting. Cut for a loose, relaxed fit with a dropped shoulder.",
    category_id: 3,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084737/GRACE%20SHOPPER/WOMEN/Shirts%20and%20Blouses/hmgoepprod_zetoob.jpg",
  },
  {
    name: "Angelic-The Icon Oversized Shirt",
    price: 98,
    description:
      "Cut with ease and crafted from our washed cotton poplin, This high fashion oversized shirt in brown will have you the talk of the town.  Cut for a loose, relaxed fit with a dropped shoulder",
    category_id: 3,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084733/GRACE%20SHOPPER/WOMEN/Shirts%20and%20Blouses/hmgoepprod_dwqg8n.jpg",
  },
  {
    name: "Amery-The Icon Oversized Pinstripe",
    price: 109,
    description:
      "Cut with ease and crafted from our washed cotton poplin, this high fashion oversized shirt in pinstripe will have you stylish at any formal setting. Cut for a loose, relaxed fit with a dropped shoulder.",
    category_id: 3,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084730/GRACE%20SHOPPER/WOMEN/Shirts%20and%20Blouses/hmgoepprod_rdimpz.jpg",
  },
  {
    name: "Amery-The Icon Oversized Shirt",
    price: 109,
    description:
      "Cut with ease and crafted from our washed cotton poplin, This high fashion oversized shirt in white will have you the talk of the town.  Cut for a loose, relaxed fit with a dropped shoulder",
    category_id: 3,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084727/GRACE%20SHOPPER/WOMEN/Shirts%20and%20Blouses/hmgoepprod_xpejva.jpg",
  },
  //womens t-shirts
  {
    name: "Women's Classic Crew Neck",
    price: 35,
    description:
      "An udpated classic with your favorite clean crewneck and short sleeves, supersoft and never ever sheer, a special blend of prima cotton and modal yarns",
    category_id: 7,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084876/GRACE%20SHOPPER/WOMEN/Tops/hmgoepprod_jgns57.jpg",
  },
  {
    name: "Women's Classic Crew Neck",
    price: 35,
    description:
      "An updated classic with your favorite clean crewneck and short sleeves,  stay in style with our grey classic t-shirt can wear in the hottests day to stay cool.",
    category_id: 7,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084873/GRACE%20SHOPPER/WOMEN/Tops/hmgoepprod_xndfkb.jpg",
  },
  {
    name: "Women's Classic Crew Neck Plain Tee",
    price: 35,
    description:
      "An updated classic with your favorite clean crewneck and short sleeves,  stay in style with our brown classic t-shirt can wear in the hottests day to stay cool.",
    category_id: 7,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084868/GRACE%20SHOPPER/WOMEN/Tops/hmgoepprod_w18qpi.jpg",
  },
  {
    name: "Women's Classic Crew Neck Plain Tee",
    price: 35,
    description:
      "An updated classic with your favorite clean crewneck and short sleeves,  stay in style with our white classic t-shirt can wear in the hottests day to stay cool.",
    category_id: 7,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084865/GRACE%20SHOPPER/WOMEN/Tops/hmgoepprod_pji0ik.jpg",
  },
  {
    name: "Women's Classic Crew Neck Plain Tee",
    price: 35,
    description:
      "An updated classic with your favorite clean crewneck and short sleeves,  stay in style with our black classic t-shirt can wear in the hottests day to stay cool.",
    category_id: 7,
    gender_id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsvltch46/image/upload/v1669084862/GRACE%20SHOPPER/WOMEN/Tops/hmgoepprod_mnnfjb.jpg",
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
  {
    id: 8,
    name: "Dresses",
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
    quantity: 2,
  },
  {
    order_id: 1,
    product_id: 2,
    quantity: 4,
  },
  {
    order_id: 1,
    product_id: 3,
    quantity: 6,
  },
  {
    order_id: 2,
    product_id: 4,
    quantity: 1,
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
    cvc: 234,
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
