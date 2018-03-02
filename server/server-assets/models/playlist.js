var mongoose = require('mongoose')
var Songs = require('./song')
var bjectId = mongoose.SchemaTypes.ObjectId


var schema = new mongoose.Schema({
    title: { type: String, require: true },
    list: { type: Array },
    userId: { type: ObjectId, ref: models.user.userId, require: true }
})


module.exports = mongoose.model('Playlist', schema)