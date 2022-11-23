const prisma = require("../prisma/prisma");

const { Users, Products } = require("./seedData");

const seedDb = async () => {
  //seeding users
  console.log("creating Users");
  await Promise.all(
    Users.map(async (user) => {
      return prisma.Users.create({
        data: user,
      });
    })
  );
  console.log("finished doing users");

  //seeding our product
  console.log("Creating our Product");
    await Promise.all(
        Products.map(async(pro)=>{
            return prisma.Product.create({
                data:pro,
            })
        })
    )




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
