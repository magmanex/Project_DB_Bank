const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const { moneyStock, typeStock } = require('./api/index')

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'src')));

app.use('/home',function(req,res){
    res.sendFile(path.join(__dirname, 'index.html'));   
   
});



app.get('/api/moneystock', (req, res) => {
    moneyStock.findAll({include: [ { model: typeStock, as: 'type' }] } ).then(stock => res.json(stock))
})
const port = 8080
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})