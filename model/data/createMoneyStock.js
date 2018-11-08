module.exports = {
    createMoneyStock : createMoneyStock
}

function createMoneyStock(obj) {
    MoneyStock.forEach((item) => {
        obj.create({id:item.id,amount:item.amount,total:item.total,typeStock_id:item.typeStock_id})
    })
}

var MoneyStock = [{id:null,amount:1000,total:1000,typeStock_id:1},
                {id:null,amount:1000,total:2000,typeStock_id:1}]
