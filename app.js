var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'))
;
app.get('/',function (req, res) {
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello World</h1></body></html>');        
});
app.get('/api/:id',function (req,res) {
    res.json({firstname:'haluk',lastname:'yıldız',idisi:req.params.id});
    
});

app.listen(port);