var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var people = [
        {
            name : 'perez'
        },
        {
            name : 'butsalt'
        }
    ]
    res.render('index.html', {people : people});
});

module.exports = router;
