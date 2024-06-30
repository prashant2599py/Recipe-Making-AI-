import z from "zod";

export const signupInput = z.object({
    username : z.string().email(),
    password : z.string().min(6),
    name : z.string().optional()
})

export const signinInput = z.object({
    username : z.string().email(),
    password : z.string().min(6),
    name : z.string().optional()
})

export type SigninInput = z.infer<typeof signinInput>
export type SignupInput = z.infer<typeof signupInput>