module.exports = (sequelize, type) => {
    return sequelize.define('promotion', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: type.STRING,
        detail : type.STRING,
        exp : type.DATE
    },{
        tableName: 'promotion',
        createdAt: false,
        updatedAt: false
      })
}