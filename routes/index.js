var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Robert Reynolds' });
});

/* GET about page */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

/* Get contact page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
