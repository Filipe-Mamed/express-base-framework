// Configura as rotas para Login e Registrar
import usuarioRoute from "./usuarioRoute.js";

const routes = (app) => {
  app.use("/usuario", usuarioRoute); // Rota para Usuário
};

export default routes;

