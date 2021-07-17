import { STRING, FLOAT } from 'sequelize';
import database from '../database/connection';

const receiveCreate = database.connection.define("receives", {
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

    ReceiveMethod: {
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

    DateReceive: {
        type: STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },

    ReceiveRefer: {
        type: STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },

    RegisterRefer: {
        type: STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },
});

receiveCreate.sync({ force: false });

export default { receiveCreate };