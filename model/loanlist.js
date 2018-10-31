module.exports = (sequelize, type) => {
    return sequelize.define('loanlist', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        amount: type.INTEGER,
        DATE : type.DATE,
        loanleft : type.INTEGER

    },{
        tableName: 'loanlist',
        createdAt: false,
        updatedAt: false
      })
}