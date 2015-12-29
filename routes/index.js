var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title:'Shipment Management', message: '@Lastmile Logistics'});
});

router.get('/createform', function(req, res, next) {
  res.render('createform',{title:'Create Userform', message: '@Lastmile Logistics'});
});

module.exports = router;
