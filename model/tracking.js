module.exports = (sequelize, type) => {
    return sequelize.define('tracking', {
        priority: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        officer_id: type.INTEGER
    },{
        tableName: 'tracking',
        createdAt: false,
        updatedAt: false
      })
}