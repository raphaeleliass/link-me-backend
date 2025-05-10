import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { userRouter } from "./modules/user/user.routes";
import { errorMiddleware } from "./middlewares/error.middleware";
import { linkRouter } from "./modules/link/link.routes";

export const app = express();

app.use(cors());

const limiter = rateLimit({
  limit: 15,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests, try again later please",
});

app.use(limiter);

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/links", linkRouter);

app.use(errorMiddleware);
