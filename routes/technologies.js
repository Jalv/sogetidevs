module.exports = function(app){

  var con = require('../config/mysql.js');

  getAllTechs = function(req,res){
    con.query("SELECT * FROM technologies",function(err,result){
      if(err) throw err;
      console.log(result);
      res.status(200).json(result);
    })
  }

  addTech = function(req,res){
    con.query("INSERT INTO technologies (name) VALUES('"+req.body.name+"')",function(err,result){
      if(err) throw err;
      console.log(result);
      res.status(200).json(result);
    })
  }

  getTech = function(req,res){
    con.query("SELECT * FROM technologies WHERE id ="+req.params.id,function(err,result){
      if(err) throw err;
      console.log(result);
      res.status(200).json(result[0]);
    })
  }

  updateTech = function(req,res){
    con.query("UPDATE technologies SET name ='"+req.body.name+"' WHERE id ="+req.params.id,function(err,result){
      if(err) throw err;
      console.log(result);
      res.status(200).json(result);
    })
  }

  deleteTech = function(req,res){
    con.query("DELETE FROM technologies WHERE id="+req.params.id,function(err,result){
      if(err) throw err;
      console.log(result);
      res.status(200).json(result);
    })
  }

  //ENDPOINTS
  app.get('/techs',getAllTechs);
  app.get('/tech/:id',getTech);
  app.post('/tech',addTech);
  app.put('/tech/:id',updateTech);
  app.delete('/tech/:id',deleteTech);
}
