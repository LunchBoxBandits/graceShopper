const prisma = require("../prisma/prisma");

const {
  Users,
  Products,
  Orders,
  Order_Products,
  Payment_Details,
  Categories,
  Gender,
} = require("./seedData");

const seedDb = async () => {
  //seeding users
  console.log("creating Users");
  await Promise.all(
    Users.map(async (user) => {
      return prisma.users.create({
        data: user,
      });
    })
  );
  console.log("Finished creating users");

  //seeding our Categories
  console.log("creating Categories");
  await Promise.all(
    Categories.map(async (cat) => {
      return prisma.Categories.create({
        data: cat,
      });
    })
  );

  console.log("Finished creating Categories");

  //seeding our Gender
  console.log("creating Gender");
  await Promise.all(
    Gender.map(async (gen) => {
      return prisma.Gender.create({
        data: gen,
      });
    })
  );

  console.log("Finished creating Gender");

  //seeding our product
  console.log("Creating our Product");
  await Promise.all(
    Products.map(async (pro) => {
      return prisma.Products.create({
        data: pro,
      });
    })
  );
  console.log("Finished creating Product");

  //seeding our Orders
  console.log("creating Orders");
  await Promise.all(
    Orders.map(async (order) => {
      return prisma.Orders.create({
        data: order,
      });
    })
  );

  console.log("Finished creating Orders");

  //seeding our Order_Products
  console.log("creating our Orders_Products");
  await Promise.all(
    Order_Products.map(async (oP) => {
      return prisma.Order_Products.create({
        data: oP,
      });
    })
  );

  console.log("Finished creating Orders_Products");

  //seeding our Payment_Details
  console.log("creating Payment_Details");
  await Promise.all(
    Payment_Details.map(async (payment) => {
      return prisma.payment_Details.create({
        data: payment,
      });
    })
  );

  console.log("Finished creating Payment_Details");
};

const initDb = async () => {
  try {
    await seedDb();
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

initDb();
