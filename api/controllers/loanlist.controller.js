const db = require('../index')

exports.findAll = (req, res) => {
    db.loanlist.findAll({include: [ { model: db.typeStock, as: 'type' }] } ).then(stock => res.json(stock))
}


//Create
exports.create = (req, res) => {
    //Id is auto increment
    db.loanlist.create({  
            amount: req.body.amount,
            DATE : req.body.DATE,
            loanleft : req.body.loanleft,
            loan_id: req.body.loan_id
        })
        .then(data => {		
            res.json(data);
        })
        .catch(error => res.status(400).send(error))
}

//Find by Id
exports.findById = (req, res) => {
    db.loanlist.findAll({
        where: {loan_id: req.params.Id}
    })
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
	return db.loanlist.findById(req.params.Id)
		.then(
			stock => {
				if(!stock){
					return res.status(404).json({
						message: 'stock Not Found',
					});
				}
				return stock.update({
                    amount: req.body.amount,
                    DATE : req.body.DATE,
                    loanleft : req.body.loanleft
									},{ 
                                        where: { id: req.params.id } 
                                    })
									.then(() => res.status(200).json(stock))
									.catch((error) => res.status(400).send(error));
				}
			)
		.catch((error) => res.status(400).send(error));			 
};