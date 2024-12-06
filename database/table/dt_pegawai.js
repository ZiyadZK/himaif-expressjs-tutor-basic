const { DataTypes } = require("sequelize");
const { db_config } = require("../config");

const DT_pegawai = db_config.define('DT_Pegawai', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    aktif: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'dt_pegawai',
    timestamps: true
})

DT_pegawai.sync({ alter: true })

module.exports = DT_pegawai