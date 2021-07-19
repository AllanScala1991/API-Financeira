"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connection_1 = __importDefault(require("../database/connection"));
var paymentCreate = connection_1.default.connection.define("payments", {
    Name: {
        type: sequelize_1.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },
    Valor: {
        type: sequelize_1.FLOAT,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },
    PaymentMethod: {
        type: sequelize_1.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },
    Category: {
        type: sequelize_1.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },
    Description: {
        type: sequelize_1.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },
    DatePayment: {
        type: sequelize_1.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },
    Installments: {
        type: sequelize_1.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },
    PaymentRefer: {
        type: sequelize_1.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },
    RegisterRefer: {
        type: sequelize_1.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },
});
paymentCreate.sync({ force: true });
exports.default = { paymentCreate: paymentCreate };
