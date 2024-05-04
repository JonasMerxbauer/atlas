import { createTRPCRouter, publicProcedure } from "~main/api/trpc";

export const transactionRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.transactions.findMany();
  }),
});
