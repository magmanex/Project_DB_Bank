module.exports = {
    createCalendar : createCalendar
}

function createCalendar(obj) {
    calendar.forEach((item) => {
        obj.create(
            {
                requestID:item.requestID,
                officerID:item.officerID
            })
    })
}

var calendar = [
                {
                    requestID:1,
                    officerID:1
                },
                {
                    requestID:2,
                    officerID:1,
                }
                ]
