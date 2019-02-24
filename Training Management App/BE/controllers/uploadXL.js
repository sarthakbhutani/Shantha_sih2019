var xlsxtojson = require('xlsx-to-json');
var MysqlJson = require('mysql-json');
var path = require("path"),
    fs = require("fs");

var mysqlJson = new MysqlJson({
   host     : 'localhost',
   user     : 'root',
   password : 'root',
   database : 'snalturalasysis',
   multipleStatements: true
 });

module.exports.uploadFile = function(req,res){
   res.sendFile(path.join(__dirname + "../../" + "index.html"));  
   console.log("GET /uploadFile");
}

module.exports.uploaded = function(req,res){
   if(req.files){
      console.log(req.files);
      var file = req.files.filename,
      filename = file.name;
      file.mv("./upload"+filename,function(err){
         if(err){
            console.log(err);
            res.send("Error Occured");
         } else {
            res.send("File Uploaded");
            uploadData("./upload"+filename);
         }
      })
   }
}

uploadData = function(loc){
   xlsxtojson({
      input: loc,
      output: "output.json",
      lowerCaseHeaders:true
   }, function(err,result){
      if(err){
         console.log(err);
      } else {
         console.log("ARR", result);
         save_to_sql(result);
      }
});

function save_to_sql(array){
   for(var i =0;i<=array.length-1;i++){
      console.log("ARRAY I",array[i]);
      mysqlJson.insert('sih2019', array[i], function(err, response) {
         if (err) throw err;
         console.log(response);
      });
   }
}
}