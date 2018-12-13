const db = require('../index')


//Create
exports.create = (req, res) => {
    //Id is auto increment
    db.customersList.create({  
        customers_id: req.body.customers_id,
        loan_id: req.body.loan_id
    })
    .then(data => {		
        res.json(data);
    })
    .catch(error => res.status(400).send(error))
}

//Find by Id
exports.findById = (req, res) => {

    db.customersList.findAll({ where: { loan_id: req.params.Id} })
    .then(stock => {
            if (!stock){
                return res.status(404).json({message: "Stock Not Found"})
            }
            return res.status(200).json(stock)
        }
    )
    .catch(error => res.status(400).send(error));
}

exports.findAll = (req, res) => {
console.log(req.body)
    db.customersList.findAll({ where: { customers_id: req.params.customers_id} })
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
	return db.customersList.findById(req.params.Id)
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