import express from 'express';
import routes from './routes/routes.js';
import Db from './db/dbconfig.js';
// import http from 'http';
import 'dotenv/config';

const app = express();
app.use(express.json()); // pour parser les données json
app.use(routes);

Db.sync()
.then(() => 
    console.log("Connexion à la BDD réussie")
)
.catch(
    error => console.log(error)
)

/* app.set('port', process.env.PORT || 3000);
const server = http.createServer(app); */

app.listen(process.env.PORT || 3000);