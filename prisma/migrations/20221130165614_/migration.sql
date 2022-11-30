/*
  Warnings:

  - Made the column `quantity` on table `Order_Products` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `cardNumber` to the `Payment_Details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cvc` to the `Payment_Details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `experationDate` to the `Payment_Details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameOfCard` to the `Payment_Details` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order_Products" ALTER COLUMN "quantity" SET NOT NULL;

-- AlterTable
ALTER TABLE "Payment_Details" ADD COLUMN     "cardNumber" INTEGER NOT NULL,
ADD COLUMN     "cvc" INTEGER NOT NULL,
ADD COLUMN     "experationDate" TEXT NOT NULL,
ADD COLUMN     "nameOfCard" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false;
