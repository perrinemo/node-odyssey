var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/coucou-pug', function(req, res, next) {
  res.render('coucou', { title: 'Blop', sayHello: 'Hello buddy' });
});

module.exports = router;
