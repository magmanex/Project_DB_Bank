module.exports = {
    createCustomersRequestList : createCustomersRequestList
}

function createCustomersRequestList(obj) {
    customerrequest_list.forEach((item) => {
        obj.create(
            {
                customers_id:item.customers_id,
                requestlist_id:item.requestlist_id
            })
    })
}

var customerrequest_list = [
                {
                    customers_id:1,
                    requestlist_id:1
                },
                {
                    customers_id:2,
                    requestlist_id:1
                }
                ]