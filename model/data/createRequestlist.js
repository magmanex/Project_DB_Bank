module.exports = {
    createRequestList : createRequestList
}

function createRequestList(obj) {
    requestList.forEach((item) => {
        obj.create(
            {
                id:item.id,
                asset:item.asset,
                amount:item.amount,
                date:item.date,
                promotion_id:item.promotion_id,
                customers_id:item.customers_id
            })
    })
}

var requestList = [{
                    id:1,
                    asset:"สมพงษ์",
                    amount:1000,
                    date:"2017-06-15",
                    promotion_id:1,
                    customers_id:1},
                {
                    id:2,
                    asset:"แสนมี",
                    amount:2000,
                    date:"2017-06-15",
                    promotion_id:2,
                    customers_id:2}
                ]
