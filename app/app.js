//使用express构建web服务器 --11:25
const express = require('express');
const bodyParser = require('body-parser');
/*引入路由模块*/
const index = require("./routes/index.js");
const cors = require("cors");
const session = require("express-session");

var app = express();
var server = app.listen(5050, () => {
  console.log('服务器创建成功')
});
//2.3:session
app.use(session({
  secret: "128位字符串",
  resave: false,// 是否每次都重新保存会话，建议false
  saveUninitialized: false// 是否自动保存未初始化的会话，建议false
}))
app.use(cors({ origin: "*" }));
//使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
//托管静态资源到public目录下
app.use(express.static('public'));
/*使用路由器来管理路由*/
app.use('/index', index);


