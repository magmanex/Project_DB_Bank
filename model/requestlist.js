module.exports = (sequelize, type) => {
    return sequelize.define('requestlist', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true

        },
        asset: type.STRING,
        amount: type.INTEGER,
        campaign : type.STRING,
        date: type.DATE
       
    },{
        tableName: 'requestlist',
        createdAt: false,
        updatedAt: false
      })
}