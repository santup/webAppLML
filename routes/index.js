var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('createform',{title:'Shipment Management', message: ''});
});

router.get('/createform', function(req, res, next) {
  res.render('createform',{title:'Create Userform', message: ''});
});

module.exports = router;
