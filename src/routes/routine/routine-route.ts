import express from "express";
import * as RoutineController from "../../controller/routine/routine-controler";
const router = express.Router();

router.get("/", RoutineController.getRoutine as any);
router.get("/:id", RoutineController.getById as any);
router.put("/:id", RoutineController.updateRoutine as any);
router.post("/", RoutineController.createRoutine as any);
router.delete("/:id", RoutineController.deleteRoutine as any);
export default router;
