import express from 'express';
import Db from './db/dbconfig.js';
import 'dotenv/config';

import postsRoutes from './routes/postsRoutes.js';
import usersRoutes from './routes/usersRoutes.js';

const app = express();

app.use((req, res, next) => { //middleware général sera appliqué à toutes les routes
    res.setHeader('Access-Control-Allow-Origin', '*'); // toutes les origines ont le droit d'accéder à notre API avec '*'
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json()); // pour parser les données json

app.use("/api/posts", postsRoutes);
app.use("/api/auth/", usersRoutes);

Db.sync()
.then(() => 
    console.log("Connexion à la BDD réussie")
)
.catch(
    error => console.log(error)
)


app.listen(process.env.PORT || 3000);