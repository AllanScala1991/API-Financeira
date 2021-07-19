"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connection_1 = __importDefault(require("../database/connection"));
var receiveCreate = connection_1.default.connection.define("receives", {
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
    ReceiveMethod: {
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
    DateReceive: {
        type: sequelize_1.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },
    ReceiveRefer: {
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
receiveCreate.sync({ force: false });
exports.default = { receiveCreate: receiveCreate };
