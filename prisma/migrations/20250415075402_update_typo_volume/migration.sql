/*
  Warnings:

  - You are about to drop the column `volumn` on the `workout` table. All the data in the column will be lost.
  - Added the required column `volume` to the `Workout` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `workout` DROP COLUMN `volumn`,
    ADD COLUMN `volume` INTEGER NOT NULL;
