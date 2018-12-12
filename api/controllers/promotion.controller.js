const db = require('../index')

exports.findAll = (req, res) => {
	db.promotion.findAll().then(stock => res.json(stock))
}


//Create
exports.create = (req, res) => {
    //Id is auto increment
    db.promotion.create({  
        name: req.body.name,
        detail :req.body.detail
          
        })
        .then(data => {		
            res.json(data);
        })
        .catch(error => res.status(400).send(error))
}

//Find by Id
exports.findById = (req, res) => {

    db.promotion.findById(req.params.Id)
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
	return db.promotion.findById(req.params.Id)
		.then(
			stock => {
				if(!stock){
					return res.status(404).json({
						message: 'stock Not Found',
					});
				}
				return stock.update({
                    name: req.body.name,
                    detail :req.body.detail
                      
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
    db.promotion
	.findById(req.params.Id)
	.then(pro => {
		if(!pro) {
			return res.status(400).send({
				message: 'promotion Not Found',
			});
		}
 
		return pro.destroy()
				.then(() => res.status(200).json({message: "Destroy successfully!"}))
				.catch(error => res.status(400).send(error));
	})
}