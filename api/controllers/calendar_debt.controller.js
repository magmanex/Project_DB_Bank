const db = require('../index')

exports.findAll = (req, res) => {
    var List =[];
    db.loan.findAll()
    .then(stock => {
        var currentdate = new Date();
        var MonthDiff = currentdate - stock[0].time;
        var value = new Date(MonthDiff);
	if( value.getMonth() > 0 ){
    db.customersList.findAll({where: {loan_id : stock[0].id}})
        .then(customer =>
        {
            db.customers.findById(customer[0].id).then(tmp =>
                {
                    List.push(tmp.firstname)
                    res.json(List);
                })
        }       
         )
  
	}
} 
)
}


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