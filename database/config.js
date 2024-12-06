const { Sequelize } = require('sequelize')

const db_config = new Sequelize('db_test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true
})

db_config.sync()

module.exports = {
    db_config
}