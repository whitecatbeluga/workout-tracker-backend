import express from "express";
import * as UserController from "../../controller/user/user-controller";

const router = express.Router();

router.get("/", UserController.getUser as any);
export default router;
