"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connection = new sequelize_1.Sequelize('heroku_66d4f66c8c98815', 'b686a69cf5ae4d', '19d1845f', {
    host: 'us-cdbr-east-04.cleardb.com',
    dialect: 'mysql'
    //storage: __dirname + '/database.db'
});
exports.default = { connection: connection };
