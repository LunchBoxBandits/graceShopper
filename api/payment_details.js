const router = require("express").Router();
const { asyncErrorHandler } = require("./utils");
const prisma = require("../prisma/prisma");

//GET /api/products
router.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const products = await prisma.products.findMany();
    res.send(products);
  })
);
//get //api/id

router.get(
  "/:productId",
  asyncErrorHandler(async (req, res, next) => {
    const productById = await prisma.products.findUnique({
      where: {
        id: +req.params.productId,
      },
    });
    res.send(productById);
  })
);

router.post(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const {order_id, amount, provider, cardNumber,cvc,experationDate,nameOnCard } = req.body
    const postCardInfo = await prisma.payment_Details.create({
      data:{order_id, amount, provider, cardNumber,cvc,experationDate,nameOnCard},
    });
    res.send(postCardInfo);
  })
);

module.exports = router;
