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
                totalamount:item.totalamount,
                time:item.time,
                officer_id:item.officer_id,
                debt_id:item.debt_id
            })
    })
}

var loan = [
                {
                    id:1,
                    status:"จ่ายไม่ครบ",
                    amount:1000,
                    interestrate:2000,
                    totalamount:200,
                    time:"2017-06-15",
                    officer_id:1,
                    debt_id:2},
                {
                    id:2,
                    status:"ครบแล้วมั้ง",
                    amount:2000,
                    interestrate:3000,
                    totalamount:3400,
                    time:"2017-06-15",
                    officer_id:1,
                    debt_id:2}
                ]
