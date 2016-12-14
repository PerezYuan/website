var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('japan.html', {
        title : 'Love in Japan',
        imgList
    });
});

var imgList = [
    {
        src : 'src/japan/img/rice-ball.jpg',
        h2 : 'Rice ball',
        h3 : 'Our memory'
    },
    {
        src : 'src/japan/img/orange-juice.jpg',
        h2 : 'Orange juice',
        h3 : 'Our memory'
    },
    {
        src : 'src/japan/img/roast.jpg',
        h2 : 'Roast',
        h3 : 'Our memory'
    }
]

module.exports = router;
