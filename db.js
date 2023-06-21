//Se importan las librerias con sus respectivas clases

const {DataTypes, sequelize} = require('sequelize');

//Instancia conexión base de datos
const sequelize = new Sequelize(
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    process.env.DB_NAME,
    process.env.PORT,
    {
        host: process.env.DB_HOST
    });

    //Se exportan las conexiones
    module.exports = {
        sequelize
        DataTypes
    }

