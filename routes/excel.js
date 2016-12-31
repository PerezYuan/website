var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
    var xlsx = require('node-xlsx');
    var fs = require('fs');
    //读取文件内容
    var obj = xlsx.parse(path.resolve(__dirname, '../teach.xlsx'));
    var excelObj=obj[0].data;
    console.log(excelObj);

    var data = [[1,2,3]];
    for(var i in excelObj){
        var arr=[];
        var value=excelObj[i];
        for(var j in value){
            arr.push(value[j]);
        }
        data.push(arr);
    }
    var buffer = xlsx.build([
        {
            name:'sheet1',
            data:data
        }
    ]);

    //将文件内容插入新的文件中
    fs.writeFileSync('test1.xlsx',buffer,{'flag':'w'});
    res.render('excel.html');
});

module.exports = router;
