import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import Handlebars from "./config/handlebars.js";
import routes from "./routes/index.js";
import configPassport from "./config/passport.js";
import { testarConexao } from "./config/testPrismaConnection.js";  // Testa a conexão com o banco de dados


// Configurações do dotenv
dotenv.config();

// Configurações do express
const app = express();

// Configuração do CORS
app.use(
  cors({
    credentials: true, // Permite o envio de cookies
  })
);

// Sessão
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false, // Evita que a sessão seja salva novamente se não for modificada
    saveUninitialized: true, // Evita salvar sessões não inicializadas
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 dia // Define a duração do cookie para 1 dia
      httpOnly: true, // Garante que o cookie só esteja acessível via HTTP(S), e não client-side scripts
      secure: false, // Define o cookie como seguro (deve ser true em produção, com HTTPS)
    },
  })
);

// Inicializa o Passport para autenticação
app.use(passport.initialize());
app.use(passport.session()); // Habilita a persistência da sessão
configPassport(passport);


// Configuração do express para aceitar JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

Handlebars(app);

// Rotas
app.use(routes);

// Porta
const porta = process.env.PORT || 2000;

// Inicia o servidor na porta especificada
app.listen(porta, function () {
  console.log(`🚀 Servidor rodando em http://localhost:${porta}/`);
});
