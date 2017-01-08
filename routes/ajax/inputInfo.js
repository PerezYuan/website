/**
 * @author perezyuan.
 * @time 2016/12/31.
 * @desc 接收学生录取信息
 */

const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const mysql = require('mysql');
const config = require('../../conf/conf');

router.post('/', (req, res, next) => {
    let info = req.body;

    // 构建mysql连接
    let connection = mysql.createConnection({
        host: config.mysql.host,
        user: config.mysql.user,
        password: config.mysql.password,
        port: config.mysql.port,
        database: config.mysql.database,
    });

    let userAddSql = 'INSERT INTO info(id,class,name,sex,learnNum) VALUES(0,?,?,?,?)';
    let userAddSqlParams = [];
    userAddSqlParams.push(info.class ? info.class : '');
    userAddSqlParams.push(info.name ? info.name : '');
    userAddSqlParams.push(info.sex ? info.sex : '');
    userAddSqlParams.push(info.learnNum ? info.learnNum : '');
    // tempArr.push(info.birthday ? info.birthday : '');
    connection.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            res.json({
                code: 0,
                msg: '数据库连接失败'
            })
        }

        console.log('connected as id ' + connection.threadId);
    });

    connection.query(userAddSql, userAddSqlParams, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            res.json({
                code: 0,
                msg: '数据库插入失败，[INSERT ERROR] - ' + err.message
            })
        }

        console.log('--------------------------INSERT----------------------------');
        console.log('INSERT ID:', result);
        console.log('-----------------------------------------------------------------\n\n');
        res.json({
            code: 1,
            msg: '提交成功！'
        })
    });
    // let obj = xlsx.parse(path.resolve(__dirname, '../../teach.xlsx'));
    // let excelObj = obj[0].data;
    // excelObj.push(tempArr);
    // console.log(excelObj);
    // let buffer = xlsx.build([
    //     {
    //         name: 'sheet1',
    //         data: excelObj
    //     }
    // ]);

    //将文件内容插入新的文件中
    // try {
    //     fs.writeFileSync('teach.xlsx', buffer, {'flag': 'w'});
    //     res.json({
    //         code: 1,
    //         msg: '提交成功！'
    //     })
    // } catch (e) {
    //     let msg = '提交失败！';
    //     if (e.code == 'EBUSY') {
    //         msg = '服务器繁忙，请重试';
    //     }
    //     res.json({
    //         code: 0,
    //         msg: msg
    //     })
    // }
})


module.exports = router;
