const express=require("express");
const router=express.Router();
const pool=require("../pool.js");

router.get('/',(req,res)=>{
    var sql=`SELECT * FROM xm_roads_img`;
    pool.query(sql,[],(err,result)=>{
    if(err){
        console.log(err);
        res.send({code:0});
    }else{
        res.send(result);
    }
    })
})

router.get('/roads-photo',(req,res)=>{
    var sql=`SELECT * FROM xm_roads_photo`;
    pool.query(sql,[],(err,result)=>{
    if(err){
        console.log(err);
        res.send({code:0});
    }else{
        res.send(result);
    }
    })
})
//用户插入数据
router.get('/news',(req,res)=>{
    var obj=req.query;
if(!obj.uname){
	res.send("姓名不能为空");
	return;
	}if(!obj.tel)
	{res.send("电话不能为空");
	return;}
    if(!obj.msg)
	{res.send("留言不能为空");
	return;}
pool.query('INSERT INTO xm_news SET ?',[obj],(err,result)=>{
	if(err)throw err;
	if(result.affectedRows>0)
	{res.send("提交成功");
	}else{
        res.send("提交失败");
    }
	});
  });

 router.get('/lunbo1',(req,res)=>{
    var sql=`SELECT * FROM xm_lunbo1_img`;
    pool.query(sql,[],(err,result)=>{
    if(err){
        console.log(err);
        res.send({code:0});
    }else{
        res.send(result);
    }
    })
}) 

router.get('/lunbo2',(req,res)=>{
    var sql=`SELECT * FROM xm_lunbo2_img`;
    pool.query(sql,[],(err,result)=>{
    if(err){
        console.log(err);
        res.send({code:0});
    }else{
        res.send(result);
    }
    })
}) 

router.get('/roads1_img',(req,res)=>{
    var sql=`SELECT * FROM xm_roads1_img`;
    pool.query(sql,[],(err,result)=>{
    if(err){
        console.log(err);
        res.send({code:0});
    }else{
        res.send(result);
    }
    })
}) 

//查询数据
router.get('/roads_details',(req,res)=>{
    var sql=`SELECT * FROM xm_roads_details`;
    pool.query(sql,[],(err,result)=>{
    if(err){
        console.log(err);
        res.send({code:0});
    }else{
        res.send(result);
    }
    })
}) 

//用户登录
router.get('/root',function(req,res){
	var obj=req.query;
	if(!obj.uname)
    {res.send("用户名不能为空");
	return;}
	if(!obj.upwd)
    {res.send("密码不能为空");
	return;
}
    var sql=`SELECT * FROM xm_root WHERE uname=? AND upwd=?`;
	pool.query(sql,[obj.uname,obj.upwd],function(err,result){
	if(err)throw err;
	if(result.length==0)
	{   
        res.send({code:0,msg:"login fail"});

	}else
	{   
        req.session.did= result[0].did;
        console.log(req.session.did);
        res.send({code:1,data:result});
    }
	});
});



//先登录操作成功后再查询购物车
//查询指定用户购物车列表
router.get("/cart",(req,res)=>{
  //1:参数(无参数)app.js
  //console.log(req.session.did);
  var did = req.query.did;
  if(!did){
    res.send({code:-1,msg:"请登录"});
    return;
  }
  //2:sql
  var sql = "SELECT id,img_url,title,price,sum(count) count FROM xm_cart WHERE did=? GROUP BY id";
  pool.query(sql,[did],(err,result)=>{
    if(err)throw err;
    res.send({code:1,data:result})
  })
  //3:json
})
//往购物车添加商品
router.get('/add-cart',(req,res)=>{
    var obj=req.query;
if(!obj.img_url){
	res.send("图片不能为空");
	return;
	}if(!obj.title)
	{res.send("详情不能为空");
	return;}
    if(!obj.price)
	{res.send("价格不能为空");
	return;}
    if(!obj.count)
	{res.send("数量不能为空");
	return;}
    if(!obj.did)
	{res.send("did不能为空");
	return;}
    if(!obj.id)
	{res.send("id不能为空");
	return;
    }
pool.query('INSERT INTO xm_cart SET ?',[obj],(err,result)=>{
	if(err)throw err;
	if(result.affectedRows>0)
	{res.send({code:1,msg:"req suc"});
	}else{
        res.send({code:0,msg:"req fail"});
    }
	});
  });

//查询用户信息
// router.get("/login",(req,res)=>{
//   //1:参数(无参数)app.js
//   //console.log(req.session.uname);
//   var uname=req.query.uname;
//   if(!uname){
//       console.log("不能为空")
//     return;
//   }
//   //2:sql
//   var sql = "SELECT * FROM xm_user WHERE uname = ?";
//   pool.query(sql,[uname],(err,result)=>{
//     if(err)throw err;
//     res.send({code:1,data:result})
//   })
//   //3:json
// })
//查询指定商品详情
router.get('/roads-details',(req,res)=>{
    var did=req.query.did;
    if(!did){
        res.send({code:-1,msg:"search fail"});
        return;
    }
    var sql="SELECT * FROM xm_roads_img WHERE did=?";
    pool.query(sql,[did],(err,result)=>{
    if(err)throw err;
    res.send({code:1,data:result})
    })
}) 

//功能四:删除购物车中商品 112~123
router.get("/delItem",(req,res)=>{
  //1:参数购物车id
  var id = req.query.id;
  //2:sql 删除指定数据
  var sql = "DELETE FROM xm_cart WHERE id in (?)";
  //3:json
  pool.query(sql,[id],(err,result)=>{
   if(err)throw err;
   //affectedRows 操作影响行数
   if(result.affectedRows>0){
    res.send({code:1,msg:"删除成功"});
   }else{
    res.send({code:-1,msg:"删除失败"}) 
   }
  })
});
//用户注册
router.get('/register',(req,res)=>{
    var obj=req.query;
if(!obj.uname){
	res.send("用户名不能为空");
	return;
	}if(!obj.upwd)
	{res.send("密码不能为空");
	return;}
    if(!obj.email)
	{res.send("邮箱不能为空");
	return;}
    if(!obj.tel)
	{res.send("电话不能为空");
	return;}
pool.query('INSERT INTO xm_root SET ?',[obj],(err,result)=>{
	if(err)throw err;
	if(result.affectedRows>0)
	{res.send({code:1,msg:"req suc"});
	}else{
        res.send({code:0,msg:"req fail"});
    }
	});
  });
module.exports=router;