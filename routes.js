const express = require('express')
const { data_pegawai } = require('./data/pegawai')
const DT_pegawai = require('./database/table/dt_pegawai')
const { middleware_checkapikey } = require('./middleware')

// =======================

const get = {
    data: [] || {}
}

const post = {
    payload: ''
}



// ================

const route = express.Router()

.get('/', (req, res) => {
    try {
        
        res.status(200).json({
            message: `${nama_pegawai}`
        })
    } catch (error) {
        res
            .status(500)
            .json({
                message: error.message,
                debug: error.stack,
                route: `${req.method} ${req.path}`
            })
    }
})

.get('/test', (req, res) => {
    try {
        const database_name = process.env.DATABASE_NAME
        res
            .status(200)
            .json({
                database_name
            })

    } catch (error) {
        
    }
})

.get('/data_pegawai', async (req, res) => {
    try {
        const data_pegawai = await DT_pegawai.findAll()

        res
            .status(200)
            .json({
                data: data_pegawai
            })
    } catch (error) {
        if(error instanceof Error) {
            res
                .status(500)
                .json({
                    message: error.message,
                    debug: error.stack
    
                })
        }
    }
})

.post('/data_pegawai', async (req, res) => {
    try {
        const body = req.body
        
        res.status(200).json({
            payload: body
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = {
    route
}