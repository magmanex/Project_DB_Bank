module.exports = (sequelize, type) => {
    return sequelize.define('calendar', {
        
        
    },{
        tableName: 'calendar',
        createdAt: false,
        updatedAt: false
      })
}