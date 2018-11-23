module.exports = (sequelize, type) => {
    return sequelize.define('typeStock', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        description: type.STRING
    },{
        tableName: 'typeStock',
        createdAt: false,
        updatedAt: false
      },
      {
        indexes: [
            {
                unique: true,
                fields: ['id']
            }
        ]
    })
}