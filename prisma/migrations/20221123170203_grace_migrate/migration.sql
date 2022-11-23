/*
  Warnings:

  - A unique constraint covering the columns `[order_id]` on the table `Order_Products` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[product_id]` on the table `Order_Products` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Made the column `order_id` on table `Order_Products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `product_id` on table `Order_Products` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Order_Products" DROP CONSTRAINT "Order_Products_order_id_fkey";

-- DropIndex
DROP INDEX "Order_Products_order_id_product_id_key";

-- AlterTable
ALTER TABLE "Order_Products" ALTER COLUMN "order_id" SET NOT NULL,
ALTER COLUMN "product_id" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Order_Products_order_id_key" ON "Order_Products"("order_id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_Products_product_id_key" ON "Order_Products"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Order_Products" ADD CONSTRAINT "Order_Products_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order_Products" ADD CONSTRAINT "Order_Products_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
