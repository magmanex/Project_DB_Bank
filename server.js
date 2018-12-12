const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const db = require('./api/index')
var session = require('express-session');
var cookieParser = require('cookie-parser');

//api
const customer = require('./api/controllers/customers.controller')
const moneystock = require('./api/controllers/moneystock.controller');
const promotion = require('./api/controllers/promotion.controller');
const officer = require('./api/controllers/officer.controller');
const requestlist = require('./api/controllers/requestlist.controller');
const loan = require('./api/controllers/loan.controller');
const loanlist = require('./api/controllers/loanlist.controller');
const calendar_debt = require('./api/controllers/calendar_debt.controller');
const asset = require('./api/controllers/asset.controller');

const app = express()

var usersRouter = require('./routes/users');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use(cookieParser());
app.use(session({secret: "ILoveCPE"}));

app.get('/',function(req,res){
    console.log(req.session.user)
    if(!req.session.user) { 
        res.sendFile(path.join(__dirname+'/src/login.html'));
}
    else{
        app.use(express.static(path.join(__dirname, 'src/customer')));
        res.sendFile(path.join(__dirname, 'src/customer/index.html'));   
    }
    
});
app.use('/users', usersRouter);
///Rest API
app.get('/api/customer' , customer.findAll);
app.get('/api/customer/:Id' , customer.findById);

//Find All
app.get('/api/moneystock', moneystock.findAll);
app.post('/api/moneystock', moneystock.create);
app.get('/api/moneystock/:Id', moneystock.findById);
app.put('/api/moneystock/:Id', moneystock.update);

//test moneystock
app.post('/api/moneystockGetLast' , moneystock.getLast)

app.get('/api/promotion', promotion.findAll);
app.post('/api/promotion', promotion.create);
app.get('/api/promotion/:Id', promotion.findById);
app.put('/api/promotion/:Id', promotion.update);
app.delete('/api/promotion/:Id',promotion.delete);


app.get('/api/officer', officer.findAll);
app.post('/api/officer', officer.create);
app.get('/api/officer/:Id', officer.findById);
app.put('/api/officer/:Id', officer.update);
app.delete('/api/officer/:Id',officer.delete);

app.get('/api/requestlist', requestlist.findAll);
app.post('/api/requestlist', requestlist.create);
app.get('/api/requestlist/:Id', requestlist.findById);
app.put('/api/requestlist/:Id', requestlist.update);
app.delete('/api/requestlist/:Id',requestlist.delete);
app.post('/api/requestUpdate/:Id' , requestlist.update);


app.get('/api/loan' , loan.findAll);
app.post('/api/loan' , loan.create);
app.get('/api/loan/:Id' , loan.findById);
app.post('/api/loanUpdate/:Id' ,loan.update)

app.get('/api/loanlist/:Id' , loanlist.findById)
app.post('/api/loanlist/' , loanlist.create)

//created by dai 
app.get('/api/calendar_debt' , calendar_debt.findAll)

app.get('/api/asset/' , asset.findAll);
app.get('/api/asset/:Id' , asset.findById);
app.post('/api/asset/' , asset.create);

//Server
const port = 8080
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})