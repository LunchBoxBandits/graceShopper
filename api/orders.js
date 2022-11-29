const router = require("express").Router();
const { asyncErrorHandler, authRequired } = require("./utils");
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
  authRequired,
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
    res.send(cart);
  })
);
//POST localhost:5000/api/orders/ createOrder
router.post(
  "/createOrder",
  asyncErrorHandler(async (req, res, next) => {
    const createOrder = await prisma.orders.create({
      data: req.body,
    });
    res.send(createOrder);
  })
);

//add product to order

//PATCH localhost:5000/api/orders/updateOrder

router.patch(
  "/:orderId",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const { isCart, total } = req.body;
    const updateOrder = await prisma.orders.update({
      where: {
        id: +req.params.orderId,
      },
      data: req.body,
    });
    res.send(updateOrder);
  })
);

router.delete(
  "/:orderId",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const deleteOrder = await prisma.orders.delete({
      where: {
        id: +req.params.orderId,
      },
    });
    res.send(deleteOrder);
  })
);

module.exports = router;
