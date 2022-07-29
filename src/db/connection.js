require("dotenv").config()
const {Sequelize} = require("sequelize")

// const connection = async () => {
// try {
//     await Sequelize.authenticate();
//     console.log("Connection established Successfully")
// } catch (error) {
//     console.log("Connection failed", error)
// }

// }

// connection()

exports.sequelize = new Sequelize(process.env.MYSQL_URI)