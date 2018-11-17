module.exports = (sequelize, type) => {
    return sequelize.define('moneyStock', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        amount: type.FLOAT,
        total : type.FLOAT
    },{
        tableName: 'moneyStock',
        createdAt: false,
        updatedAt: false
      })
}