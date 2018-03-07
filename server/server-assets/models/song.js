var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = mongoose.SchemaTypes.ObjectId
var schemaName = "Song"

var schema = new mongoose.Schema({
    title: { type: String, required: true },
    artworkUrl100: { type: String, required: true },
    artist: { type: String },
    albumn: { type: String },
    albumnPice: { type: Number, required: true },
    upvotes: { type: Number, required: true, default: 0 }
});

module.exports = mongoose.model(schemaName, schema)