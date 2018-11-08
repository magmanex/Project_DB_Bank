module.exports = {
    createCustomer : createCustomer
}

function createCustomer(obj) {
    customer.forEach((item) => {
        obj.create(
            {
                id:item.id,
                firstname:item.firstname,
                surname:item.surname,
                dob:item.dob,
                gender:item.gender,
                homeaddress:item.homeaddress,
                workaddress:item.workaddress,
                phone:item.phone
            })
    })
}

var customer = [{
                    id:1,
                    firstname:"สมพงษ์",
                    surname:"จันทร์โอเลี้ยง",
                    dob:"2017-06-15",
                    gender:"M",
                    homeaddress:"Chiang Mai",
                    workaddress:"Chiang Rai",
                    phone:"+66844337284"},
                {
                    id:2,
                    firstname:"แสนมี",
                    surname:"ไร้จรรย์",
                    dob:"2017-06-15",
                    gender:"M",
                    homeaddress:"Chiang Mai",
                    workaddress:"Chiang Rai",
                    phone:"+66844337284"}
                ]
