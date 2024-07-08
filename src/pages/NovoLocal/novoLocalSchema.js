import { z } from "zod";

export const novoLocalSchema = z.object({
  nome: z
    .string({ required_error: "O campo deve ser preenchido" })
    .min(1, { message: "O campo deve ser preenchido" }),
  tipo: z
    .string({ message: "O campo deve ser preenchido" })
    .min(1, { message: "O campo deve ser preenchido" }),
  telefone: z
    .string({ required_error: "O campo deve ser preenchido" })
    .min(1, { message: "O campo deve ser preenchido" }),
  setor: z
    .string({ required_error: "O campo deve ser preenchido" })
    .min(1, { message: "O campo deve ser preenchido" }),
  empresa: z
    .string({ required_error: "O campo deve ser preenchido" })
    .min(1, { message: "A senha deve possuir, no mínimo, 5 caracteres" }),
  endereco: z
    .string({ required_error: "O campo deve ser preenchido" })
    .min(1, { message: "O campo deve ser preenchido" }),
});
