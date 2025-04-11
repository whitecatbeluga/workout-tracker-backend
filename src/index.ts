import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotevn from "dotenv";
import cors from "cors";

import userRoute from "./routes/user/user-route";
import { UserType } from "./types/user-type";
import { authMiddleware } from "./middleware/auth-middleware";
import workoutRoute from "./routes/workout/workout-route";
import authRoute from "./routes/auth/auth-route";

dotevn.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
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
app.use("/workout", authMiddleware as any, workoutRoute);

app.listen(8080, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
