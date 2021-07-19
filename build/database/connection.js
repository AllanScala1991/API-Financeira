"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connection = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/database.db'
});
exports.default = { connection: connection };
