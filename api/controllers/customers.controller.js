const db = require('../index')

exports.findAll = (req, res) => {
    db.customers.findAll({include: [ { model: db.typeStock, as: 'type' }] } ).then(stock => res.json(stock))
}


//Create
exports.create = (req, res) => {
    //Id is auto increment
    db.customers.create({  
        firstname : req.body.firstname,
        surname : req.body.surname,
        dob: req.body.dob,
        gender : req.body.gender,
        homeaddress :req.body.homeaddress,
        workaddress : req.body.workaddress,
        phone : req.body.phone
          
        })
        .then(data => {		
            res.json(data);
        })
        .catch(error => res.status(400).send(error))
}

//Find by Id
exports.findById = (req, res) => {

    db.customers.findById(req.params.Id)
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
	return db.customers.findById(req.params.Id)
		.then(
			stock => {
				if(!stock){
					return res.status(404).json({
						message: 'stock Not Found',
					});
				}
				return stock.update({
                    firstname : req.body.firstname,
                    surname : req.body.surname,
                    dob: req.body.dob,
                    gender : req.body.gender,
                    homeaddress :req.body.homeaddress,
                    workaddress : req.body.workaddress,
                    phone : req.body.phone
									},{ 
                                        where: { id: req.params.id } 
                                    })
									.then(() => res.status(200).json(stock))
									.catch((error) => res.status(400).send(error));
				}
			)
		.catch((error) => res.status(400).send(error));			 
};