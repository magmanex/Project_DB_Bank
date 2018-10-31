module.exports = (sequelize, type) => {
    return sequelize.define('requestlist', {
        asset: {
          type: type.STRING,
          primaryKey: true,
          
        },
        amount: type.INTEGER,
        campaign : type.STRING,
        customer_id : type.INTEGER
    },{
        tableName: 'requestlist',
        createdAt: false,
        updatedAt: false
      })
}