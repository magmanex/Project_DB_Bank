module.exports = (sequelize, type) => {
    return sequelize.define('calendar', {
        
        officer_id: type.INTEGER,
        weekdays : type.DATETIME
    },{
        tableName: 'calendar',
        createdAt: false,
        updatedAt: false
      })
}