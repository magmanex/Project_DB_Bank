const Sequelize = require('sequelize')
const moneyStockModel = require('../model/moneystock')
const typeStockModel = require('../model/typestock')


const sequelize = new Sequelize('banking', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
})

const moneyStock = moneyStockModel(sequelize, Sequelize)
const typeStock= typeStockModel(sequelize, Sequelize)


//ORM
moneyStock.belongsTo(typeStock,{as : 'type', foreignKey: 'typeStock_id'})
  
//moneyStock.findAll({include: [ { model: typeStock, as: 'type' } ]}).then(function(res) {
 //   console.log(JSON.stringify(res))});

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
    moneyStock,
    typeStock,
}