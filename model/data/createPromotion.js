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
                    name:"สุขต่อไม่รอแล้วนะ",
                    detail:"PTT Blue Card"
                },                    
                {
                    id:2,
                    name:"E-Account Opening",
                    detail:"ไม่ง้อเอกสาร"
                },
                {
                    id:3,
                    name:"SMS ขยันบอก",
                    detail:"เงินเข้าก็บอก เงินออกก็รู้"
                }
                ]
