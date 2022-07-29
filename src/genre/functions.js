const Genre = require("./table.js")

exports.createGenre = async (genreObj) => {
    try {
        const newGenre = await Genre.create(genreObj)
        console.log(newGenre)
    } catch (error) {
        console.log(error)
    }
}