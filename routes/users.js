/**
* Created by Joe on 14/4/16.
*/
module.exports = function (app) {

var con = require('../config/mysql.js');
var a = "a";

  getAllUsers = function(req,res){
    var a = "patata";
    console.log("getAllUsers");
    con.query("SELECT * FROM users",function(err,result){
      if(err) throw err;
      console.log(result);
      res.status(200).json(result);
    })
  }

  getUser = function(req,res){
    console.log("Get User");
    con.query("SELECT * FROM users WHERE id ="+req.params.id,function(err,result){
      if(err) throw err;
      console.log(result);
      res.status(200).json(result[0]);
    })
  }

  addUser = function(req,res){
    console.log("Add User");
    con.query("INSERT INTO users (username,password,name) VALUES ('"+req.body.username+"','"+req.body.password+"','"+req.body.name+"')",function(err,result){
      if(err) throw err;
      console.log(result);
      res.status(200).json(result);
    });

  }

  updateUser = function(req,res){
    console.log("Edit User");
    con.query("UPDATE users SET username = '"+req.body.username+"', password = '"+req.body.password+"', name = '"+req.body.name+"' WHERE id ="+req.params.id,function(err,result){
      if(err) throw err;
      console.log(result);
      res.status(200).json(result);
    });


  }

  deleteUser = function(req,res){
    console.log("Delete User");
    con.query("DELETE FROM users WHERE id ="+req.params.id,function(err,result){
      if(err) throw err;
      console.log(result);
      res.status(200).json(result);
    });
  }


  /// endpoints
  app.get('/users',getAllUsers);
  app.get('/user/:id',getUser);
  app.post('/user',addUser);
  app.put('/user/:id',updateUser);
  app.delete('/user/:id',deleteUser);


}
