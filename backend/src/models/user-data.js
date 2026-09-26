const mongoose = require('mongoose')

const UserModel = mongoose.Schema({
    image:String,
    caption:String
})

module.exports = mongoose.model('user',UserModel)