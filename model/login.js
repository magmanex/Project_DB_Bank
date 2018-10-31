module.exports = (sequelize, type) => {
    return sequelize.define('login', {
        username: {
          type: type.STRING,
          primaryKey: true
        },
        password: type.STRING,
        customer_id : type.INTEGER,
        officer_id : type.INTEGER

    },{
        tableName: 'login',
        createdAt: false,
        updatedAt: false
      })
}