/*
  Warnings:

  - You are about to drop the column `nameOfCard` on the `Payment_Details` table. All the data in the column will be lost.
  - Added the required column `nameOnCard` to the `Payment_Details` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payment_Details" DROP COLUMN "nameOfCard",
ADD COLUMN     "nameOnCard" TEXT NOT NULL;
