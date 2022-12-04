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

//GET/api/categories/categoryID
// router.get(
//   "/:categoryId",
//   asyncErrorHandler(async (req, res, next) => {
//     const getCategory = await prisma.categories.findUnique({
//       where: {
//         id: +req.params.categoryId,
//       },
//       include: {
//         products: {},
//       },
//     });
//     res.send(getCategory);
//   })
// );
module.exports = router;
