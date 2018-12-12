const db = require('../index')

exports.findAll = async (req, res) => {
    var List =[];
    db.loan.findAll()
    .then(async stock => {
        var custom = 0
        stock.forEach(element => {
            var currentdate = new Date();
            var MonthDiff = currentdate - element.time;
            var mvalue = new Date(MonthDiff);
            if( mvalue.getMonth() > 0 ){
                console.log(element.id)
                db.customersList.findAll({where: {loan_id :element.id}})
                    .then(e =>
                    {
                        console.log("test e : " + e.length)
                        custom += e.length
                        e.forEach(o => {
                            console.log("test o : " + o.customers_id)
                            db.customers.findById(o.customers_id).then(tmp =>
                            {
                                console.log("test tmp : " + tmp.id)

                                List.push({
                                    id:tmp.id,
                                    firstname:tmp.firstname,
                                    time:tmp.time,
                                    phone:tmp.phone
                                });
                                console.log("Test push " + List.length)
                                // res.json(List)
                                if (List.length === custom) {
                                    res.json(List)
                                }
                            });
                        })
                    }       
                )
            }
        })

    }).then()
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