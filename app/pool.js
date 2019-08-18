//创建mysql连接池
const mysql = require('mysql');
var pool = mysql.createPool({
  host: 'w.rdc.sae.sina.com.cn',
  user: 'llo0kn031n',
  port:"3306",
  password: 'j10k1h44xz3l0z1ilhz04kzyxz4k2wim514lwxij',
  database: 'app_travel01',
  connectionLimit: 10 
});
//把创建好的连接池导出
module.exports = pool;




