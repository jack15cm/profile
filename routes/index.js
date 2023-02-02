var express = require('express');
var app = express()
var router = express.Router();
var bodyParser = require('body-parser');

/* 
Process form submitted values
*/
app.use(bodyParser.urlencoded({ extended: true }));

/* GET home page. */
router.get('/profile', function(req, res, next) {
  res.render('index', { title: 'Home' ,sys_msg:''});
});
router.post('/profile', function(req, res, next) {
  console.log("******Data from post******");
  console.log(req.body);
  console.log("firstName:"+req.body.firstName);
  res.render('index', { title: 'Home', sys_msg:'Thanks for your message' });
});
router.get('/profile/home', function(req, res, next) {
  res.render('index', { title: 'Home', sys_msg:'' });
});
router.get('/profile/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
router.get('/profile/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});
router.get('/profile/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

router.get('/profile/contact', function(req, res, next) {
  res.render('contact', { title: 'Services' });
});

module.exports = router;
