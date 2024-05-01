import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~main/api/trpc";
import { observable } from "@trpc/server/observable";
import { EventEmitter } from "events";

const ee = new EventEmitter();

export const postRouter = createTRPCRouter({
  greeting: publicProcedure
    .input(z.object({ name: z.string() }))
    .query((req) => {
      const { input } = req;

      ee.emit("greeting", `Greeted ${input.name}`);
      return {
        text: `Hello ${input.name}` as const,
      };
    }),
  subscription: publicProcedure.subscription(() => {
    return observable((emit) => {
      function onGreet(text: string) {
        emit.next({ text });
      }

      ee.on("greeting", onGreet);

      return () => {
        ee.off("greeting", onGreet);
      };
    });
  }),
});
