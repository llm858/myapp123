SET NAMES UTF8;
DROP DATABASE IF EXISTS xm;
CREATE DATABASE xm CHARSET=UTF8;
USE xm;
/*index.html的轮播大图片*/
CREATE TABLE xm_lunbo1_img(
  did INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(32)
);
/*index.html的轮播小图片*/
CREATE TABLE xm_lunbo2_img(
  did INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(32)
);

/*index.html的大图片*/
CREATE TABLE xm_roads1_img(
  did INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(32)
);
/*index.html的小图片*/
CREATE TABLE xm_roads_img(
  did INT PRIMARY KEY AUTO_INCREMENT,
  count INT,
  details VARCHAR(32),
  price  DECIMAL(10,2),
  img   VARCHAR(100)
);
/*index.html的新闻*/
CREATE TABLE xm_roads_details(
  did INT PRIMARY KEY AUTO_INCREMENT,
  details VARCHAR(200),
  href VARCHAR(32)
);
/*roads.html的图片*/
CREATE TABLE xm_roads_photo(
 did INT PRIMARY KEY AUTO_INCREMENT,
 href VARCHAR(32),
 details VARCHAR(32)
);

/*lianxi.html的用户信息*/
CREATE TABLE xm_news(
  did INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(16),
  tel   CHAR(11),
  msg   VARCHAR(150)
);
/*旅游网的用户信息*/
CREATE TABLE xm_root(
  did INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(16),
  upwd VARCHAR(12),
  email VARCHAR(32),
  tel   CHAR(11)
);

/*用户购物车*/
CREATE TABLE xm_cart(
  i  INT PRIMARY KEY AUTO_INCREMENT,
  id INT ,
  img_url VARCHAR(50),
  price   DECIMAL(10,2),
  title   VARCHAR(255),
  count   INT,
  did     INT
);
/*用户登录信息*/
CREATE TABLE xm_user(
  did INT PRIMARY KEY AUTO_INCREMENT,
  uname  VARCHAR(16),
  upwd  VARCHAR(16)
);

/******数据导入******/
INSERT INTO xm_roads_img VALUES
(null,1,"东北旅游纯玩 7日6晚",2000,"http://travel123.applinzi.com/img/body_6.png"),
(null,1,"东北旅游纯玩 7日6晚",1899,"http://travel123.applinzi.com/img/body_7.jpg"),
(null,1,"东北旅游纯玩 7日6晚",1899,"http://travel123.applinzi.com/img/body_8.png"),
(null,1,"东北旅游纯玩 7日6晚",1899,"http://travel123.applinzi.com/img/body_9.png"),
(null,1,"东北旅游纯玩 7日6晚",1899,"http://travel123.applinzi.com/img/body_10.jpg"),
(null,1,"东北旅游纯玩 7日6晚",1899,"http://travel123.applinzi.com/img/body_11.jpg");

