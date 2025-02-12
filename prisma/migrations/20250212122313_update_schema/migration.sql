/*
  Warnings:

  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - Added the required column `description` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genre` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "genre" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password";
