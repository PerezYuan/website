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
qiniu.conf.ACCESS_KEY = config.qiuniuConfig.ACCESS_KEY;
qiniu.conf.SECRET_KEY = config.qiuniuConfig.SECRET_KEY;

router.post('/', multipartMiddleware, (req, res, next) => {
    // 存储文件真实路径数组
    let promiseArr = [];
    _.forEach(req.files, (value, key) => {
        let p = new Promise((resolve, reject) => {
            let realFilePath = uploadDir + '\\' + value.originalFilename;
            let bucket = config.qiuniuConfig.bucket;
            fs.rename(value.path, realFilePath, (err) => {
                if (err) {
                    reject(err);
                } else {
                    let fileName = value.originalFilename.split('.')[0].split('-').join(" ");
                    // 生成上传 Token
                    let token = uptoken(bucket, fileName);
                    // 调用uploadFile上传
                    uploadFile(token, fileName, realFilePath, resolve, reject);
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

// 构建上传策略函数
let uptoken = (bucket, key) => {
    let putPolicy = new qiniu.rs.PutPolicy(bucket + ":" + key);
    return putPolicy.token();
}

// 构造上传函数
let uploadFile = (uptoken, key, realFilePath, resolve, reject) => {
    let extra = new qiniu.io.PutExtra();
    qiniu.io.putFile(uptoken, key, realFilePath, extra, function(err, ret) {
        if(!err) {
            // 上传成功， 处理返回值
            console.log(ret.hash, ret.key, ret.persistentId);
            resolve(realFilePath);
        } else {
            // 上传失败， 处理返回代码
            console.log(err);
            reject(err);
        }
    });
}

module.exports = router;
