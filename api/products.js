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
//get //api/products/:productId

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

//get //api/products/category/:categoryId

router.get(
  "/category/:categoryId",
  asyncErrorHandler(async (req, res, next) => {
    const categoryById = await prisma.products.findMany({
      where: {
        category_id: +req.params.categoryId,
      },
    });
    res.send(categoryById);
  })
);

module.exports = router;
