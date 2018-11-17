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
const customerslistModel = require('../model/customerslist')

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
const customerslist= customerslistModel(sequelize, Sequelize)

//ORM


//customerslist
customerslist.belongsTo(customers,{foreignKey: 'customers_id', targetKey: 'id'})
customerslist.belongsTo(loan,{foreignKey: 'loan_id', targetKey: 'id'})


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
loan.belongsTo(officer,{foreignKey:'debt_id' , targetKey: 'id'})
//loan.belongsTo(customers,{foreignKey:'customers_id' , targetKey: 'id'}) //เอาออก



//loanlist
loanlist.belongsTo(loan,{foreignKey:'loan_id' , targetKey:'id'})

//moneystock
moneyStock.belongsTo(loanlist,{foreignKey:'loanlist_id' , targetKey: 'id'})
moneyStock.belongsTo(loanlist,{foreignKey:'loanlist_id_fromloan' , targetKey: 'loan_id'})

//calendar dept
calendar_debt.belongsTo(officer,{foreignKey: 'officer_id' , targetKey: 'id'})
calendar_debt.belongsTo(loan,{foreignKey: 'loan_id' , targetKey: 'id'})





//moneyStock.findAll({include: [ { model: typeStock, as: 'type' } ]}).then(function(res) {
async function create(){
  let a1 =await officerData.createOfficer(officer)
  let a2 =await promotionData.createPromotion(promotion)
  let a3 =await typeStockData.createTypeStock(typeStock)
  let a4 =await customerData.createCustomer(customers)
  let a5 =await moneyStockData.createMoneyStock(moneyStock)
  let a6 =await loanData.createLoan(loan)
  let a7 =await loginData.createLogin(login)
  let a8 =await requestListData.createRequestList(requestlist)
  let a9 =await calendarDeptData.createCalendarDept(calendar_debt)
  let a10 =await loanListData.createLoanList(loanlist)
  let a11 =await calendarCRMData.createCalendarCRM(calendar_crm)
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
    customerslist
    
}