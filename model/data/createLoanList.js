module.exports = {
    createLoanList : createLoanList
}

function createLoanList(obj) {
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

var loanList = [
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
