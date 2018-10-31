module.exports = (sequelize, type) => {
    return sequelize.define('tracking_has_loan', {
        
        tracking_has_loan : type.INTEGER,
        load_id : type.INTEGER
    },{
        tableName: 'tracking_has_loan',
        createdAt: false,
        updatedAt: false
      })
}