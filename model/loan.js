var Sequelize = require('sequelize');

module.exports = (sequelize, type) => {
    return sequelize.define('loan', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        status : type.STRING,
        amount: type.FLOAT,
        interestrate : type.FLOAT,
        totalamount : type.FLOAT,
        time : type.DATE,
        approval_date : type.DATE
    },{
        tableName: 'loan',
        createdAt: false,
        updatedAt: false
      })
}