module.exports = {
    createCalendarDept : createCalendarDept
}

function createCalendarDept(obj) {
    calendar_dept.forEach((item) => {
        obj.create(
            {
                officer_id:item.officer_id,
                loan_id:item.loan_id
            })
    })
}

var calendar_dept = [
                {
                    officer_id:1,
                    loan_id:1
                },
                {
                    officer_id:1,
                    loan_id:1
                }
                ]
