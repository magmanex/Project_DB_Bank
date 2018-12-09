module.exports = (sequelize, type) => {
    return sequelize.define('loanlist', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        amount: type.FLOAT,
        DATE : type.DATE,
        loanleft : type.FLOAT

    },{
        tableName: 'loanlist',
        createdAt: false,
        updatedAt: false
      },
      {
        indexes: [
            {
                unique: true,
                fields: ['id']
            }
        ]
    })
}