const router = require("express").Router();
const { asyncErrorHandler } = require("./utils");
const prisma = require("../prisma/prisma");

//GET / api/categories
router.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const categories = await prisma.categories.findMany();

    res.send(categories);
  })
);

//GET/api/categories/categoryId
router.get(
  "/:categoryId",
  asyncErrorHandler(async (req, res, next) => {
    const getCategory = await prisma.products.findMany({
      where: {
        category_id: +req.params.categoryId,
      },
    });
    res.send(getCategory);
  })
);
module.exports = router;
