// TODO: Crear modelo de datos de Reserva
const {DataTypes, sequelize} = require('../db.js');

const Reserva = sequelize.define('Reserva', {
id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
nombre: {
    type: DataTypes.STRING,
    allowNull: false
},
numero: {
    type: DataTypes.INTEGER,
    allowNull: false
},
fecha: {
    type: DataTypes.DATE,
    allowNull: false
}
});

Reserva.sync();

module.exports = Reserva;
