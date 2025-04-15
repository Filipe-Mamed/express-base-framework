import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcryptjs";
import prisma from "./database.js"; // Conexão com o banco (Prisma) Prisma não gerado descomente quando for usar

// Estratégia Local (para autenticação por email e senha)
export default function configPassport(passport) {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email", // Definindo o campo 'email' como usuário para login
        passwordField: "senha", // Definindo o campo 'senha' para autenticação
      },
      async (email, senha, done) => {
        try {
          // Encontrar o usuário pelo e-mail
          const usuario = await prisma.usuario.findUnique({
            where: { email },
          });

          // Se o usuário não existir
          if (!usuario) {
            return done(null, false, { message: "Email não encontrado" });
          }

          // Comparar a senha usando bcrypt
          const senhaValida = await bcrypt.compare(senha, usuario.senha);
          if (!senhaValida) {
            return done(null, false, { message: "Senha incorreta" });
          }

          // Se tudo estiver correto, retorna o usuário
          return done(null, usuario);
        } catch (err) {
          // Em caso de erro, retorna o erro
          return done(err);
        }
      }
    )
  );

  // Serialização do usuário (armazena o ID no cookie)
  passport.serializeUser((usuario, done) => {
    done(null, usuario.id); // Armazena o ID do usuário na sessão
  });

  // Desserialização do usuário (recupera os dados completos com base no ID)
  passport.deserializeUser(async (id, done) => {
    try {
      // Buscando o usuário com base no ID
      const usuario = await prisma.usuario.findUnique({
        where: { id },
      });

      // Se encontrar o usuário, passa o objeto completo para a sessão
      done(null, usuario);
    } catch (err) {
      done(err);
    }
  });
}
