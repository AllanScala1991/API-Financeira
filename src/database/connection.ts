import { Sequelize } from "sequelize";

const connection = new Sequelize('heroku_66d4f66c8c98815', 'b686a69cf5ae4d','19d1845f', {
    host: 'us-cdbr-east-04.cleardb.com',
    dialect: 'mysql'
    //storage: __dirname + '/database.db'
})


export default { connection };