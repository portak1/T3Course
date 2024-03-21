import { UserRegisterSchema } from "@/server/types/user";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const userRouter = createTRPCRouter({
    register: publicProcedure
    .input(UserRegisterSchema)
    .mutation(async ({ input }) => { 
        
        
        return input;
    })
})