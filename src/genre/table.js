const {DataTypes} = require("sequelize")
const {sequelize} = require("../db/connection.js")

const Genre = sequelize.define("Genre", {
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
})

module.exports = Genre