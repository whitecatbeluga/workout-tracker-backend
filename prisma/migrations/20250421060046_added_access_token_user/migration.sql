/*
  Warnings:

  - Added the required column `access_token` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `access_token` TEXT NOT NULL;
