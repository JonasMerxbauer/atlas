import type { Config } from "drizzle-kit";

export default {
  schema: "./src/main/db/schema.ts",
  out: "./drizzle",
  driver: "better-sqlite",
  dbCredentials: {
    url: "./db.sqlite",
  },
} satisfies Config;
