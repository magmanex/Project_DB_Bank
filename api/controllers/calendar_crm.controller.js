const db = require('../index')

exports.findAll = (req, res) => {var List =[];
    db.requestlist.findAll()
    .then(async stock => {
        var custom = 0
        stock.forEach(element => {
            var currentdate = new Date();
            var DateDiff = currentdate - element.meetingDate;
            var mvalue = new Date(DateDiff);
            if( mvalue.getDate() >= 1 ){
                console.log(element.id)
                db.requestlist_has_customers.findAll({where: {requestlist_id :element.id}})
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
                                    time:element.meetingDate,
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
    db.calendar_crm.create({  
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

    db.calendar_crm.findById(req.params.Id)
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
	return db.calendar_crm.findById(req.params.Id)
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