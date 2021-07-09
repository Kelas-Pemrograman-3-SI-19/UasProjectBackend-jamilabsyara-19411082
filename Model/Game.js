const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const GameSchema = new Schema({
    judulGame: {
        type: String
    },
    harga: {
        type: Number
    },
    tahun: {
        type: String,
        default: '2021'
    },
    genre: {
        type: String
    },
    rating: {
        type: Number,
        default: 0
    },
    deskripsi: {
        type: String
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model('game', GameSchema)