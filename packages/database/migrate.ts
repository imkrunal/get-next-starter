import "dotenv/config";
import { migrate } from "drizzle-orm/mysql2/migrator";
import { db } from ".";

const main = async () => {
  await migrate(db, { migrationsFolder: "./drizzle" });
};

main();
