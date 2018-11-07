module.exports = {
    createPromotion : createPromotion
}

function createPromotion(obj) {
    loanList.forEach((item) => {
        obj.create(
            {
                id:item.id,
                amount:item.amount,
                DATE:item.DATE,
                loanleft:item.loanleft
            })
    })
}

var promotion = [
                {
                    id:1,
                    amount:1000,
                    DATE:"2017-06-15",
                    loanleft:200
                },                    
                {
                    id:2,
                    amount:1000,
                    DATE:"2017-06-15",
                    loanleft:200}
                ]
