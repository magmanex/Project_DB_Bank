module.exports = (sequelize, type) => {
    return sequelize.define('customerslist', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        

    },{
        tableName: 'customerslist',
        createdAt: false,
        updatedAt: false
      })
}