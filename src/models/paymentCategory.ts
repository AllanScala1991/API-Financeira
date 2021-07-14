import { STRING } from "sequelize";
import database from '../database/connection';

const categoryCreate = database.connection.define('paymentCategory', {
    Name: {
        type: STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },
});

categoryCreate.sync({ force: true });

export default { categoryCreate };