INSERT INTO xm_roads_photo VALUES
(null,"http://travel123.applinzi.com/img/road1.png","全国出发 日本旅游6/8天 东京富士山大阪京都白川乡日本跟团游东京富士山大阪京都白川"),
(null,"http://travel123.applinzi.com/img/road2.png","全国出发 日本旅游6/8天 东京富士山大阪京都白川乡日本跟团游东京富士山大阪京都白川"),
(null,"http://travel123.applinzi.com/img/road3.png","全国出发 日本旅游6/8天 东京富士山大阪京都白川乡日本跟团游东京富士山大阪京都白川"),
(null,"http://travel123.applinzi.com/img/road4.png","全国出发 日本旅游6/8天 东京富士山大阪京都白川乡日本跟团游东京富士山大阪京都白川"),
(null,"http://travel123.applinzi.com/img/road5.png","全国出发 日本旅游6/8天 东京富士山大阪京都白川乡日本跟团游东京富士山大阪京都白川"),
(null,"http://travel123.applinzi.com/img/road6.png","全国出发 日本旅游6/8天 东京富士山大阪京都白川乡日本跟团游东京富士山大阪京都白川"),
(null,"http://travel123.applinzi.com/img/road7.png","全国出发 日本旅游6/8天 东京富士山大阪京都白川乡日本跟团游东京富士山大阪京都白川"),
(null,"http://travel123.applinzi.com/img/road8.png","全国出发 日本旅游6/8天 东京富士山大阪京都白川乡日本跟团游东京富士山大阪京都白川"),
(null,"http://travel123.applinzi.com/img/road9.png","全国出发 日本旅游6/8天 东京富士山大阪京都白川乡日本跟团游东京富士山大阪京都白川"),
(null,"http://travel123.applinzi.com/img/road10.png","全国出发 日本旅游6/8天 东京富士山大阪京都白川乡日本跟团游东京富士山大阪京都白川"),
(null,"http://travel123.applinzi.com/img/road11.png","全国出发 日本旅游6/8天 东京富士山大阪京都白川乡日本跟团游东京富士山大阪京都白川"),
(null,"http://travel123.applinzi.com/img/road12.jpg","全国出发 日本旅游6/8天 东京富士山大阪京都白川乡日本跟团游东京富士山大阪京都白川"),
(null,"http://travel123.applinzi.com/img/road13.jpg","全国出发 日本旅游6/8天 东京富士山大阪京都白川乡日本跟团游东京富士山大阪京都白川"),
(null,"http://travel123.applinzi.com/img/road14.jpg","全国出发 日本旅游6/8天 东京富士山大阪京都白川乡日本跟团游东京富士山大阪京都白川"),
(null,"http://travel123.applinzi.com/img/road15.jpg","全国出发 日本旅游6/8天 东京富士山大阪京都白川乡日本跟团游东京富士山大阪京都白川");

INSERT INTO xm_lunbo1_img VALUES
(null,"http://travel123.applinzi.com/img/lunbotu1.jpg"),
(null,"http://travel123.applinzi.com/img/lunbotu2.jpg"),
(null,"http://travel123.applinzi.com/img/lunbotu3.jpg");

INSERT INTO xm_lunbo2_img VALUES
(null,"http://travel123.applinzi.com/img/lunbo1.jpg"),
(null,"http://travel123.applinzi.com/img/lunbo2.jpg"),
(null,"http://travel123.applinzi.com/img/lunbo3.jpg"),
(null,"http://travel123.applinzi.com/img/lunbo4.jpg");

INSERT INTO xm_roads_details VALUES
(null,"【手绘游记】带着父母去旅行，在游轮上躺着游莱茵河~
每年都有一个小小的心愿，想带着父母去看看外面的世界。我们曾一起去过新加坡、日本韩国等地，都留下了美好的记忆。其实每一次目的地的选择我都比较慎重，考虑到中老年出行交通不能太折腾","lianxi.html"),
(null,"看完《寻梦环游记》，我带你们去一次亡灵节!
这次专程请了三天假跑去亡灵节 是喝了王叔叔的酒之后的做的冲动决定， 花了4000多的机票只去玩三天，还是一个自己之前去过的国家 我特么酒醒之后就后悔了，唉，下个月得靠啃白菜还按揭了","lianxi.html"),
(null,"北京周边人少景美地方有哪些?
出去玩最怕什么呢？当然是人多、排队和浪费时间啦！其实除了圆明园、天安门广场这些著名的景点，小编还特地搜罗了很多北京周边景","lianxi.html");

INSERT INTO xm_roads1_img VALUES
(null,"http://travel123.applinzi.com/img/body_1.jpg"),
(null,"http://travel123.applinzi.com/img/body_2.jpg"),
(null,"http://travel123.applinzi.com/img/body_3.jpg"),
(null,"http://travel123.applinzi.com/img/body_4.jpg"),
(null,"http://travel123.applinzi.com/img/body_5.jpg");

INSERT INTO xm_root VALUES
(null,"tom","123456","123456@qq.com","80082088201"),
(null,"lily","1234567","1234567@qq.com","12345697125");

INSERT INTO xm_user VALUES
(null,"tom","123456"),
(null,"lily","1234567");