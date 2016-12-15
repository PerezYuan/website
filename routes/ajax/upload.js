const express = require('express');
const router = express.Router();
const multiparty = require('connect-multiparty');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

let uploadDir = path.join(__dirname + '/temp/');
let multipartMiddleware = multiparty({ uploadDir });
router.post('/', multipartMiddleware, (req, res, next) => {
    _.forEach(req.files, (value, key) => {
        fs.rename(value.path, uploadDir + value.originalFilename, (err) => {
            if (err) {
                console.log('rename error: ' + err);
            } else {
                console.log('rename ok');
            }
        });
    });
    res.json({code: 200})
})

module.exports = router;
