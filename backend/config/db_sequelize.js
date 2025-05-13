const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('projetoAS', 'postgres', '123', {
    host: 'localhost',
    dialect: 'postgres'
});

var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Usuario = require('../models/usuario')(sequelize, Sequelize);
db.Produto = require('../models/produto')(sequelize, Sequelize);

module.exports = db;