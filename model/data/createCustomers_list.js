module.exports = {
    createCustomersList : createCustomersList
}

function createCustomersList(obj) {
    customer_list.forEach((item) => {
        obj.create(
            {
                customers_id:item.customers_id,
                loan_id:item.loan_id
            })
    })
}

var customer_list = [
                {
                    customers_id:1,
                    loan_id:1
                },
                {
                    customers_id:2,
                    loan_id:2
                }
                ]