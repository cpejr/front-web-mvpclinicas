import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "O campo deve ser preenchido" })
    .min(1, { message: "O campo deve ser preenchido" })
    .email("E-mail inválido"),
  senha: z
    .string({ required_error: "O campo deve ser preenchido" })
    .min(1, { message: "O campo deve ser preenchido" }),
});
