import { z } from "zod";

export const updateSchema = z.object({
  nome: z
    .string({ required_error: "O campo deve ser preenchido" })
    .min(1, { message: "O campo deve ser preenchido" }),
  data_nascimento: z
    .string({ message: "O campo deve ser preenchido" })
    .min(1, { message: "O campo deve ser preenchido" }),
  email: z
    .string({ required_error: "O campo deve ser preenchido" })
    .min(1, { message: "O campo deve ser preenchido" })
    .email("E-mail inválido"),
  formacao: z
    .string({ required_error: "O campo deve ser preenchido" })
    .min(1, { message: "O campo deve ser preenchido" }),
  registro: z
    .string({ required_error: "O campo deve ser preenchido" })
    .min(3, { message: "O campo deve ser preenchido" })
    .refine((val) => !isNaN(Number(val)), {
      message: "O campo deve ser um número",
    }),
  uni_federativa: z
    .string({ required_error: "O campo deve ser preenchido" })
    .min(1, { message: "O campo deve ser preenchido" }),
  telefone: z
    .string({ required_error: "O campo deve ser preenchido" })
    .min(1, { message: "O campo deve ser preenchido" }),
});
