import * as yup from "yup";

// Definindo o esquema de validação para o modelo Usuario
const usuarioSchema = yup.object().shape({
  nome: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: yup
    .string()
    .required("O e-mail é obrigatório")
    .email("O e-mail deve ser válido"),
  senha: yup
    .string()
    .required("A senha é obrigatória")
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export default usuarioSchema;
