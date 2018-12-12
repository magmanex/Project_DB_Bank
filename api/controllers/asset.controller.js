const db = require('../index')

exports.findAll = (req, res) => {
    db.asset.findAll().then(stock => res.json(stock))
}


//Create
exports.create = (req, res) => {
    //Id is auto increment
    db.asset.create({  
            name: req.body.name,
            cost: req.body.cost,
            request_list_id : req.body.request_list_id
        })
        .then(data => {		
            res.json(data);
        })
        .catch(error => res.status(400).send(error))
}

//Find by Id
exports.findById = (req, res) => {

    db.asset.findById(req.params.Id)
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
    db.asset.findById(req.params.Id)
    .then(stock => {
            if (!stock){
                return res.status(404).json({message: "Stock Not Found"})
            }
            return stock.update({
                                    amount: req.body.amount,
                                    listapprove: req.body.listapprove,
                                    typeStock_id : req.body.typeStock_id
                                        },{ 
                                            where: { id: req.params.id } 
                                        })
                                        .then(() => res.status(200).json(stock))
                                        .catch((error) => res.status(400).send(error));
                // 			}
        }
    )
    .catch(error => res.status(400).send(error));
	// return db.requestlist.findById(1)
	// 	.then(
	// 		stock => {
	// 			if(!stock){
	// 				res.send(req);
	// 			}
	// 			return stock.update({
    //                     amount: req.body.amount,
    //                     total: req.body.total,
    //                     typeStock_id : req.body.typeStock_id
    //                         },{ 
    //                             where: { id: req.params.id } 
    //                         })
    //                         .then(() => res.status(200).json(stock))
    //                         .catch((error) => res.status(400).send(error));
	// 			}
	// 		)
	// 	.catch((error) => res.status(400).send(error));			 
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