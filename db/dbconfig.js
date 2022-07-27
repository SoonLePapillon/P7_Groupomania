import { Sequelize } from 'sequelize';
import 'dotenv/config'

export default new Sequelize ('groupomania', 'root', process.env.PASSWORD, {
    dialect : 'mysql', 
    host : 'localhost'}
    ) 

