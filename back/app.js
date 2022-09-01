import express from "express";
import { sequelize } from "./db/db_init.js";
import postsRoutes from "./routes/postsRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import reactionsRoutes from "./routes/reactionsRoutes.js";
import helmet from "helmet";
import cors from "cors";
import path from "path";
import url from "url";
import { user } from "./db/sequelize.js";
import bcrypt from "bcrypt";
import "dotenv/config";

sequelize
  .sync() // {alter : true} si j'ai besoin de mettre à jour ma BDD suite à un changement au niveau des modèles par ex.
  .then(async () => {
    console.log("Connexion à la BDD réussie");
    const findUserAdmin = await user.findOne({
      where: {
        isAdmin: true,
      },
    });
    if (!findUserAdmin) {
      bcrypt.hash(process.env.ADMINPASSWORD, 10).then((hash) => {
        user.create({
          email: "test@admin.com",
          password: hash,
          firstName: "Adminidatrateur",
          lastName: "Admin",
          isAdmin: true,
        });
      });
    }
  })
  .catch((error) => console.log(error));

const __filename = url.fileURLToPath(import.meta.url); // Obligatoire car j'utilise
const __dirname = path.dirname(__filename); // import et pas require

const app = express();
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(cors());
app.use(express.json({ limit: "50mb" })); // pour parser les données json
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

app.use((req, res, next) => {
  //middleware général sera appliqué à toutes les routes
  res.setHeader("Access-Control-Allow-Origin", "*"); // toutes les origines ont le droit d'accéder à notre API avec '*'
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/auth/", usersRoutes);
app.use("/api/posts/", postsRoutes);
app.use("/api/posts/", reactionsRoutes);

app.listen(process.env.PORT || 3000);
