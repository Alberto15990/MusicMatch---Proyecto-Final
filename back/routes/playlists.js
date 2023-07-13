
const router = require('express').Router()

const playlistControllers = require('../controllers/playlist/getPlaylist')


module.exports = (db) => {

    router.get('/',playlistControllers.getPlaylist )


    return router
}
