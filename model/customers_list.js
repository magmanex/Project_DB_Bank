module.exports = (sequelize, type) => {
    return sequelize.define('customers_list', {
        
        
    },{
        tableName: 'customers_list',
        createdAt: false,
        updatedAt: false
      })
}