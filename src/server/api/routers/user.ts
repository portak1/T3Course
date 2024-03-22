import { UserRegisterSchema } from "@/server/types/user";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
    register: publicProcedure
    .input(UserRegisterSchema)
    .mutation(async ({ input }) => { 
        console.log(input);
        return input;
    })
})