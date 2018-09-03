var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/coucou-pug', function(req, res, next) {
  res.render('coucou', { title: 'Blop', sayHello: 'Hello buddy' });
});

router.get('/forms-:code(\\d+)?:level?', (req, res) => {
  console.log(req.params.code);
  console.log(req.query.level);
});

router.post('/forms-:code(\\d+)?:level?', (req, res) => {
  console.log(req.body.name);
});

module.exports = router;
