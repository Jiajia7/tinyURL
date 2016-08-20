var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

router.post('/urls', jsonParser, function(req, res){
    var longUrl = req.body.longurl;
    res.json();
});

module.exports = router;