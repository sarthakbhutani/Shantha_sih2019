var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');
 
var connection = require('../models/db');
module.exports.updateEmployee=function(req,res){
    var data = {     
        "employee_id":2,
        "employee_name":"SUAJ",      
        "employee_DOB":"",
        "employee_mobile_number":'',
        "employee_email":"",
        "employee_age":'',
        "employee_gender":"N",        
        //"employee_nationality":,   
        "employee_designation":"",  
        "employee_department":"",  
        "employee_GovID":"",   
        "employee_GovIDNo":"",   
        //"employee_joiningdate":,   
        //"course_taken":,
        //"trainerId":req.body.trainerId,
    }

    // var values = [[data.employee_name, data.employee_DOB, data.employee_mobile_number,data.employee_email,data.employee_age,data.employee_gender,data.employee_designation,data.employee_department,data.employee_GovID,data.employee_GovIDNo]];
    var values = [["SUN"]];

   
    var sql = "UPDATE employee SET employee_name=Sunny where employee_id ="+data.employee_id; 
    //INSERT INTO employee (employee_name,employee_DOB,employee_mobile_number,employee_email,employee_age,employee_gender,employee_designation,employee_department,employee_GovID,employee_GovIDNo) VALUES ?"
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
              message:'employee courses fetched'
          })
        console.log(error);
        console.log(data);
        console.log(results);
        }
      });
  }

module.exports.addEmployee=function(req,res){
  var data = {     
      "employee_name":"SUAJ",      
      "employee_DOB":"1/12/12",
      "employee_mobile_number":9865412322,
      "employee_email":"14erq",
      "employee_age":52,
      "employee_gender":"N",        
      //"employee_nationality":,   
      "employee_designation":"xc",  
      "employee_department":"we",  
      "employee_GovID":"asd",   
      "employee_GovIDNo":"saf3",   
      //"employee_joiningdate":,   
      //"course_taken":,
      //"trainerId":req.body.trainerId,
  }
  // var values = [[data.employee_name, data.employee_DOB, data.employee_mobile_number,data.employee_emaildata.employee_age,data.employee_gender,data.employee_designation,data.employee_department,data.employee_GovID,data.employee_GovIDNo]];
  var values = [["SUN", "23/12/23", 234, "23421qq", 23, "B", "234", "EWr", "ewrds", "234"]];
 
  var sql = "INSERT INTO employee (employee_name,employee_DOB,employee_mobile_number,employee_emailemployee_age,employee_gender,employee_designation,employee_department,employee_GovID,employee_GovIDNo)VALUES ?"
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
            message:'employee courses fetched'
        })
      console.log(error);
      console.log(data);
      console.log(results);
      }
    });
}  
