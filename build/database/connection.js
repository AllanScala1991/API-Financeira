"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connection = new sequelize_1.Sequelize('myexpensesapp', 'myexpensesapp', 'allan100291', {
    host: 'mysql.myexpenses-app-api.kinghost.net',
    dialect: 'mysql'
    //storage: __dirname + '/database.db'
});
exports.default = { connection: connection };
