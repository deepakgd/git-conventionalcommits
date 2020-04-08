const express = require('express');

const app = express();

app.get('/', function(req, res){
    return res.send('Welcome to git conventional commits pratice project')
})


app.listen(3000, function(){
    console.log("App listening in port 3000")
})