const router = require('express').Router()

const authRoutes = require('./auth')
const usersRoutes = require('./users')
const playlistRoute = require('./playlists')

module.exports = (db) => {
    router.use('/auth', authRoutes(db))
    router.use('/users', usersRoutes())
    router.use('/playlists', playlistRoute(db))
    return router
}