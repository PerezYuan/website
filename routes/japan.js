const express = require('express');
const router = express.Router();
const qiniu = require("qiniu");

'use strict';
router.get('/', renderJapan);

function renderJapan(req, res, next) {
    let p = new Promise(function (resolve, reject) {
        let qiniuTestDomain = 'http://oi5p7h27l.bkt.clouddn.com/';
        qiniu.conf.ACCESS_KEY = 'IgTr5WbCFFiAa10Cwyp0VmM3jr6ZIOWkhqbqqJ-r';
        qiniu.conf.SECRET_KEY = 'KtB8RTrCXl5ljd2P7Wna7kUfTfXpESEodUPIFZyA';
        // listPrefix = function(bucket, prefix, marker, limit, delimiter, onret){...}
        qiniu.rsf.listPrefix('tinashy', null, null,10, null, function(rerr, ret,res){
            if (res.statusCode == 200) {
                let data = ret.items;
                let imgList = [];
                data.forEach(function (item) {
                    let obj = {};
                    obj.src = qiniuTestDomain + item.key;
                    obj.h2 = item.key.split('-').join(' ');
                    obj.h3 = 'Our memory';
                    imgList.push(obj);
                });
                resolve(imgList);
            } else {
                reject(res);
            }
        })
    });
    p.then(function (imgList) {
        res.render('japan.html', {
            title : 'Love in Japan',
            imgList
        })
    })
}
module.exports = router;
