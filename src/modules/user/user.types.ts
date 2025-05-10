import { z } from "zod";
import { userSchema } from "./user.schema";

export type UserTypes = z.infer<typeof userSchema>;
