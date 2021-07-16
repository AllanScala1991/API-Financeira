import { STRING, FLOAT } from "sequelize";
import database from '../database/connection';

const paymentCreate = database.connection.define("payments", {
    Name: {
        type: STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },

    Valor: {
        type: FLOAT,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },

    PaymentMethod: {
        type: STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },

    Category: {
        type: STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },

    Description: {
        type: STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },

    DatePayment: {
        type: STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },

    Installments: {
        type: STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },

    PaymentRefer: {
        type: STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },

    RegisterRefer:  {
        type: STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },
});

paymentCreate.sync({ force: true });

export default { paymentCreate };