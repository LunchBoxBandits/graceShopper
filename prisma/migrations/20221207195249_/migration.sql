/*
  Warnings:

  - A unique constraint covering the columns `[order_id,product_id]` on the table `Order_Products` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Orders` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Payment_Details" ALTER COLUMN "cvc" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Order_Products_order_id_product_id_key" ON "Order_Products"("order_id", "product_id");

-- CreateIndex
CREATE UNIQUE INDEX "Orders_userId_key" ON "Orders"("userId");
