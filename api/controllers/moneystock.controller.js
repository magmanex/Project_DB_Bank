const db = require('../index')

exports.findAll = (req, res) => {
    db.moneyStock.findAll({include: [ { model: db.typeStock, as: 'type' }] } ).then(stock => res.json(stock))
}


//Create
exports.create = (req, res) => {
    //Id is auto increment
    db.moneyStock.create({  
            amount: req.body.amount,
            total: req.body.total,
            typeStock_id : req.body.typeStock_id,
        })
        .then(data => {		
            res.json(data);
        })
        .catch(error => res.status(400).send(error))
}

//Find by Id
exports.findById = (req, res) => {

    db.moneyStock.findById(req.params.Id)
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
	return db.moneyStock.findById(req.params.Id)
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

exports.getLast = (req ,res) => {
    db.moneyStock.findAll({
        limit: 1,
        order: [ [ 'id', 'DESC' ]]
      }).then(function(entries){
        //only difference is that you get users list limited to 1
        //entries[0]
        var result = parseFloat(entries[0].total) + parseFloat(req.body.amount);
        db.moneyStock.create({
            amount:req.body.amount,
            total:result,
            typeStock_id:req.body.typeStock_id,
            loanlist_id:req.body.loanlist_id,
            loanlist_id_fromloan:req.body.loanlist_id_fromloan
        }).then(data => {
            res.json(data);
        })
      }); 
}