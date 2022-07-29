const yargs = require("yargs")
const {sequelize} = require("./db/connection.js")
const {createGame, readGames, updateSingle, deleteSingle} = require("./games/functions.js")


const app = async (yargsObj) => {
    await sequelize.sync()
    if (yargsObj.create) {
        await createGame({title: yargsObj.title, genre: yargsObj.genre})
        // This will handle adding a game to the database
    } else if (yargsObj.read) {
        console.log(await readGames())
        // This will handle listing all games within the database
    } else if (yargsObj.update) {
        await updateSingle({title: yargsObj.newTitle, genre: yargsObj.newGenre}, {
            where: {
                title: yargsObj.title
            }
        })
        console.log("Entry updated")
        // This will handle updating a specific game from the database
    } else if (yargsObj.delete) {
        await deleteSingle({
            where: {
                title: yargsObj.title}
            })
            console.log("Entry Deleted")
        // This will handle deleting a specific game from the database
    } else {
        console.log("Invalid input")
    }
}

app(yargs.argv)