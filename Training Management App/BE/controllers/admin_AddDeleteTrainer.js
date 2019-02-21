var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');
 
var connection = require('../models/db');
module.exports.addTrainer=function(req,res){
    var data = {
        "trainer_name":"SUAJ",      
        "trainer_mobile_number":878767678,
        "trainer_email":"suaj@wdf2",
        "trainer_department":"aefw",  
        "trainer_password":"sdaf",   
        //"trainerId":req.body.trainerId,
    }
   
    var sql = 'INSERT INTO trainer (trainer_name,trainer_number,trainer_email,trainer_department,trainer_password) VALUES ("'+data.trainer_name+'", '+data.trainer_mobile_number+', "'+data.trainer_email+'", "'+data.trainer_department+'", "'+data.trainer_password+'")';
    connection.query(sql, function (error, results, fields) {
        if (error) {
          console.log(values);
          res.json({
              status:false,
              message:'there are some error with query'
          })
        }else{
            res.json({
              status:true,
              data:results,
              message:'trainer Added'
          })
        console.log(error);
        console.log(data);
        console.log(results);
        }
      });
  }

  module.exports.deleteTrainer=function(req,res){
    var data = {
        "trainer_email":"suaj@wdf2" 
        //"trainerId":req.body.trainerId,
    }   
    var sql = 'DELETE FROM trainer WHERE trainer_email="'+data.trainer_email+'"';
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
              message:'trainer Deleted'
          })
        console.log(error);
        console.log(data);
        console.log(results);
        }
      });
  }
