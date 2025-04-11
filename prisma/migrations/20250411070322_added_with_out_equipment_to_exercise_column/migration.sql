/*
  Warnings:

  - Added the required column `with_out_equipment` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `exercise` ADD COLUMN `with_out_equipment` BOOLEAN NOT NULL;
