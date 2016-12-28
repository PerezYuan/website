const express = require('express');
const router = express.Router();
const qiniu = require("qiniu");
const config = require("../conf/conf");

'use strict';
router.get('/', renderJapan);

function renderJapan(req, res, next) {
    let p = new Promise((resolve, reject) => {
        qiniu.conf.ACCESS_KEY = config.qiuniuConfig.ACCESS_KEY;
        qiniu.conf.SECRET_KEY = config.qiuniuConfig.SECRET_KEY;
        qiniu.rsf.listPrefix(config.qiuniuConfig.bucket, null, null,10, null, function(rerr, ret,res){
            if (res && res.statusCode == 200) {
                let data = ret.items;
                let imgList = [];
                data.forEach(function (item) {
                    let obj = {};
                    obj.src = config.qiuniuConfig.qiniuTestDomain + item.key;
                    obj.h2 = item.key.split('-').join(' ');
                    obj.h3 = 'Our memory';
                    imgList.push(obj);
                });
                resolve(imgList);
            } else {
                reject(rerr);
            }
        })
    });
    p.then((imgList) => {
        res.render('japan.html', {
            title : 'Love in Japan',
            imgList
        })
    })
}
module.exports = router;
