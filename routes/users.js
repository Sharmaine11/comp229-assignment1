/*File name: Comp229-f2022-assign1
Student Name: Sharmaine Sanchez
Student ID: 301206792
Date: October 2, 2022
/* custom css goes here */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
