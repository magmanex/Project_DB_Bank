module.exports = (sequelize, type) => {
    return sequelize.define('moneyStock', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        amount: type.INTEGER,
        total : type.INTEGER
    },{
        tableName: 'moneyStock',
        createdAt: false,
        updatedAt: false
      })
}