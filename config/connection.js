const Sequelize = require('sequelize');
//Environment variable
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
    Sequelize = new Sequelize(process.env.JAWSDB_URL);
}
else {
    sequelize = new Sequelize(
        process.env.DB_NAME, process.env.DB_USER,
        null,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306,
        }
    );
}

module.exports = sequelize;