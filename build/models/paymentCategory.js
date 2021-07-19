"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connection_1 = __importDefault(require("../database/connection"));
var categoryCreate = connection_1.default.connection.define('paymentCategory', {
    Name: {
        type: sequelize_1.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },
});
categoryCreate.sync({ force: true });
exports.default = { categoryCreate: categoryCreate };
