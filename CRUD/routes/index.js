var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('safsdf');
  User.find({})
  .then(users => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.json(users);
    res.render('index', {users: users});
  }, (err) => next(err))
  .catch((err) => next(err));
});



module.exports = router;
