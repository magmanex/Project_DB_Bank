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
                    detail:"​รับเครดิตเงินคืน​ 5%  เมื่อเติมน้ำมันที่สถานีบริการน้ำมัน PTT Station และ ซื้อสินค้า/บริการที่ร้านค้าในเครือ PTTOR สำหรับสถานีบริการน้ำมัน PTT Station (จำกัดรับเครดิตเงินคืนสูงสุด 160 บาท / เดือน) สำหรับซื้อสินค้าและใช้บริการ ที่ FIT Auto (จำกัดรับเครดิตเงินคืนสูงสุด 300 บาท / เดือน) สำหรับซื้อสินค้า ที่ Café Amazon/Jiffy/Hua Seng Hong Dimsum/Daddy Dough/Texas Chicken (จำกัดรับเครดิตเงินคืนสูงสุด 50 บาท / เดือน) SMS ลงทะเบียน พิมพ์ PRO วรรค ตามด้วยหมายเลขบัตรเครดิต 12 หลักสุดท้าย ส่งมาที่ 4545888 (ครั้งละ 3 บาท)"
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
