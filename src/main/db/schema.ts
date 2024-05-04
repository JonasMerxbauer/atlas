import { sql } from "drizzle-orm";
import { text, integer, sqliteTable, int } from "drizzle-orm/sqlite-core";
import { db } from ".";

export const connections = sqliteTable("connections", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }).notNull(),
  type: text("type", { length: 256 }).notNull(),
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: int("updatedAt", { mode: "timestamp" }),
});

export const transactions = sqliteTable("transactions", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  amount: integer("amount", { mode: "number" }),
  currency: text("currency", { length: 256 }),
  nativeAmount: integer("native_amount", { mode: "number" }),
  nativeCurrency: text("native_currency", { length: 256 }),
  transactionDate: int("transaction_date", { mode: "timestamp" }),
  type: text("type", { length: 256 }),
  status: text("status", { length: 256 }),
  connectionId: int("connectionId", { mode: "number" }),
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: int("updatedAt", { mode: "timestamp" }),
});

export type Transactions = NonNullable<
  NonNullable<
    Parameters<(typeof db)["query"]["transactions"]["findFirst"]>[0]
  >["columns"]
>;

export type RequiredTransaction = {
  [K in keyof NonNullable<Transactions>]-?: NonNullable<Transactions>[K];
};
