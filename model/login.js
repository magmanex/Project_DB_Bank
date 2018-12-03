module.exports = (sequelize, type) => {
    return sequelize.define('login', {
        username: {
          type: type.STRING,
          primaryKey: true
        },
        password: type.STRING,
        type: type.STRING

    },{
        tableName: 'login',
        createdAt: false,
        updatedAt: false
      },
      {
        indexes: [
            {
                unique: true,
                fields: ['username','password']
            }
        ]
    })
}