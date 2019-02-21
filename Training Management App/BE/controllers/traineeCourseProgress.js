var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');
 
var connection = require('../models/db');
module.exports.traineeCourseProgress=function(req,res){
    var data = {
        "employee_id":5,
        //"trainerId":req.body.trainerId,
    }

    var values = [[data.employee_id]];
   
    var sql = "SELECT course_id FROM course_details WHERE employee_id=?"
    connection.query(sql, [[values]], function (error, results, fields) {
        if (error) {
          res.json({
              status:false,
              message:'there are some error with query'
          })
        }else{
            res.json({
              status:true,
              data:results,
              message:'employee courses fetched'
          })
        console.log(results);
        }
      });
  }

module.exports.traineeCourseCompleteDetails=function(req,res){
    var data = {
        "employee_id":5,
        "course_id":2,
        //"trainerId":req.body.trainerId,
    }
   
    var sql = "SELECT * FROM course_details WHERE employee_id="+data.employee_id+" AND course_id="+data.course_id;
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
              message:'employee courses fetched'
          })
        console.log(results);
        }
      });
  }