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
const customersListModel = require('../model/customers_list')
const assetModel = require('../model/asset')
const requestlist_has_customersModel = require('../model/requestlist_has_customers')


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
const customersListData = require('../model/data/createCustomers_list')



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
const customersList= customersListModel(sequelize, Sequelize)
const asset = assetModel(sequelize, Sequelize)
const requestlist_has_customers = requestlist_has_customersModel(sequelize, Sequelize)


//ORM


//customerslist
customersList.belongsTo(customers,{foreignKey: 'customers_id', targetKey: 'id'})
customersList.belongsTo(loan,{foreignKey: 'loan_id', targetKey: 'id'})


//moneyStock
moneyStock.belongsTo(typeStock,{as : 'type', foreignKey: 'typeStock_id'})

//requestlist
requestlist.belongsTo(promotion,{foreignKey: 'promotion_id' , targetKey: 'id'  })
requestlist.belongsTo(customers,{foreignKey: 'customers_id' ,  targetKey: 'id'  })
//requestlist.belongsTo(promotion,{foreignKey: 'promotion_rate' , targetKey: 'rate'  })
//requestlist.belongsTo(promotion,{foreignKey: 'promotion_duration' , targetKey: 'duration'  })

//login
login.belongsTo(customers,{ foreignKey: 'customers_id' , targetKey: 'id' })
login.belongsTo(officer,{ foreignKey: 'officer_id' ,  targetKey: 'id' })


//calendar crm
calendar_crm.belongsTo(officer,{foreignKey:'officer_id' , targetKey: 'id'})
calendar_crm.belongsTo(requestlist,{ foreignKey: 'requestlist_id' , targetKey: 'id'})


//loan
loan.belongsTo(officer,{foreignKey:'officer_id' , targetKey: 'id'})
//loanlist
loanlist.belongsTo(loan,{foreignKey:'loan_id' , targetKey:'id'})

moneyStock.belongsTo(loanlist,{foreignKey:'loanlist_id' , targetKey: 'id'})
moneyStock.belongsTo(loanlist,{foreignKey:'loanlist_id_fromloan' , targetKey: 'loan_id'})

//calendar dept
calendar_debt.belongsTo(officer,{foreignKey: 'officer_id' , targetKey: 'id'})
calendar_debt.belongsTo(loan,{foreignKey: 'loan_id' , targetKey: 'id'})

//customers list
customersList.belongsTo(customers,{foreignKey: 'customers_id' , targetKey: 'id'})
customersList.belongsTo(loan,{foreignKey: 'loan_id' , targetKey: 'id'})

//asset
asset.belongsTo(requestlist,{foreignKey: 'requestlist_id' , targetKey: 'id'})

//requestlist_has_customers
requestlist_has_customers.belongsTo(requestlist,{foreignKey: 'requestlist_id' , targetKey: 'id'})
requestlist_has_customers.belongsTo(customers,{foreignKey: 'customers_id' , targetKey: 'id'})


//moneyStock.findAll({include: [ { model: typeStock, as: 'type' } ]}).then(function(res) {
async function create(){
  await officerData.createOfficer(officer)
  await promotionData.createPromotion(promotion)
  await typeStockData.createTypeStock(typeStock)
  await customerData.createCustomer(customers)
  await moneyStockData.createMoneyStock(moneyStock)
  await loanData.createLoan(loan)
  await loginData.createLogin(login)
  await requestListData.createRequestList(requestlist)
  await calendarDeptData.createCalendarDept(calendar_debt)
  await loanListData.createLoanList(loanlist)
  await calendarCRMData.createCalendarCRM(calendar_crm)
  await customersListData.createCustomersList(customersList)
  }
function syncDatabase() {
  sequelize.sync({ force: true })
  .then(() => {
    //create Data
    create()

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
    customersList,
    asset,
    requestlist_has_customers
}