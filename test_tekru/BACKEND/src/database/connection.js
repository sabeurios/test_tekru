const Sequelize = require("sequelize")

const sequelize = new Sequelize("tekru_test_db", 'root', '',
    {
        host: '127.0.0.1',
        dialect: "mysql",
        operatorsAliases: false
    })

mudules.exports = sequelize
global.sequelize = sequelize