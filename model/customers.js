module.exports = (sequelize, type) => {
    return sequelize.define('customers', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        firstname : type.STRING,
        surname : type.STRING,
        dob: type.DATE,
        gender : type.CHAR,
        homeaddress : type.STRING,
        workaddress : type.STRING,
        phone : type.STRING
       

    },{
        tableName: 'customers',
        createdAt: false,
        updatedAt: false
      })
}