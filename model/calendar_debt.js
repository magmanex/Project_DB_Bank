module.exports = (sequelize, type) => {
    return sequelize.define('calendar_debt', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        
    },{
        tableName: 'calendar_debt',
        createdAt: false,
        updatedAt: false
      })
}