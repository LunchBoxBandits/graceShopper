const router = require("express").Router();
const { asyncErrorHandler } = require("./utils");
const prisma = require("../prisma/prisma");
//GET/api/paymentDetails
router.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const paymentDetails = await prisma.payment_Detail.findUnique();
    res.send(paymentDetails);
  })
);

module.exports = router;
