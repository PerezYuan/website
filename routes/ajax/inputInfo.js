/**
 * @author perezyuan.
 * @time 2016/12/23.
 * @desc 判断是否有权限上传
 */

const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    let answer = 'Love shy',
        reqAnswer = req.body.answer;
        if (reqAnswer.toString() === answer) {
            res.json({
                code: 1,
                msg: '验证成功！'
            })
        } else {
            res.json({
                code: 0,
                msg: '验证失败！'
            })
        }
})


module.exports = router;
