/**
 * @author perezyuan.
 * @time 2016/12/31.
 * @desc 接收学生录取信息
 */

const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const xlsx = require('node-xlsx');

router.post('/', (req, res, next) => {
    let info = req.body;
    let tempArr = [];
    tempArr.push(info.name ? info.name : '');
    tempArr.push(info.number ? info.number : '');
    tempArr.push(info.sex ? info.sex : '');
    tempArr.push(info.birthday ? info.birthday : '');
    //读取文件内容
    let obj = xlsx.parse(path.resolve(__dirname, '../../teach.xlsx'));
    let excelObj = obj[0].data;
    console.log(excelObj);

    excelObj.push(tempArr);
    var buffer = xlsx.build([
        {
            name: 'sheet1',
            data: excelObj
        }
    ]);

    //将文件内容插入新的文件中
    try {
        fs.writeFileSync('teach.xlsx',buffer,{'flag':'w'});
        res.json({
            code: 1,
            msg: '提交成功！'
        })
    } catch (e) {
        console.log(e);
        res.json({
            code: 0,
            msg: '提交失败'
        })
    }
})


module.exports = router;
