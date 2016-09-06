var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var port = process.env.PORT || 8889;
var router = express.Router();
var data = {
  "employees":[
    {"id":1,"firstName":"venkat", "lastName":"aa", "email":"venkat@gmail.com","position":"hr"},
    {"id":2,"firstName":"tester2", "lastName":"bb", "email":"tester2@gmail.com","position":"Manager"},
    {"id":3,"firstName":"tester3","lastName":"cc", "email":"tester3@gmail.com","position":"TL"},
    {"id":4,"firstName":"tester4", "lastName":"dd", "email":"tester4@gmail.com","position":"hr"},
    {"id":5,"firstName":"tester5", "lastName":"ee", "email":"tester5@gmail.com","position":"Manager"},
    {"id":6,"firstName":"tester6","lastName":"ff", "email":"tester6@gmail.com","position":"TL"},
    {"id":7,"firstName":"tester7", "lastName":"gg", "email":"tester7@gmail.com","position":"hr"},
    {"id":8,"firstName":"tester8", "lastName":"hh", "email":"tester8@gmail.com","position":"Manager"},
    {"id":9,"firstName":"tester9","lastName":"jj", "email":"tester9@gmail.com","position":"TL"},
    {"id":10,"firstName":"tester10","lastName":"jj", "email":"tester10@gmail.com","position":"CEO"}
]
};

router.get('/allEmployees', function(req, res) {
    res.json(data);
});
router.get('/empById/:id', function(req, res) {
  data.employees.forEach(function(result, index) {
    if(result.id ==req.params.id) {
      res.json(result);
    }
  });
});

router.post('/postEmp', function(req,res){
  req.body.id = data.employees.length+1;
  data.employees.push(req.body);
  res.json(data);
});

router.post('/updateEmp', function(req,res){
  data.employees.push(req.body);
});

router.delete('/delete/:idd', function(req,res){
  data.employees.forEach(function(result, index) {
    if(result['id'] == req.params.idd) {
      data.employees.splice(index, 1);
    }
  });
  res.json(data);

});

app.use('/api', router);
app.listen(port);
console.log('server port is' + port);
