-- CreateTable
CREATE TABLE `UserBadges` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `bardgeId` INTEGER NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Badges` (
    `badgeId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `requirement_type` VARCHAR(191) NOT NULL,
    `requirement_value` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`badgeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserBadges` ADD CONSTRAINT `UserBadges_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserBadges` ADD CONSTRAINT `UserBadges_bardgeId_fkey` FOREIGN KEY (`bardgeId`) REFERENCES `Badges`(`badgeId`) ON DELETE RESTRICT ON UPDATE CASCADE;
