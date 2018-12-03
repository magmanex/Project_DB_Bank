const db = require('../index')

exports.findAll = (req, res) => {
    db.loan.findAll().then(stock => res.json(stock))
}


//Create
exports.create = (req, res) => {
    //Id is auto increment
    db.loan.create({  
        status : req.body.status,
        amount: req.body.amount,
        interestrate : req.body.interestrate,
        totalamount :req.body.totalamount,
        time : req.body.time
         
        })
        .then(data => {		
            res.json(data);
        })
        .catch(error => res.status(400).send(error))
}

//Find by Id
exports.findById = (req, res) => {

    db.loan.findById(req.params.Id)
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
	return db.loan.findById(req.params.Id)
		.then(
			stock => {
				if(!stock){
					return res.status(404).json({
						message: 'stock Not Found',
					});
				}
				return stock.update({
                    status : req.body.status,
                    amount: req.body.amount,
                    interestrate : req.body.interestrate,
                    totalamount :req.body.totalamount,
                    time : req.body.time
									},{ 
                                        where: { id: req.params.id } 
                                    })
									.then(() => res.status(200).json(stock))
									.catch((error) => res.status(400).send(error));
				}
			)
		.catch((error) => res.status(400).send(error));			 
};