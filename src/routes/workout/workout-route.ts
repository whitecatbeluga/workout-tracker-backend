import express from "express";
import * as WorkoutController from "../../controller/workout/workout-controller";
const router = express.Router();

router.get("/", WorkoutController.getWorkout as any);
router.get("/:id", WorkoutController.getById as any);
router.put("/:id", WorkoutController.updateWorkout as any);
router.post("/", WorkoutController.createWorkout as any);
router.delete("/:id", WorkoutController.deleteWorkout as any);
export default router;
