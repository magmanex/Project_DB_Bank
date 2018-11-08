module.exports = {
    createPromotion : createPromotion
}

function createPromotion(obj) {
    promotion.forEach((item) => {
        obj.create(
            {
                id:item.id,
                name:item.name,
                detail:item.detail
            })
    })
}

var promotion = [
                {
                    id:1,
                    name:"ลดแค่นี้ หนี้บาน",
                    detail:"ลองเฉยๆ"
                },                    
                {
                    id:2,
                    name:"หนี้น้อย นั่งร้อยมาลัย",
                    detail:"ลองรอบ2"}
                ]
