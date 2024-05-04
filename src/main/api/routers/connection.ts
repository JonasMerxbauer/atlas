import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~main/api/trpc";
import { connections } from "~main/db/schema";

export const connectionRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string().min(1), type: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(connections).values({
        name: input.name,
        type: input.type,
      });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.connections.findMany({
      orderBy: (connections, { desc }) => [desc(connections.createdAt)],
    });
  }),
});
