const yargs = require("yargs")
const {sequelize} = require("./db/connection.js")
const {createGenre} = require("./genre/functions.js")

const app2 = async (yargsObj) => {
    await sequelize.sync()
    if (yargsObj.add) {
        await createGenre({genre: yargsObj.genre})
        // This should handle creating a new genre in the genre table
    } else if (yargsObj.read) {
        // This should handle listing the genres within the table
    } else if (yargsObj.update) {
        // This should handle updating a genre within the table
    } else if (yargsObj.delete) {
        // This should handle deleting a genre within the table
    } else {
        console.log("Invalid input")
    }
}

app2(yargs.argv)