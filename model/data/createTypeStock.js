module.exports = {
    createTypeStock : createTypeStock
}

function createTypeStock(obj) {
    TypeStock.forEach((item) => {
        obj.create({id:item.id,description:item.description})
    })
}

var TypeStock = [{id:null,description:"จ่ายเงินกู้"},
                {id:null,description:"ถอนเงินกู้"},
                {id:null,description:"ส่งทำลายธนาคารกลาง"},
                {id:null,description:"รับเงินธนาคารกลาง"}]
