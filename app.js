const express = require("express");
const mysql =require("mysql");
const bodyparser = require("body-parser");

const app=express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json);

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'nodemysql1',
    port:3306
  });
  
  connection.connect();
  
  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) 
  {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
  connection.query('SELECT * from beers' , function(err,result){
      console.log(result);
  })
  
  connection.end();
app.listen("3000",()=>{
    console.log("Server started @ 3000");
})