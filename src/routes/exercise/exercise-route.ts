import express from "express";

import * as ExerciseController from "../../controller/exercise/exercise-controller";

const router = express.Router();

router.get("/", ExerciseController.getExercises as any);

export default router;
