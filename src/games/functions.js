const Game = require("./table.js")

exports.createGame = async (gameObj) => {
    try {
        const newGame = await Game.create(gameObj)
        console.log(newGame)
    } catch (error) {
        console.log(error)
    }
}

exports.readGames = async () => {
    try {
        return await Game.findAll()
    } catch (error) {
        console.log(error)
    }
}

exports.updateSingle = async (newInformation, filterTitle) => {
    try {
        const result = await Game.update(newInformation, filterTitle)
    } catch (error) {
        console.log(error)
    }
}

exports.deleteSingle = async (titleToDelete) => {
    try {
        await Game.destroy(titleToDelete)
            } catch(error) {
        console.log(error)
    }
}