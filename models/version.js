module.exports = (sequelize, type) => {
    return sequelize.define('version', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        value: type.STRING
    })
};