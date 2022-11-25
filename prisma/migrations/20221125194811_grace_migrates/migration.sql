/*
  Warnings:

  - Made the column `description` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `imageUrl` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_userId_fkey";

-- DropIndex
DROP INDEX "Order_Products_order_id_key";

-- DropIndex
DROP INDEX "Product_name_key";

-- AlterTable
ALTER TABLE "Orders" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "imageUrl" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
