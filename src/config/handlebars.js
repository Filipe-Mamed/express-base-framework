import { engine } from "express-handlebars";
import path from "path";

const Handlebars = (app) => {
  app.engine(
    "handlebars",
    engine({
      defaultLayout: "main", // Layout padrão
      layoutsDir: path.join(__dirname, "..", "views", "layouts"), // Caminho para 'views/layouts'
      partialsDir: path.join(__dirname, "..", "views", "partials"), // Caminho para 'views/partials'
    })
  );

  app.set("view engine", "handlebars");
  app.set("views", path.join(__dirname, "..", "views")); // Caminho para 'views'
};

export default Handlebars;
