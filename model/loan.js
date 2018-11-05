module.exports = (sequelize, type) => {
    return sequelize.define('loan', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        status : type.STRING,
        amount: type.INTEGER,
        interestrate : type.INTEGER,
        totalamount : type.INTEGER,
        time : type.DATE,
        debt_id : type.INTEGER
       

    },{
        tableName: 'loan',
        createdAt: false,
        updatedAt: false
      })
}