module.exports = {
    createOfficer : createOfficer
}

function createOfficer(obj) {
    officer.forEach((item) => {
        obj.create(
            {
                id:item.id,
                firstname:item.firstname,
                surname:item.surname,
                dob:item.dob,
                gender:item.gender,
                jobtitle:item.jobtitle
            })
    })
}

var officer = [{
                    id:1,
                    firstname:"สมพงษ์",
                    surname:"จันศรีชา",
                    dob:"2017-06-15",
                    gender:"M",
                    jobtitle:"CRM"


                },
                {
                    id:2,
                    firstname:"แสนมี",
                    surname:"ไม่จริง",
                    dob:"2017-06-15",
                    gender:"F",
                    jobtitle:"DT"
                }
                ]
