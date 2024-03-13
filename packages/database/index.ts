import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";

import { Pool } from "pg";

const connection = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(connection, { schema });
