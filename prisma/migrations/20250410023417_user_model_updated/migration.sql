/*
  Warnings:

  - Added the required column `activity_level` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bmi` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_type` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `activity_level` INTEGER NOT NULL,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `age` INTEGER NOT NULL,
    ADD COLUMN `bmi` DOUBLE NOT NULL,
    ADD COLUMN `gender` VARCHAR(191) NOT NULL,
    ADD COLUMN `height` DOUBLE NOT NULL,
    ADD COLUMN `last_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `user_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `user_type` VARCHAR(191) NOT NULL,
    ADD COLUMN `weight` DOUBLE NOT NULL;

-- CreateTable
CREATE TABLE `UserSports` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sportId` INTEGER NOT NULL,
    `sport_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserSportPivot` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `sportId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserSportPivot` ADD CONSTRAINT `UserSportPivot_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserSportPivot` ADD CONSTRAINT `UserSportPivot_sportId_fkey` FOREIGN KEY (`sportId`) REFERENCES `UserSports`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
