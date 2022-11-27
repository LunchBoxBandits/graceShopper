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

module.exports = router;
