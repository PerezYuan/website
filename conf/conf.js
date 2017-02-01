/**
 * @author perezyuan.
 * @time 2016/12/14.
 * @desc 公用配置文件
 */
const qiuniuConfig = require('./qiniu-config');

'use strict';
let config = {
    qiuniuConfig,
    mysql: {
        host: '127.0.0.1',
        user: 'root',
        password: 'yzm199379',
        port: 3306,
        database: 'excel',
    }
}

module.exports = config;