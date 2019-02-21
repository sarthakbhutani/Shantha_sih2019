var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');
 
var connection = require('../models/db');
module.exports.addCourse=function(req,res){
    var data = {
        "course_id":43,
        "course_name":"LATESTGMP",
        "course_duration":2,
        "number_of_users":0
        //"trainerId":req.body.trainerId,
    }

    var values = [[42, "eee", 24, 0]];
    // req.body.courseID,
    // req.body.courseName,
    // req.body.duration,
    // 0];

    //for(var i=0; i< data.length; i++)
      //  values.push([data[i].name,data[i].age]);
   
    var sql = "INSERT INTO course_list (course_id, course_name, course_duration, number_of_users) VALUES ?"
    connection.query(sql, [values], function (error, results, fields) {
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