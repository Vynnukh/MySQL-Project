const {DataTypes} = require("sequelize")
const {sequelize} = require("../db/connection.js")

const Game = sequelize.define("Game", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    genre: {
        type: DataTypes.STRING,
        defaultValue: "Not Specified"
    }
})

module.exports = Game