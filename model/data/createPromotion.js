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
                duration:item.duration
            })
    })
}

var promotion = [
                {
                    id:1,
                    name:"สุขต่อไม่รอแล้วนะ",
                    detail:"​รับเครดิตเงินคืน​ 5%  เมื่อเติมน้ำมันที่สถานีบริการน้ำมัน PTT Station และ ซื้อสินค้า/บริการที่ร้านค้าในเครือ PTTOR สำหรับสถานีบริการน้ำมัน PTT Station (จำกัดรับเครดิตเงินคืนสูงสุด 160 บาท / เดือน) สำหรับซื้อสินค้าและใช้บริการ ที่ FIT Auto (จำกัดรับเครดิตเงินคืนสูงสุด 300 บาท / เดือน) สำหรับซื้อสินค้า ที่ Café Amazon/Jiffy/Hua Seng Hong Dimsum/Daddy Dough/Texas Chicken (จำกัดรับเครดิตเงินคืนสูงสุด 50 บาท / เดือน) SMS ลงทะเบียน พิมพ์ PRO วรรค ตามด้วยหมายเลขบัตรเครดิต 12 หลักสุดท้าย ส่งมาที่ 4545888 (ครั้งละ 3 บาท)"
                    ,rate:2
                    ,duration:12
                },                    
                {
                    id:2,
                    name:"E-Account Opening",
                    detail:"มิติใหม่การเปิดบัญชีหลักทรัพย์ที่ลูกค้าสามารถเปิดบัญชีหุ้น ไม่ต้องไปสาขา ไม่ต้องจัดส่งเอกสารใดๆ เพียง Selfie คู่บัตรประชาชน และถ่ายรูปเอกสารที่กำหนด ได้แก่ หน้าสมุดบัญชีออมทรัพย์ ตัวอย่างลายเซ็นต์ และบัตรประชาชน เพื่อเพิ่มความสะดวกสบาย เปิดบัญชีหุ้นผ่าน คอมพิวเตอร์ โทรศัพท์มือถือ หรือ แท็บเล็ต พิเศษลูกค้า 200 คนแรกที่ได้รับอนุมัติการเปิดบัญชีซื้อขายหุ้นผ่านบริการ E-Account Opening ระหว่างวันที่ 19 พ.ย. – 31 ธ.ค. รับบัตรกำนัล Starbucks มูลค่า 100 บาท"
                    ,rate:2
                    ,duration:12},
                {
                    id:3,
                    name:"SMS ขยันบอก",
                    detail:"เงินเข้าก็บอก เงินออกก็รู้ รู้ทุกการเคลื่อนไหวในบัญชี ตลอด 24 ชม. แจ้งยอดเงิน เข้า-ออก และยอดเงินคงเหลือ แจ้งเลขที่บัญชีทั้งผู้รับ และผู้โอน แจ้งเงินเข้า-ออก ตลอด 24 ชม. แจ้งทันทีเมื่อมีการทำรายการ* แจ้งเงินคืนภาษีเข้าบัญชี บัตรเครดิตเพื่อธุรกิจ บัตรเครดิตนิติบุคคลกสิกรไทยทุกประเภท และบัตรเดบิตกสิกรไทย ไม่ร่วมรายการนี้ได้ สมัครบริการ SMS ขยันบอก ง่ายๆ ทุกช่องทาง (ค่าบริการรายปี 199 บาท/บัญชี) *เฉพาะรายการธุรกรรมออนไลน์, เงื่อนไขเป็นไปตามที่ธนาคารกำหนด"
                    ,rate:2
                    ,duration:12}
                ]
