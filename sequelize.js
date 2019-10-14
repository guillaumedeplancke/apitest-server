const Sequelize = require('sequelize');
const VersionModel = require('./models/version');
const config = require('./config/db');

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mariadb',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
});

const Version = VersionModel(sequelize, Sequelize);

sequelize.sync({force: false})
    .then(() => {
    console.log('Database & tables created!');
});

module.exports = Version;