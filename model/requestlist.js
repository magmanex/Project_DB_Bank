module.exports = (sequelize, type) => {
    return sequelize.define('requestlist', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true

        },
        amount: type.FLOAT,
        date: type.DATE,
        listapprove : type.STRING,
        meetingdate : type.DATE
       
    },{
        tableName: 'requestlist',
        createdAt: false,
        updatedAt: false
      })
}