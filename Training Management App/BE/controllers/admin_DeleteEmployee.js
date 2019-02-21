var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');
 
var connection = require('../models/db');
module.exports.getDeleteEmployee=function(req,res){
    var data = {
        "employee_name":"Sunny",
        "employee_designation":"234",
        "employee_department":"EWr",
        //"trainerId":req.body.trainerId,
    }

    var sql = 'SELECT employee_id FROM employee WHERE employee_name= "'+data.employee_name+'" AND employee_designation= "'+data.employee_designation+'" AND employee_department= "'+data.employee_department+'"';
    connection.query(sql, function (error, results, fields) {
        if (error) {
          console.log('"'+data.employee_department+'"');
          res.json({
              status:false,
              message:'there are some error with query'
          })
        }else{
            res.json({
              status:true,
              data:results,
              message:'course Added'
          })
          console.log(results);
        }
      });
  }

  module.exports.deleteEmployee=function(req,res){
    var data = {
        "employee_id":2
        //"trainerId":req.body.trainerId,
    }

    var sql = "DELETE FROM employee WHERE employee_id="+data.employee_id;
    connection.query(sql, function (error, results, fields) {
        if (error) {
          res.json({
              status:false,
              message:'there are some error with query'
          })
        }else{
            res.json({
              status:true,
              data:results,
              message:'course Added'
          })
          console.log(results);
        }
      });
  }