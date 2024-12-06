const express = require('express')
const { route } = require('./routes')
const { middleware_checkapikey } = require('./middleware')
const dotenv = require('dotenv').config()

const port = 8000
const app = express()

app.use(express.urlencoded({ extended: true, limit: '50mb'}))

app.use('/', middleware_checkapikey, route)

app.use((req, res, next) => {
    return res.status(404).json({
        route: `${req.method} ${req.path}`,
        message: 'Route is not found!'
    })
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

