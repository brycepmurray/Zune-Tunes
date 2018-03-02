let mongoose = require('mongoose')

let schema = new Schema({
    name: { type: String, reuqire: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    profilePic: { type: String, require: true }
})

module.exports = mongoose.model('User', schema)