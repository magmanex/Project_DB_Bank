module.exports = {
    createPromotion : createPromotion
}

function createPromotion(obj) {
    promotion.forEach((item) => {
        obj.create(
            {
                id:item.id,
                name:item.name,
                detail:item.detail,
                rate:item.rate,
                duration:item.duration,
                exp:item.exp
            })
    })
}

var promotion = [
                {
                    id:1,
                    name:"ลดแค่นี้ หนี้บาน",
                    detail:"ลองเฉยๆ",
                    rate:1,
                    duration:12,
                    exp:"2017-06-15"
                },                    
                {
                    id:2,
                    name:"หนี้น้อย นั่งร้อยมาลัย",
                    detail:"ลองรอบ2",
                    rate:5,
                    duration:12,
                    exp:"2017-06-15"}
                ]
