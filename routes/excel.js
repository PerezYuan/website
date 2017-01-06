const express = require('express');
const router = express.Router();

const xlsx = require('node-xlsx');
const mysql = require('mysql');
const config = require('../conf/conf');

/* GET home page. */
router.get('/', function (req, res, next) {
    // 构建mysql连接
    let connection = mysql.createConnection({
        host: config.mysql.host,
        user: config.mysql.user,
        password: config.mysql.password,
        port: config.mysql.port,
        database: config.mysql.database,
    });
    //读取文件内容
    let userGetSql = 'SELECT * from info';
    let userGetSqlParams = [];
    connection.query(userGetSql, userGetSqlParams, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            res.json({
                code: 0,
                msg: '数据库获取失败，[SELECT ERROR] - ' + err.message
            })
        }

        console.log('--------------------------SELECT----------------------------');
        console.log('SELECT ID:', result);
        console.log('-----------------------------------------------------------------\n\n');
    });
    res.render('excel.html');
});

module.exports = router;
