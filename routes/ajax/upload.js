const express = require('express');
const router = express.Router();
const multiparty = require('connect-multiparty');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const qiniu = require("qiniu");
const config = require("../../conf/conf");

let uploadDir = path.resolve(__dirname, '../../temp');
let multipartMiddleware = multiparty({uploadDir});
router.post('/', multipartMiddleware, (req, res, next) => {
    // 存储文件真实路径数组
    let promiseArr = [];
    _.forEach(req.files, (value, key) => {
        let p = new Promise((resolve, reject) => {
            let realFilePath = uploadDir + '\\' + value.originalFilename;
            fs.rename(value.path, realFilePath, (err) => {
                if (err) {
                    reject(err);
                } else {
                    console.log('rename ok');
                    resolve(realFilePath);
                }
            });
        });
        promiseArr.push(p);
    });
    let pAll = Promise.all(promiseArr);
    pAll.then((successData) => {
        console.log(successData);
        res.json({code: 1})
    }, (err) => {
        console.log(err);
        res.json({code: 202, msg: 'rename error: ' + err});
    })
});

module.exports = router;
