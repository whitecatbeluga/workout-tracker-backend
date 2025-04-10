import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotevn from "dotenv";
import cors from "cors";

import userRoute from "./routes/user/user-route";

dotevn.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/", userRoute);

app.listen(8080, () => {
  console.log(`Server is running on http://localhost:8080`);
});
