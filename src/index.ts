import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotevn from "dotenv";
import cors from "cors";

import userRoute from "./routes/user/user-route";
import { UserType } from "./types/user-type";
import { authMiddleware } from "./middleware/auth-middleware";
import authRoute from "./routes/auth/auth-route";
import workoutRoute from "./routes/workout/workout-route";
import routineRoute from "./routes/routine/routine-route";
import exerciseRoute from "./routes/exercise/exercise-route";

dotevn.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

declare global {
  namespace Express {
    interface Request {
      user: UserType;
    }
  }
}

app.use("/auth", authRoute);
app.use("/", userRoute);
app.use("/exercise", authMiddleware as any, exerciseRoute);
app.use("/workout", authMiddleware as any, workoutRoute);
app.use("/routine", authMiddleware as any, routineRoute);

app.listen(8080, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
