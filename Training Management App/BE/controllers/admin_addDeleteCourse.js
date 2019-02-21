var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');
 
var connection = require('../models/db');
module.exports.admin_addCourse=function(req,res){
    var data = {
        "course_name":"LATESTGMP",
        "trainerId":10
        //"trainerId":req.body.trainerId,
    }

    var sql = 'INSERT INTO course_list (course_name, course_trainer_id) VALUES ("'+data.course_name+'", '+data.trainerId+')'; 
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
        }
      });
  }

  module.exports.admin_deleteCourse=function(req,res){
    var data = {
        "course_id":2,
        "course_name":"me"
        //"trainerId":req.body.trainerId,
    }

    var sql = 'DELETE FROM course_list WHERE course_name="'+data.course_name+'" AND course_id='+data.course_id; 
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
              message:'course Deleted'
          })
        }
      });
  }