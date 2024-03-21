import { z } from 'zod'

const testSchema = z.object({
    text: z.string(),
    cislo: z.number(),
    pravdaNepravda: z.boolean(),
    pole: z.array(z.string()),
    datum: z.date()
})

export type ITest = z.infer<typeof testSchema>