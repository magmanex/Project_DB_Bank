module.exports = (sequelize, type) => {
    return sequelize.define('calendar_crm', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        
    },{
        tableName: 'calendar_crm',
        createdAt: false,
        updatedAt: false
      })
}