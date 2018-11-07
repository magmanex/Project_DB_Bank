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
const loginData = require('../model/data/createLogin')
const officerData = require('../model/data/createOfficer')
const calendarCRMData = require('../model/data/createCalendar_crm')
const calendarDeptData = require('../model/data/createCalendar_dept')
const promotionData = require('../model/data/createPromotion')



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

//requestlist
requestlist.belongsTo(promotion,{foreignKey: 'promotion_id' , targetKey: 'id'  })
requestlist.belongsTo(customers,{foreignKey: 'customers_id' ,  targetKey: 'id'  })

//login
login.belongsTo(customers,{ foreignKey: 'customers_id' , targetKey: 'id' })
login.belongsTo(officer,{ foreignKey: 'officer_id' ,  targetKey: 'id' })

//calendar crm
calendar_crm.belongsTo(officer,{foreignKey:'officer_id' , targetKey: 'id'})
calendar_crm.belongsTo(requestlist,{ foreignKey: 'requestlist_id' , targetKey: 'id'})

//calendar dept
calendar_debt.belongsTo(officer,{foreignKey: 'officer_id' , targetKey: 'id'})
calendar_debt.belongsTo(loan,{foreignKey: 'loan_id' , targetKey: 'id'})

//loan
loan.belongsTo(officer,{foreignKey:'officer_id' , targetKey: 'id'})
loan.belongsTo(officer,{foreignKey:'debt_id' , targetKey: 'id'})

//loanlist
loanlist.belongsTo(loan,{foreignKey:'loan_id' , targetKey:'id'})

//moneystock
moneyStock.belongsTo(loanlist,{foreignKey:'loanlist_id' , targetKey: 'id'})
moneyStock.belongsTo(loanlist,{foreignKey:'loanlist_id_fromloan' , targetKey: 'loan_id'})


//moneyStock.findAll({include: [ { model: typeStock, as: 'type' } ]}).then(function(res) {
function syncDatabase() {
  sequelize.sync({ force: true })
  .then(() => {
    //create Data
    officerData.createOfficer(officer)
    promotionData.createPromotion(promotion)
    typeStockData.createTypeStock(typeStock)
    moneyStockData.createMoneyStock(moneyStock)
    customerData.createCustomer(customers)
    loanData.createLoan(loan)
    loanListData.createLoanList(loanlist)
    loginData.createLogin(login)
    requestListData.createRequestList(requestlist)
    calendarDeptData.createCalendarDept(calendar_debt)
    calendarCRMData.createCalendarCRM(calendar_crm)

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