const db = require('../index')
/*
exports.findAll = (req, res) => {
    var List =[];
    db.loan.findAll()
    .then(stock => {
        var MonthDiff = currentdate - stock.time;
	if( MonthDiff.getMonth() > 0  ){
    db.customerslist.findAll({where: {loan_id : stock.id}})
        .then(customer =>
        {
            db.customers.findById(customer.id).then(tmp =>
                {
                    List.push(tmp.firstName)
                })
        }       
         )
  
	}
}
)
}
*/

//Create
exports.create = (req, res) => {
    //Id is auto increment
    db.calendar_debt.create({  
            amount: req.body.amount,
            total: req.body.total,
            typeStock_id : req.body.typeStock_id
        })
        .then(data => {		
            res.json(data);
        })
        .catch(error => res.status(400).send(error))
}

//Find by Id
exports.findById = (req, res) => {

    db.calendar_debt.findById(req.params.Id)
    .then(stock => {
            if (!stock){
                return res.status(404).json({message: "Stock Not Found"})
            }
            return res.status(200).json(stock)
        }
    )
    .catch(error => res.status(400).send(error));
}

exports.update = (req, res) => {
	return db.calendar_debt.findById(req.params.Id)
		.then(
			stock => {
				if(!stock){
					return res.status(404).json({
						message: 'stock Not Found',
					});
				}
				return stock.update({
                                amount: req.body.amount,
                                total: req.body.total,
                                typeStock_id : req.body.typeStock_id
									},{ 
                                        where: { id: req.params.id } 
                                    })
									.then(() => res.status(200).json(stock))
									.catch((error) => res.status(400).send(error));
				}
			)
		.catch((error) => res.status(400).send(error));			 
};