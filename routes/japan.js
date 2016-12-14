var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('japan.html', {
        title : 'Love in Japan'
    });
});

module.exports = router;
