var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');
 
var connection = require('../models/db');
module.exports.addCourse=function(req,res){
    var data = {
        "course_id":req.body.courseID,
        "course_name":req.body.courseName,
        "course_duration":req.body.duration,
        "number_of_users":0
        //"trainerId":req.body.trainerId,
    }
   
    connection.query('INSERT INTO course_list SET ?',data, function (error, results, fields) {
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
        }
      });
  }