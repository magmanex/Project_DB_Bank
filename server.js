const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const db = require('./api/index')


const moneystock = require('./api/controllers/moneystock.controller');


const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'src')));

app.use('/home',function(req,res){
    res.sendFile(path.join(__dirname, 'index.html'));   
   
});

///CRUD

//Find All
app.get('/api/moneystock', moneystock.findAll);

//Create
app.post('/api/moneystock', moneystock.create);

//Find by Id
app.get('/api/moneystock/:Id', moneystock.findById);
//Update
app.put('/api/moneystock/:Id', moneystock.update);

//*Delete

//Server
const port = 8080
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})