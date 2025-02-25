import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";

export const db = drizzle(process.env.PUBLIC_NEXT_DATABASE_URL!);
