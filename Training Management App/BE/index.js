var express=require("express");
var bodyParser=require('body-parser');
 
var connection = require('./models/db');
var app = express();
 
var authenticateController=require('./controllers/authenticate');
var registerController=require('./controllers/register');
var addCourseController=require('./controllers/addCourse')
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {  
   //res.sendFile( __dirname + "/" + "index.html" );  
   console.log("GET /");
})  
 
app.get('/login', function (req, res) {  
   //res.sendFile( __dirname + "/" + "login.html" );  
   console.log("GET /login");
})  
 
/* route to handle login and registration */
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
app.post('/api/addCourse',addCourseController.addCourse);
 
console.log(authenticateController);
app.post('/controllers/register', registerController.register);
app.post('/controllers/authenticate', authenticateController.authenticate);
app.post('/controllers/addCourse', addCourseController.addCourse);
app.listen(3000);