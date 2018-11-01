module.exports = {
    createLoan : createLoan
}

function createLoan(obj) {
    loan.forEach((item) => {
        obj.create(
            {
                id:item.id,
                status:item.status,
                amount:item.amount,
                interestrate:item.interestrate,
                payback:item.payback,
                time:item.time
            })
    })
}

var loan = [
                {
                    id:1,
                    status:"จ่ายไม่ครบ",
                    amount:1000,
                    interestrate:2000,
                    payback:200,
                    time:"2017-06-15"},
                {
                    id:2,
                    status:"แสนมี",
                    amount:2000,
                    interestrate:3000,
                    payback:3400,
                    time:"2017-06-15"}
                ]
