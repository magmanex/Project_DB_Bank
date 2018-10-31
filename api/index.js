const Sequelize = require('sequelize')
const moneyStockModel = require('../model/moneystock')
const typeStockModel = require('../model/typestock')
const calendarModel = require('../model/calendar')
const customersModel = require('../model/customers')
const loanModel = require('../model/loan')
const loanlistModel = require('../model/loanlist')
const loginModel = require('../model/login')
const officerModel = require('../model/officer')
const requestlistModel = require('../model/requestlist')
const trackinghasloanModel = require('../model/tracking_has_loan')
const trackingModel = require('../model/tracking')


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
const calendar= calendarModel(sequelize, Sequelize)
const customers= customersModel(sequelize, Sequelize)
const loan= loanModel(sequelize, Sequelize)
const loanlist= loanlistModel(sequelize, Sequelize)
const login= loginModel(sequelize, Sequelize)
const officer= officerModel(sequelize, Sequelize)
const requestlist= requestlistModel(sequelize, Sequelize)
const tracking_has_loan= trackinghasloanModel(sequelize, Sequelize)
const tracking= trackingModel(sequelize, Sequelize)



//ORM
moneyStock.belongsTo(typeStock,{as : 'type', foreignKey: 'typeStock_id'})
  
//moneyStock.findAll({include: [ { model: typeStock, as: 'type' } ]}).then(function(res) {
 //   console.log(JSON.stringify(res))});
function syncDatabase() {
  sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })
}

//Sync database (comment for not use)
syncDatabase();
//
module.exports = {
    moneyStock,
    typeStock,
    calendar,
    customers,
    loan,
    loanlist,
    login,
    officer,
    requestlist,
    tracking_has_loan,
    tracking
}