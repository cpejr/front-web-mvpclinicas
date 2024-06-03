import { z } from "zod";

export const cadastroSchema = z.object({
  email: z
    .string({ required_error: "O campo deve ser preenchido" })
    .min(1, { message: "O campo deve ser preenchido" })
    .email("E-mail inválido"),
  senha: z
    .string({ required_error: "O campo deve ser preenchido" })
    .min(1, { message: "O campo deve ser preenchido" }),
  confirmacao_senha: z
    .string({ required_error: "O campo deve ser preenchido" })
    .min(1, { message: "O campo deve ser preenchido" }),
  nome: z
    .string({ required_error: "O campo deve ser preenchido" })
    .min(1, { message: "O campo deve ser preenchido" }),
  formacao: z
    .string({ required_error: "O campo deve ser preenchido" })
    .min(1, { message: "O campo deve ser preenchido" }),
  data_nascimento: z
    .string({ required_error: "O campo deve ser preenchido" })
    .min(1, { message: "O campo deve ser preenchido" }),
  registro: z
    .string({ required_error: "O campo deve ser preenchido" })
    .min(1, { message: "O campo deve ser preenchido" }),
  uni_federativa: z
    .string({ required_error: "O campo deve ser preenchido" })
    .min(1, { message: "O campo deve ser preenchido" }),
  telefone: z
    .string({ required_error: "O campo deve ser preenchido" })
    .min(1, { message: "O campo deve ser preenchido" }),
});
