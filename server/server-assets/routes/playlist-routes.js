var Songs = require('../models/song')
var router = require('express').Router()
var Playlists = require('../models/playlist')

// save for later when have more user functionality

// router.post('/mytunes', (req, res, next) => {
//         Playlist.create(req.body)
//             .then(playlist => {
//                 res.send(playlist)
//             })
//             .catch(err => {
//                 res.status(400).send({ Error: err })
//             })
//     }),

//     router.delete('/mytunes/:id', (req, res, next) => {
//         Playlist.findByIdAndRemove(req.params.id)
//             .then(() => {
//                 res.send({ message: 'playlist sucesfully deleted' })
//             })
//             .catch(err => {
//                 res.status(400).send({ Error: err })
//             })
//     }),

router.get('/mytunes/playlist', (req, res, next) => {
    Playlist.find()
        .then(playlist => {
            res.send(playlist)
        })
        .catch(next)
})

module.exports = { router }