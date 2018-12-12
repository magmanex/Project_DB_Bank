module.exports = (sequelize, type) => {
    return sequelize.define('requestlist', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true

        },
        asset: type.STRING,
        amount: type.FLOAT,
        date: type.DATE,
        listapprove : type.STRING
       
    },{
        tableName: 'requestlist',
        createdAt: false,
        updatedAt: false
      })
}