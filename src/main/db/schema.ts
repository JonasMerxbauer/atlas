import { sql } from "drizzle-orm";
import { text, integer, sqliteTable, int } from "drizzle-orm/sqlite-core";

export const connections = sqliteTable("connections", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }),
  type: text("type", { length: 256 }),
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: int("updatedAt", { mode: "timestamp" }),
});

export const transactions = sqliteTable("transactions", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }),
  amount: integer("amount", { mode: "number" }),
  currency: text("currency", { length: 256 }),
  type: text("type", { length: 256 }),
  connectionId: int("connectionId", { mode: "number" }),
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: int("updatedAt", { mode: "timestamp" }),
});
