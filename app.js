var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/',function (req, res) {
    res.send("<html><head></head><body>Hello World</body></html>")        
});
app.get('/api',function (req,res) {
    res.json({firstname:'haluk',lastname:'yıldız'});
    
});

app.listen(port);