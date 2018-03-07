var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schemaName = "Playlist"

var schema = new Schema({
    title: { type: String, require: true },
    // list: { type: Array },
    // userId: { type: ObjectId, ref: models.user.userId }
})


module.exports = mongoose.model('schemaName', schema)