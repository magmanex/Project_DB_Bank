var express = require('express');
var router = express.Router();
var path    = require("path");
var bcrypt = require('bcrypt');
const saltRounds = 10;
var Users = [];
const db = require('../api/index')

db.login.findAll().then( value => {

   value.forEach(element => {
      var newUser = {username: element.username, password: element.password,status:element.type};
      Users.push(newUser);
   });
})



/* GET users listing. */
router.get('/', function(req, res, next) {
   db.login.findAll().then( value => {
      
      res.send(value);
   })
  
});


router.get('/signup', function(req, res){
  res.sendFile(path.join(__dirname+'/../src/login.html'));

});


router.post('/signup', function(req, res){
   if(!req.body.username || !req.body.password){
      res.status("400");
      res.send("Invalid details!");
   } else {
      Users.filter(function(user){
         console.log(user)
         if(user.username === req.body.username){
            res.render('signup', {
               message: "User Already Exists! Login or choose another user id"});
         }
      });

      bcrypt.hash(req.body.password, saltRounds, function (err,   hash) {
         var newUser = {username: req.body.username, password: hash,type:"customer"};
         Users.push(newUser);
         db.login.create(newUser)
           .then(user => res.json(user))
         req.session.user = newUser;
         req.session.save()
         console.log(Users)
      })
     
  
   }
});
function checkSignIn(req, res){
   if(req.session.user){
      next();     //If session exists, proceed to page
   } else {
      var err = new Error("Not logged in!");
      console.log(req.session.user);
      next(err);  //Error, trying to access unauthorized page!
   }
}
router.get('/protected_page', checkSignIn, function(req, res){
   res.send('protected_page'+ req.session.user.id)
});

router.get('/login', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/../src/login.html'));
});

router.post('/login', function(req, res){
   console.log(Users);
   if(req.session.user) { 
      res.sendFile(path.join(__dirname+'../src/customer/index.html'));
}
  else{
   if(!req.body.username || !req.body.password){
      res.render('login', {message: "Please enter both id and password"});
   } else {
      Users.filter(function(user){

         if(user.username === req.body.username){
            bcrypt.compare(req.body.password, user.password, function (err, result) {
               req.session.user = user;
               req.session.save()
               res.status(200)
               res.sendFile(path.join(__dirname, 'src/customer/index.html'));   
            })
           
          
         }
      });
      //res.status(404);
   }
  }
   
   
});

router.get('/logout', function(req, res){
   req.session.destroy(function(){
      console.log("user logged out.")
   });
   res.redirect('/');
});

router.use('/protected_page', function(err, req, res, next){
console.log(err);
   //User should be authenticated! Redirect him to log in.
   res.redirect('/login');
});

router.use('/index', function(err, req, res, next){
  console.log(err);
     //User should be authenticated! Redirect him to log in.
     res.sendFile(path.join(__dirname+'/../src/index.html'));
  });
module.exports = router;
