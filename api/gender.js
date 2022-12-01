const router = require("express").Router();
const { asyncErrorHandler } = require("./utils");
const prisma = require("../prisma/prisma");
//GET /api/gender
router.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const gender = await prisma.gender.findMany();
    res.send(gender);
  })
);

//Get/api/gender/genderId
router.get(
  "/:genderId",
  asyncErrorHandler(async (req, res, next) => {
    const getGender = await prisma.gender.findUnique({
      where: {
        id: +req.params.genderId,
      },
    });
    res.send(getGender);
  })
);

module.exports = router;