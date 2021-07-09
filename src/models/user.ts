import { STRING } from "sequelize";
import database from '../database/connection';


const userCreate = database.connection.define('user', {
    Name: {
        type: STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },

    Email: {
        type: STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },

    Username: {
        type: STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },

    Password: {
        type: STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },
});

userCreate.sync({ force: false });

export default { userCreate };