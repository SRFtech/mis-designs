module.exports = (req, res, next) => {
    res.header('Content-Range', 'players 0-20/20')
    next()
}