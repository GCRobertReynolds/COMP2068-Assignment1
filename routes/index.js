var express = require('express');
var router = express.Router();

/* MAIN PAGES */
/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Robert Reynolds' });
});

/* GET about page */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

/* GET projects page */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET services page */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* Get contact page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

/* SUB PAGES */
/* GET hobbies page */
router.get('/interests', function(req, res, next) {
  res.render('index', { title: 'Interests' });
});

/* GET programming projects page */
router.get('/programming', function(req, res, next) {
  res.render('index', { title: 'Programming Projects' });
});

/* GET hobby projects page */
router.get('/hobbies', function(req, res, next) {
  res.render('index', { title: 'Hobby Projects' });
});

module.exports = router;