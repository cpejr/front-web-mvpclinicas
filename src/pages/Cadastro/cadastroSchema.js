import { z } from "zod";

export const cadastroSchema = z
  .object({
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
    senha: z
      .string({ required_error: "O campo deve ser preenchido" })
      .min(5, { message: "A senha deve possuir, no mínimo, 5 caracteres" }),
    confirmacao_senha: z
      .string({ required_error: "O campo deve ser preenchido" })
      .min(1, { message: "O campo deve ser preenchido" }),
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
  })
  .superRefine(({ senha, confirmacao_senha }, ctx) => {
    if (senha !== confirmacao_senha) {
      ctx.addIssue({
        code: "custom",
        message: "As senhas devem ser iguais",
        path: ["confirmacao_senha"],
      });
    }
  });
