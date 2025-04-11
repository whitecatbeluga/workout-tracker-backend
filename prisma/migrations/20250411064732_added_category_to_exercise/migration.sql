/*
  Warnings:

  - A unique constraint covering the columns `[routineId,exerciseId]` on the table `RoutineExercisePivot` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[workoutId,exerciseId]` on the table `WorkoutExercisePivot` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `exercise` ADD COLUMN `category` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `RoutineExercisePivot_routineId_exerciseId_key` ON `RoutineExercisePivot`(`routineId`, `exerciseId`);

-- CreateIndex
CREATE UNIQUE INDEX `WorkoutExercisePivot_workoutId_exerciseId_key` ON `WorkoutExercisePivot`(`workoutId`, `exerciseId`);
