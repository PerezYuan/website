var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    console.log(req.query);
    res.json({code : 0});
});

module.exports = router;
