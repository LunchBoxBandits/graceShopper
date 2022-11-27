const router = require("express").Router();
const { asyncErrorHandler } = require("./utils");
const prisma = require("../prisma/prisma");

//GET /api/orders
router.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const orders = await prisma.orders.findMany({
      include: {
        order_products: {
          include: {
            products: true,
          },
        },
      },
    });
    res.send(orders);
  })
);

//GET /api/orders/cart
router.get(
  "/cart",
  asyncErrorHandler(async (req, res, next) => {
    const cart = await prisma.orders.findMany({
      where: { userId: req.user.id },
      include: {
        order_products: {
          include: {
            products: true,
          },
        },
      },
    });
  })
);

module.exports = router;
