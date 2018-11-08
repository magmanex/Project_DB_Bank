const db = require('../index')

exports.findAll = (req, res) => {
    db.officer.findAll( ).then(stock => res.json(stock))
}


//Create
exports.create = (req, res) => {
    //Id is auto increment
    console.log( req.body.firstname)
    db.officer.create({  
        firstname : req.body.firstname,
        surname : req.body.surname,
        dob : req.body.dob,
        gender : req.body.gender,
        jobtitle : req.body.jobtitle
         
        })
        .then(data => {		
            res.json(data);
        })
        .catch(error => res.status(400).send(error))
}

//Find by Id
exports.findById = (req, res) => {

    db.officer.findById(req.params.Id)
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
	return db.officer.findById(req.params.Id)
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
                    dob : req.body.dob,
                    gender : req.body.gender,
                    jobtitle : req.body.jobtitle
                     
									},{ 
                                        where: { id: req.params.id } 
                                    })
									.then(() => res.status(200).json(stock))
									.catch((error) => res.status(400).send(error));
				}
			)
		.catch((error) => res.status(400).send(error));			 
};



exports.delete = (req, res) => {
    db.officer
	.findById(req.params.Id)
	.then(pro => {
		if(!pro) {
			return res.status(400).send({
				message: 'officer Not Found',
			});
		}
 
		return pro.destroy()
				.then(() => res.status(200).json({message: "Destroy successfully!"}))
				.catch(error => res.status(400).send(error));
	})
}