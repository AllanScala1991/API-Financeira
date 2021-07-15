import { STRING } from "sequelize";
import database from '../database/connection';

const typeCreate = database.connection.define("paymentTypes", {
    Name: {
        type: STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },
});

typeCreate.sync({ force: false });

export default { typeCreate };