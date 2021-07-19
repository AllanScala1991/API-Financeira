"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connection_1 = __importDefault(require("../database/connection"));
var userCreate = connection_1.default.connection.define('user', {
    Name: {
        type: sequelize_1.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },
    Email: {
        type: sequelize_1.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },
    Username: {
        type: sequelize_1.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },
    Password: {
        type: sequelize_1.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },
});
userCreate.sync({ force: false });
exports.default = { userCreate: userCreate };
