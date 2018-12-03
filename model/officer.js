module.exports = (sequelize, type) => {
    return sequelize.define('officer', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        firstname : type.STRING,
        surname : type.STRING,
        dob : type.DATE,
        gender : type.CHAR,
        jobtitle : type.STRING

       

    },{
        tableName: 'officer',
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