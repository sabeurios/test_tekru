const Sequelize = require("sequelize")
module.exports = Sequelize.define("User", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: { type: Sequelize.STRING },
    family_name: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    last_login_date: { type: Sequelize.DATE, allowNull: true },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    updated_at: { type: Sequelize.DATE, allowNull: true }
})