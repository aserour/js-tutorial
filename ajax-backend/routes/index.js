var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/random-number', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ value: Math.random()*500 }));

});


module.exports = router;
