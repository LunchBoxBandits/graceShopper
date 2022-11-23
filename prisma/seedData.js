const Users = [
  {
    firstName: "Fernando",
    lastName: "Reyes",
    email: "thisisatestemail@gmail.com",
    password: "12345",
    address: "7668 Sunset St.Los Angeles, CA 90066",
    phone: 269 - 290 - 2565,
  },
  {
    firstName: "Ugo",
    lastName: "Duru",
    email: "dfsadjfksd@gmail.com",
    password: "6789",
    address: "52 Carson St.Alameda, CA 94501",
    phone: 512 - 452 - 1803,
  },
  {
    firstName: "Wilson",
    lastName: "Chen",
    email: "chenischess@gmail.com",
    password: "thisAlsoTest",
    address: "755 New Road London WC19 5EJ",
    phone: 256 - 763 - 1664,
  },
  {
    firstName: "Goated",
    lastName: "Poke",
    email: "goatedPoke12@gmail.com",
    password: "asdf",
    address: "2 Shady Drive Thompson, MB R8N 7N5",
    phone: 606 - 507 - 6259,
  },
];

const Products = [
  // Men product collection
    Men_Beanies = [
      {
        name: "The North Face Light Blue Beanie",
        price: 15,
        description: "soft touch to your ears keeps your ears nice and warm",
        imageUrl:
          "https://res.cloudinary.com/dsvltch46/image/upload/v1669078934/GRACE%20SHOPPER/MEN/Beanies/The%20North%20Face%20Light%20Blue%20Beanie.jpg",
      },
      {
        name: "The North Face Yellow Beanie",
        price: 15,
        description: "soft touch to your ears keeps your ears nice and warm",
        imageUrl:
          "https://res.cloudinary.com/dsvltch46/image/upload/v1669078932/GRACE%20SHOPPER/MEN/Beanies/The%20North%20Face%20Yellow%20Beanie.jpg",
      },
      {
        name: "The North Face Grey Beanie",
        price: 15,
        description: "soft touch to your ears keeps your ears nice and warm",
        imageUrl:
          "https://res.cloudinary.com/dsvltch46/image/upload/v1669078791/GRACE%20SHOPPER/MEN/Beanies/The%20North%20Face%20Grey%20Beanie.jpg",
      },
      {
        name: "The North Face Dark Grey Beanie",
        price: 15,
        description: "soft touch to your ears keeps your ears nice and warm",
        imageUrl:
          "https://res.cloudinary.com/dsvltch46/image/upload/v1669078788/GRACE%20SHOPPER/MEN/Beanies/The%20North%20Face%20Dark%20Grey%20Beanie.jpg",
      },
      {
        name: "The North Face Red Beanie",
        price: 15,
        description: "soft touch to your ears keeps your ears nice and warm",
        imageUrl:
          "https://res.cloudinary.com/dsvltch46/image/upload/v1669078781/GRACE%20SHOPPER/MEN/Beanies/The%20North%20Face%20Red%20Beanie.jpg",
      },
      {
        name: "Brownish Tan Beanie",
        price: 5,
        description: "soft touch to your ears keeps your ears nice and warm",
        imageUrl:
          "https://res.cloudinary.com/dsvltch46/image/upload/v1669078745/GRACE%20SHOPPER/MEN/Beanies/Brownish%20Tan%20Beanie.jpg",
      },
      {
        name: "Black Beanie",
        price: 5,
        description: "soft touch to your ears keeps your ears nice and warm",
        imageUrl:
          "https://res.cloudinary.com/dsvltch46/image/upload/v1669078691/GRACE%20SHOPPER/MEN/Beanies/Black%20Beanie.jpg",
      },
      {
        name: "Black and Tan Beanie",
        price: 5,
        description: "soft touch to your ears keeps your ears nice and warm",
        imageUrl:
          "https://res.cloudinary.com/dsvltch46/image/upload/v1669078667/GRACE%20SHOPPER/MEN/Beanies/Black%20and%20Tan.jpg",
      },
      {
        name: "Grannies Beanie",
        price: 14,
        description: "soft touch to your ears keeps your ears nice and warm",
        imageUrl:
          "https://res.cloudinary.com/dsvltch46/image/upload/v1669078659/GRACE%20SHOPPER/MEN/Beanies/Grannies%20Beanie.jpg",
      },
    ],
    // Men_Pants = [
    //   {
    //     name: "Light White Pants",
    //     price: 45,
    //     description: "Pants with a good look",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669079619/GRACE%20SHOPPER/MEN/Pants/Lights%20White%20Pants.jpg",
    //   },
    //   {
    //     name: "Gray Joggers",
    //     price: 35,
    //     description: "Pants with a good look",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669079612/GRACE%20SHOPPER/MEN/Pants/Gray%20Joggers.jpg",
    //   },
    //   {
    //     name: "Black Sweats",
    //     price: 50,
    //     description: "Pants with a good look",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669079608/GRACE%20SHOPPER/MEN/Pants/Black%20Sweats.jpg",
    //   },
    //   {
    //     name: "Ripped Jeans",
    //     price: 60,
    //     description: "Pants with a good look",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669079580/GRACE%20SHOPPER/MEN/Pants/Ripped%20Jeans.jpg",
    //   },
    //   {
    //     name: "Black Ripped Jeans",
    //     price: 50,
    //     description: "Pants with a good look",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669079578/GRACE%20SHOPPER/MEN/Pants/Black%20Ripped%20Jeans.jpg",
    //   },
    //   {
    //     name: "Burgundy Jeans",
    //     price: 50,
    //     description: "Pants with a good look",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669079566/GRACE%20SHOPPER/MEN/Pants/download_np2ozk.jpg",
    //   },
    // ],
    // Men_Underwear = [
    //   {
    //     name: "Orange Underwear",
    //     price: 20,
    //     description: "Keeps the sack nice and dry and warm",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669078404/GRACE%20SHOPPER/MEN/Underwear/Orange%20Underwear.jpg",
    //   },
    //   {
    //     name: "Pinkish Underwear",
    //     price: 20,
    //     description: "Keeps the sack nice and dry and warm",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669077802/GRACE%20SHOPPER/MEN/Underwear/Purple-Underwear.webp",
    //   },
    //   {
    //     name: "Red Underwear",
    //     price: 20,
    //     description: "Keeps the sack nice and dry and warm",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669077755/GRACE%20SHOPPER/MEN/Underwear/Red%20Underwear.jpg",
    //   },
    //   {
    //     name: "Blue Underwear",
    //     price: 20,
    //     description:
    //       "Keeps the sack nice and dry and warm these are not as comfortable",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669077735/GRACE%20SHOPPER/MEN/Underwear/Blue%20Underwear.jpg",
    //   },
    //   {
    //     name: "BrickColor Underwear",
    //     price: 20,
    //     description: "Keeps the sack nice and dry and warm",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669077724/GRACE%20SHOPPER/MEN/Underwear/BrickColor%20underwear.jpg",
    //   },
    //   {
    //     name: "Black Underwear",
    //     price: 20,
    //     description: "Keeps the sack nice and dry and warm",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669077555/GRACE%20SHOPPER/MEN/Underwear/Black%20Underwear.webp",
    //   },
    //   {
    //     name: "White UnderWear",
    //     price: 30,
    //     description: "poop stains are very visible",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669077469/GRACE%20SHOPPER/MEN/Underwear/White%20Underwear.webp",
    //   },
    // ],
    // Men_Hats = [
    //   {
    //     name: "The Wave Black Cap",
    //     price: 20,
    //     description: "just a black hat lol",
    //     imageUrl: "https://res.cloudinary.com/dsvltch46/image/upload/v1669083566/GRACE%20SHOPPER/MEN/Hats/The%20Wave%20Black%20Cap.webp",
    //   },
    //   {
    //     name: "Astro Pink Cap",
    //     price: 20,
    //     description: "cool hat i guess",
    //     imageUrl: "https://res.cloudinary.com/dsvltch46/image/upload/v1669083531/GRACE%20SHOPPER/MEN/Hats/ASTRO%20PINK%20HAT.webp",
    //   },
    //   {
    //     name: "Astro White Cap",
    //     price: 20,
    //     description: "pink cool hat lol",
    //     imageUrl: "https://res.cloudinary.com/dsvltch46/image/upload/v1669083522/GRACE%20SHOPPER/MEN/Hats/ASTRO%20WHITE%20HAT.webp",
    //   },
    //   {
    //     name: "Astro Black Cap",
    //     price: 20,
    //     description: "hola",
    //     imageUrl: "https://res.cloudinary.com/dsvltch46/image/upload/v1669083516/GRACE%20SHOPPER/MEN/Hats/ASTRO%20BLACK%20HAT.webp",
    //   },
    //   {
    //     name: "Astro Beige Cap",
    //     price: 20,
    //     description: "Beige i guess",
    //     imageUrl: "https://res.cloudinary.com/dsvltch46/image/upload/v1669083506/GRACE%20SHOPPER/MEN/Hats/ASTRO%20BEIGE%20HAT.jpg",
    //   },
    // ],
    // Men_Shorts = [
    //   {
    //     name: "Grey Running Shorts",
    //     price: 125,
    //     description: "good for the summer",
    //     imageUrl: "https://res.cloudinary.com/dsvltch46/image/upload/v1669084235/GRACE%20SHOPPER/MEN/shorts/203028493-1-stone_mvuxb6.jpg",
    //   },
    //   {
    //     name: "Light Grey Shorts",
    //     price: 125,
    //     description: "good for the summer",
    //     imageUrl: "https://res.cloudinary.com/dsvltch46/image/upload/v1669084230/GRACE%20SHOPPER/MEN/shorts/201312553-1-greyheather_gdqr0s.jpg",
    //   },
    //   {
    //     name: "Black shorts",
    //     price: 125,
    //     description: "good for the summer",
    //     imageUrl: "https://res.cloudinary.com/dsvltch46/image/upload/v1669084221/GRACE%20SHOPPER/MEN/shorts/201312546-1-black_jf5yhm.webp",
    //   },
    //   {
    //     name: "Nike Black Shorts",
    //     price: 45,
    //     description: "Pants with a good look",
    //     imageUrl: "https://res.cloudinary.com/dsvltch46/image/upload/v1669084216/GRACE%20SHOPPER/MEN/shorts/201312731-1-black_aepei4.webp",
    //   },
    //   {
    //     name: "Light Pink Shorts",
    //     price: 45,
    //     description: "Pants with a good look",
    //     imageUrl: "https://res.cloudinary.com/dsvltch46/image/upload/v1669084214/GRACE%20SHOPPER/MEN/shorts/201710967-1-pastellilac_wmfi5x.webp",
    //   },
    //   {
    //     name: "GinerBread Shorts",
    //     price: 45,
    //     description: "Pants with a good look",
    //     imageUrl: "https://res.cloudinary.com/dsvltch46/image/upload/v1669084208/GRACE%20SHOPPER/MEN/shorts/203608679-1-green_sgcmhw.webp",
    //   },
    // ],
    // Men_Hoodies_and_Sweaters = [
    //   {
    //     name: "Blue Sweater",
    //     price: 35,
    //     description: "good to keep you warm the color is blue",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084377/GRACE%20SHOPPER/MEN/Hoodies%20and%20Sweaters/hmgoepprod_pjyjov.jpg",
    //   },
    //   {
    //     name: "green Sweater",
    //     price: 35,
    //     description: "good to keep you warm the color is green",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084373/GRACE%20SHOPPER/MEN/Hoodies%20and%20Sweaters/hmgoepprod_dd72kn.jpg",
    //   },
    //   {
    //     name: "Grey Sweater",
    //     price: 35,
    //     description: "good to keep you warm the color is grey",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084370/GRACE%20SHOPPER/MEN/Hoodies%20and%20Sweaters/hmgoepprod_b6yp4o.jpg",
    //   },
    //   {
    //     name: "Red Sweater",
    //     price: 35,
    //     description: "good to keep you warm the color is red",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084366/GRACE%20SHOPPER/MEN/Hoodies%20and%20Sweaters/hmgoepprod_sl6yvs.jpg",
    //   },
    //   {
    //     name: "Another Grey Sweater",
    //     price: 35,
    //     description: "good to keep you warm the color is grey",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084363/GRACE%20SHOPPER/MEN/Hoodies%20and%20Sweaters/hmgoepprod_iamsau.jpg",
    //   },
    //   {
    //     name: "White Sweater",
    //     price: 35,
    //     description: "good to keep you warm the color is blue",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084359/GRACE%20SHOPPER/MEN/Hoodies%20and%20Sweaters/hmgoepprod_yh44fu.jpg",
    //   },
    //   {
    //     name: "Black Sweater",
    //     price: 35,
    //     description: "good to keep you warm the color is blue",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084356/GRACE%20SHOPPER/MEN/Hoodies%20and%20Sweaters/hmgoepprod_zroom8.jpg",
    //   },
    // ],
    // Men_TShirts = [
    //   {
    //     name: "Green Shirt",
    //     price: 15,
    //     description: "nice looking shirt",
    //     imageUrl: "https://res.cloudinary.com/dsvltch46/image/upload/v1669084428/GRACE%20SHOPPER/MEN/T-Shirts%20and%20Tops/hmgoepprod_xlbwep.jpg",
    //   },
    //   {
    //     name: "Blue Grey Shirt",
    //     price: 15,
    //     description: "nice looking shirt",
    //     imageUrl: "https://res.cloudinary.com/dsvltch46/image/upload/v1669084425/GRACE%20SHOPPER/MEN/T-Shirts%20and%20Tops/hmgoepprod_hg17vs.jpg",
    //   },
    //   {
    //     name: "Grey Shirt",
    //     price: 15,
    //     description: "nice looking shirt",
    //     imageUrl: "https://res.cloudinary.com/dsvltch46/image/upload/v1669084415/GRACE%20SHOPPER/MEN/T-Shirts%20and%20Tops/hmgoepprod_hekbcl.jpg",
    //   },
    //   {
    //     name: "Black Shirt",
    //     price: 15,
    //     description: "nice looking shirt",
    //     imageUrl: "https://res.cloudinary.com/dsvltch46/image/upload/v1669084412/GRACE%20SHOPPER/MEN/T-Shirts%20and%20Tops/hmgoepprod_io051e.jpg",
    //   },
    //   {
    //     name: "White Shirt",
    //     price: 15,
    //     description: "nice looking shirt",
    //     imageUrl: "https://res.cloudinary.com/dsvltch46/image/upload/v1669084409/GRACE%20SHOPPER/MEN/T-Shirts%20and%20Tops/hmgoepprod_acwuxt.jpg",
    //   },
    // ],
  
    // Women_dresses = [
    //   {
    //     name: "Beige Dress",
    //     price: 60,
    //     description: "nice dress to go out ",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084694/GRACE%20SHOPPER/WOMEN/Dresses/hmgoepprod_ey7gre.jpg",
    //   },
    //   {
    //     name: "Dark Grey Dress",
    //     price: 60,
    //     description: "nice dress to go out ",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084690/GRACE%20SHOPPER/WOMEN/Dresses/hmgoepprod_xbssno.jpg",
    //   },
    //   {
    //     name: "Brown Dress",
    //     price: 60,
    //     description: "nice dress to go out ",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084687/GRACE%20SHOPPER/WOMEN/Dresses/hmgoepprod_ha1clv.jpg",
    //   },
    //   {
    //     name: "Black Dress",
    //     price: 60,
    //     description: "nice dress to go out ",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084683/GRACE%20SHOPPER/WOMEN/Dresses/hmgoepprod_acgkn3.jpg",
    //   },
    // ],
    // Women_Lingerie = [
    //   {
    //     name: "Red Bra",
    //     price: 3,
    //     description: "placeholder",
    //     imageUrl: "https://res.cloudinary.com/dsvltch46/image/upload/v1669085108/GRACE%20SHOPPER/WOMEN/Lingerie/hmgoepprod_h1ge1x.jpg",
    //   },
    //   {
    //     name: "Black Bra",
    //     price: 3,
    //     description: "placeholder",
    //     imageUrl: "https://res.cloudinary.com/dsvltch46/image/upload/v1669085105/GRACE%20SHOPPER/WOMEN/Lingerie/hmgoepprod_ehl5c1.jpg",
    //   },
    //   {
    //     name: "Pink Bra",
    //     price: 3,
    //     description: "placeholder",
    //     imageUrl: "https://res.cloudinary.com/dsvltch46/image/upload/v1669085102/GRACE%20SHOPPER/WOMEN/Lingerie/hmgoepprod_kapkga.jpg",
    //   },
    //   {
    //     name: "Dark Dark Grey Bra",
    //     price: 3,
    //     description: "placeholder",
    //     imageUrl: "https://res.cloudinary.com/dsvltch46/image/upload/v1669085100/GRACE%20SHOPPER/WOMEN/Lingerie/hmgoepprod_qutllo.jpg",
    //   },
    // ],
    // Women_Sweaters = [
    //   {
    //     name: "Beige Sweater",
    //     price: 3,
    //     description:
    //       "keeps you nice and warm so you dont steal your boyfriends and cheap for you can get your own",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084988/GRACE%20SHOPPER/WOMEN/Hoodies%20and%20SweatShirts/hmgoepprod_nr8z5z.jpg",
    //   },
    //   {
    //     name: "Blue Sweater",
    //     price: 3,
    //     description:
    //       "keeps you nice and warm so you dont steal your boyfriends and cheap for you can get your own",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084955/GRACE%20SHOPPER/WOMEN/Hoodies%20and%20SweatShirts/hmgoepprod_vnkitn.jpg",
    //   },
    //   {
    //     name: "Pink Sweater",
    //     price: 3,
    //     description:
    //       "keeps you nice and warm so you dont steal your boyfriends and cheap for you can get your own",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084953/GRACE%20SHOPPER/WOMEN/Hoodies%20and%20SweatShirts/hmgoepprod_mkwrzy.jpg",
    //   },
    //   {
    //     name: "Green Sweater",
    //     price: 3,
    //     description:
    //       "keeps you nice and warm so you dont steal your boyfriends and cheap for you can get your own",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084950/GRACE%20SHOPPER/WOMEN/Hoodies%20and%20SweatShirts/hmgoepprod_fpmqpi.jpg",
    //   },
    //   {
    //     name: "Grey Sweater",
    //     price: 3,
    //     description:
    //       "keeps you nice and warm so you dont steal your boyfriends and cheap for you can get your own",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084947/GRACE%20SHOPPER/WOMEN/Hoodies%20and%20SweatShirts/hmgoepprod_sbcrws.jpg",
    //   },
    //   {
    //     name: "Brown Sweater",
    //     price: 3,
    //     description:
    //       "keeps you nice and warm so you dont steal your boyfriends and cheap for you can get your own",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084944/GRACE%20SHOPPER/WOMEN/Hoodies%20and%20SweatShirts/hmgoepprod_lw08fk.jpg",
    //   },
    //   {
    //     name: "White Sweater",
    //     price: 3,
    //     description:
    //       "keeps you nice and warm so you dont steal your boyfriends and cheap for you can get your own",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084939/GRACE%20SHOPPER/WOMEN/Hoodies%20and%20SweatShirts/hmgoepprod_kzhqxb.jpg",
    //   },
    // ],
    // Women_Shirts = [
    //   {
    //     name: "Black and White Blouse",
    //     price: 4,
    //     description: "nice blouse",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084743/GRACE%20SHOPPER/WOMEN/Shirts%20and%20Blouses/hmgoepprod_l2wpeb.jpg",
    //   },
    //   {
    //     name: "Pink Blouse",
    //     price: 4,
    //     description: "nice blouse",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084740/GRACE%20SHOPPER/WOMEN/Shirts%20and%20Blouses/hmgoepprod_rsp4qn.jpg",
    //   },
    //   {
    //     name: "Purpleish Blouse",
    //     price: 4,
    //     description: "nice blouse",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084737/GRACE%20SHOPPER/WOMEN/Shirts%20and%20Blouses/hmgoepprod_zetoob.jpg",
    //   },
    //   {
    //     name: "Brown Blouse",
    //     price: 4,
    //     description: "nice blouse",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084733/GRACE%20SHOPPER/WOMEN/Shirts%20and%20Blouses/hmgoepprod_dwqg8n.jpg",
    //   },
    //   {
    //     name: "WhiteBlouse",
    //     price: 4,
    //     description: "nice blouse",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084730/GRACE%20SHOPPER/WOMEN/Shirts%20and%20Blouses/hmgoepprod_rdimpz.jpg",
    //   },
    //   {
    //     name: "Another White Blause",
    //     price: 4,
    //     description: "nice blouse",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084727/GRACE%20SHOPPER/WOMEN/Shirts%20and%20Blouses/hmgoepprod_xpejva.jpg",
    //   },
    //   {
    //     name: "Black Blause",
    //     price: 4,
    //     description: "nice blouse",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084724/GRACE%20SHOPPER/WOMEN/Shirts%20and%20Blouses/hmgoepprod_ow62c0.jpg",
    //   },
    // ],
    // Women_Jeans = [
    //   {
    //     name: "Sky Blue Jeans",
    //     price: 60,
    //     description: "A nice pair of jeans for the win",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084807/GRACE%20SHOPPER/WOMEN/Jeans/hmgoepprod_x0rqof.jpg",
    //   },
    //   {
    //     name: "Purrple Jeans",
    //     price: 60,
    //     description: "A nice pair of jeans for the win",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084804/GRACE%20SHOPPER/WOMEN/Jeans/hmgoepprod_mjascd.jpg",
    //   },
    //   {
    //     name: "Brown Jeans",
    //     price: 60,
    //     description: "A nice pair of jeans for the win",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084798/GRACE%20SHOPPER/WOMEN/Jeans/hmgoepprod_ksdfsc.jpg",
    //   },
    //   {
    //     name: "Beige Jeans",
    //     price: 60,
    //     description: "A nice pair of jeans for the win",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084795/GRACE%20SHOPPER/WOMEN/Jeans/hmgoepprod_thuvlc.jpg",
    //   },
    //   {
    //     name: "Black Jeans",
    //     price: 60,
    //     description: "A nice pair of jeans for the win",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084791/GRACE%20SHOPPER/WOMEN/Jeans/hmgoepprod_ukbedj.jpg",
    //   },
    // ],
    // Women_Tops = [
    //   {
    //     name: "Blue Shirt",
    //     price: 10,
    //     description: "nice summer shirt",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084879/GRACE%20SHOPPER/WOMEN/Tops/hmgoepprod_mhxvyp.jpg",
    //   },
    //   {
    //     name: "Pink Shirt",
    //     price: 10,
    //     description: "nice summer shirt",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084876/GRACE%20SHOPPER/WOMEN/Tops/hmgoepprod_jgns57.jpg",
    //   },
    //   {
    //     name: "Grey Shirt",
    //     price: 10,
    //     description: "nice summer shirt",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084873/GRACE%20SHOPPER/WOMEN/Tops/hmgoepprod_xndfkb.jpg",
    //   },
    //   {
    //     name: "Brown Shirt",
    //     price: 10,
    //     description: "nice summer shirt",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084868/GRACE%20SHOPPER/WOMEN/Tops/hmgoepprod_w18qpi.jpg",
    //   },
    //   {
    //     name: "White Shirt",
    //     price: 10,
    //     description: "nice summer shirt",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084865/GRACE%20SHOPPER/WOMEN/Tops/hmgoepprod_pji0ik.jpg",
    //   },
    //   {
    //     name: "Black Shirt",
    //     price: 10,
    //     description: "nice summer shirt",
    //     imageUrl:
    //       "https://res.cloudinary.com/dsvltch46/image/upload/v1669084862/GRACE%20SHOPPER/WOMEN/Tops/hmgoepprod_mnnfjb.jpg",
    //   },
    // ],

];

module.exports = {
  Users,
  Products,
};