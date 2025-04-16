import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import { engine } from "express-handlebars";

// Obtém o caminho do diretório atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const Handlebars = (app) => {
  app.engine(
    "handlebars",
    engine({
      defaultLayout: "main",
      layoutsDir: path.join(__dirname, "..", "views", "layouts"), // Caminho para 'views/layouts'
      partialsDir: path.join(__dirname, "..", "views", "partials"),
    })
  );
  app.set("view engine", "handlebars");
  app.set("views", path.join(__dirname, "..", "views"));
};

export default Handlebars;
