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
                loanleft:item.loanleft,
                loan_id:item.loan_id
            })
    })
}

var loanList = [
                    {
                        id:1,
                        amount:1000,
                        DATE:"2018-11-16T16:19:19",
                        loanleft:200,
                        loan_id:1
                    },                    
                    {
                        id:2,
                        amount:1000,
                        DATE:"2017-06-15",
                        loanleft:200,
                        loan_id:2}
                ]
