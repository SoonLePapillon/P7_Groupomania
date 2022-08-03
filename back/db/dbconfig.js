import { Sequelize } from 'sequelize';
import 'dotenv/config'

export default new Sequelize (process.env.DB, process.env.UN, process.env.PASSWORD, { // host / groupomania et root dans le .env vu que ça peut changer
    dialect : 'mysql', 
    host : process.env.HOST
}) 

