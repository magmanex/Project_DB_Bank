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
                    password:"$2b$10$xdDm2D4ymdkVzJbv6v7xS.0s4jJKHry7ChjSfiklK3i.LXNrVxq4C",
                    type:"crm",
                    customers_id:null,
                    officer_id:1
                },                    
                {
                    username:"demo",
                    password:"$2b$10$0rI4oyznUg2Sfk2cWaxgu.QHPDm/29PTzqlf.DSmsEXP0ePA5CJRG",
                    type:"customer",
                    customers_id:1,
                    officer_id:null
                }
                ]
//demo:demo
//admin:admin