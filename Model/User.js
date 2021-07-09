const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username:{
        type: String
    },
    namalengkap:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    level:{
        type: Number,
        // level 1 = Admin, level 2 = User Biasa
        default: 2
    }
})

module.exports = mongoose.model('user', UserSchema)