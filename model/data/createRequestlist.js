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
                campaign:item.campaign,
                date:item.date
            })
    })
}

var requestList = [{
                    id:1,
                    asset:"สมพงษ์",
                    amount:1000,
                    campaign:"กู้ยืมฟรี",
                    date:"2017-06-15"},
                {
                    id:2,
                    asset:"แสนมี",
                    amount:2000,
                    campaign:"กู้ยืมเพื่อการศึกษา",
                    date:"2017-06-15"}
                ]
