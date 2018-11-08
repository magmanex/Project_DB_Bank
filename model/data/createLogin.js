module.exports = {
    createLogin : createLogin
}

function createLogin(obj) {
    login.forEach((item) => {
        obj.create(
            {
                username:item.username,
                password:item.password,
                type:item.type,
                customers_id:item.customers_id,
                officer_id:item.officer_id
            })
    })
}

var login = [
                {
                    username:"admin",
                    password:"admin",
                    type:"officer",
                    customers_id:null,
                    officer_id:1
                },                    
                {
                    username:"demo",
                    password:"demo",
                    type:"customer",
                    customers_id:1,
                    officer_id:null
                }
                ]
