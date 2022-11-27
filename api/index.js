const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/products", require("./products"));
router.use("/orders", require("./orders"));
router.use("/order_products", require("./order_products"));
router.use("/categories", require("./categories"));
router.use("/gender", require("./gender"));
router.use("/payment_details", require("./payment_details"));

module.exports = router;
