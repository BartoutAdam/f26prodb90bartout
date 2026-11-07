var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('volcanoes', { title: 'Search Results Volcanoes' });
});

module.exports = router;