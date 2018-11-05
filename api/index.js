const Sequelize = require('sequelize')
const moneyStockModel = require('../model/moneystock')
const typeStockModel = require('../model/typestock')

const customersModel = require('../model/customers')
const loanModel = require('../model/loan')
const loanlistModel = require('../model/loanlist')
const loginModel = require('../model/login')
const officerModel = require('../model/officer')
const requestlistModel = require('../model/requestlist')
const calendar_crmModel = require('../model/calendar_crm')
const calendar_debtModel = require('../model/calendar_debt')
const promotionModel = require('../model/promotion')

//import data
const typeStockData = require('../model/data/createTypeStock')
const moneyStockData = require('../model/data/createMoneyStock')
const customerData = require('../model/data/createCustomer')
const requestListData = require('../model/data/createRequestlist')
const loanData = require('../model/data/createLoan')
const loanListData = require('../model/data/createLoanList')
const officerData = require('../model/data/createOfficer')
const calendarData = require('../model/data/createCalendar')


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

const customers= customersModel(sequelize, Sequelize)
const loan= loanModel(sequelize, Sequelize)
const loanlist= loanlistModel(sequelize, Sequelize)
const login= loginModel(sequelize, Sequelize)
const officer= officerModel(sequelize, Sequelize)
const requestlist= requestlistModel(sequelize, Sequelize)
const calendar_crm= calendar_crmModel(sequelize, Sequelize)
const calendar_debt= calendar_debtModel(sequelize, Sequelize)
const promotion= promotionModel(sequelize, Sequelize)


//ORM
//moneyStock
moneyStock.belongsTo(typeStock,{as : 'type', foreignKey: 'typeStock_id'})


//moneyStock.findAll({include: [ { model: typeStock, as: 'type' } ]}).then(function(res) {
function syncDatabase() {
  sequelize.sync({ force: true })
  .then(() => {
    //create Data
    typeStockData.createTypeStock(typeStock)
    moneyStockData.createMoneyStock(moneyStock)
    customerData.createCustomer(customers)
    requestListData.createRequestList(requestlist)
    loanData.createLoan(loan)
    loanListData.createLoanList(loanlist)
    officerData.createOfficer(officer)
    
    console.log(`Database & tables created!`)
  })
}

//Sync database (comment for not use)
syncDatabase();
//
module.exports = {
    moneyStock,
    typeStock,
   
    customers,
    loan,
    loanlist,
    login,
    officer,
    requestlist,
    calendar_crm,
    calendar_debt,
    promotion,
    
}