import { z } from "zod";
import { linkSchema } from "./link.schema";

export type LinkTypes = z.infer<typeof linkSchema>;
