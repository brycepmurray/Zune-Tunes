var mongoose = require('mongoose')


var schema = newmongoose.Schema({
    title: { type: String, required: true },
    albumnArt: { type: String, required: true },
    artist: { type: String },
    albumn: { type: String },
    albumnPice: { type: Number, required: true },
    upvotes: { type: Number, required: true, default: 0 }
});

module.exports = mongoose.model('Song', schema)