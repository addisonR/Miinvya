const express = require("express");
const path = require("path");

///server
const app = express();
app.listen(8080, function(){
    console.log("servidor conectado en el puerto 8080")
});
///rutas
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname + "/views/index.html"));
});