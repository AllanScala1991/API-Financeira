import { Sequelize } from "sequelize";

const connection = new Sequelize('your database', 'your login','your password', {
    host: 'your host',
    dialect: 'mysql'
    //storage: __dirname + '/database.db'
})


export default { connection };