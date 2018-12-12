module.exports = (sequelize, type) => {
    return sequelize.define('requestlist_has_customers', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        
    },{
        tableName: 'requestlist_has_customers',
        createdAt: false,
        updatedAt: false
      })
}