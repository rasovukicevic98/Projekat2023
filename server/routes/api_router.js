const connection = require("../common/db-connection"); 


var express = require("express");

var api = express.Router();

api.use(function(req, res, next){
    next();
    console.log("Helloo");
});

api.get("/users", function(req, res) { 
    const q = "SELECT * FROM PROIZVODJAC";
    connection.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
});

module.exports = api;