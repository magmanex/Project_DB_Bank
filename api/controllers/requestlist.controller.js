const db = require('../index')

exports.findAll = (req, res) => {
    db.requestlist.findAll({include: [ { model: db.typeStock, as: 'type' }] } ).then(stock => res.json(stock))
}


//Create
exports.create = (req, res) => {
    //Id is auto increment
    db.requestlist.create({  
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

    db.requestlist.findById(req.params.Id)
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
	return db.requestlist.findById(req.params.Id)
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


exports.delete = () => {
    db.requestlist
	.findById(req.params.Id)
	.then(obj => {
		if(!obj) {
			return res.status(400).send({
				message: 'requestlist Not Found',
			});
		}
 
		return obj.destroy()
				.then(() => res.status(200).json({message: "Destroy successfully!"}))
				.catch(error => res.status(400).send(error));
	})
}