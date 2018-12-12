module.exports = (sequelize, type) => {
    return sequelize.define('asset', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: type.STRING,
        cost: type.INTEGER
    },{
        tableName: 'asset',
        createdAt: false,
        updatedAt: false
      })
}