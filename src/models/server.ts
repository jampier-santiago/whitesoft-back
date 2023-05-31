// Packages
import express from "express";
import cors from "cors";

// Routes

// DB
import { dbConnection } from "../db/config";

class Server {
  app = express();
  port;

  valueRoutes: { countries: string; login: string; registers: string };

  constructor() {
    this.port = process.env.PORT ?? 3000;
    this.valueRoutes = {
      countries: "/api/countries",
      login: "/api/login",
      registers: "/api/registers",
    };

    // db
    this.connectDB();

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Parse responses
    this.app.use(express.json());

    // Directorio publico
    this.app.use(express.static("src/public"));
  }

  routes() {
    this.app.use(this.valueRoutes.countries);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`API ready 🤩, PORT = ${this.port}`);
    });
  }

  connectDB() {
    dbConnection();
  }
}

export default Server;
