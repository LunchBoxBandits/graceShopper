const router = require("express").Router();
const { asyncErrorHandler } = require("./utils");
const prisma = require("../prisma/prisma");

//POST /api/order_products/:order_id/:product_id
// adding a product to an order
router.post(
  "/:order_id/:product_id",
  asyncErrorHandler(async (req, res, next) => {
    const { order_id, product_id } = req.params;
    const oP = await prisma.order_Products.create({
      data: {
        order_id: +order_id,
        product_id: +product_id,
      },
    });
    res.send(oP);
  })
);

//DELETE /api/order_products/:order_id/:product_id
// Remove a product from order

router.delete(
  "/:order_id/:product_id",
  asyncErrorHandler(async (req, res, next) => {
    const { order_id, product_id } = req.params;
    const oP = await prisma.order_Products.delete({
      where: { order_id: +order_id },
      where: { product_id: +product_id },
    });
  })
);

module.exports = router;
