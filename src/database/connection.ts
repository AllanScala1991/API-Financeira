import { Sequelize } from "sequelize";

const connection = new Sequelize('myexpensesapp', 'myexpensesapp','allan100291', {
    host: 'mysql.myexpenses-app-api.kinghost.net',
    dialect: 'mysql'
    //storage: __dirname + '/database.db'
})


export default { connection };