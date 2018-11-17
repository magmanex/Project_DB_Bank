module.exports = {
    createCalendarCRM : createCalendarCRM
}

function createCalendarCRM(obj) {
    calendar_crm.forEach((item) => {
        obj.create(
            {
                officer_id:item.officer_id,
                requestlist_id:item.requestlist_id
            })
    })
}

var calendar_crm = [
                {
                    officer_id:1,
                    requestlist_id:1
                },
                {
                    officer_id:2,
                    requestlist_id:2
                }
                ]
