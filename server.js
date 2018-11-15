const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const db = require('./api/index')

//api
const moneystock = require('./api/controllers/moneystock.controller');
const promotion = require('./api/controllers/promotion.controller');
const officer = require('./api/controllers/officer.controller');
const requestlist = require('./api/controllers/requestlist.controller');
const loan = require('./api/controllers/loan.controller');
const loanlist = require('./api/controllers/loanlist.controller');

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'src')));

app.use('/home',function(req,res){
    res.sendFile(path.join(__dirname, 'index.html'));   
   
});

///Rest API

//Find All
app.get('/api/moneystock', moneystock.findAll);
app.post('/api/moneystock', moneystock.create);
app.get('/api/moneystock/:Id', moneystock.findById);
app.put('/api/moneystock/:Id', moneystock.update);

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

app.get('/api/requestlist', requestlist.findAll);
app.post('/api/requestlist', requestlist.create);
app.get('/api/requestlist/:Id', requestlist.findById);
app.put('/api/requestlist/:Id', requestlist.update);
app.delete('/api/requestlist/:Id',requestlist.delete);

app.get('/api/loan' , loan.findAll);
app.post('/api/loan' , loan.create);
app.get('/api/loan/:Id' , loan.findById);

app.post('/api/loanlist/:Id' , loanlist.findById)

//Server
const port = 8080
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})