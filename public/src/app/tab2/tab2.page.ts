import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
//显示要加载的商品对象
  private productDetails
  constructor(private route:ActivatedRoute,private http:HttpClient,public alertController:AlertController) {}
  async presentAlert() {
    const alert = await this.alertController.create({
      message: '添加成功',
      buttons: ['OK']
    });

    await alert.present();
  }
  async presentAlert1() {
    const alert = await this.alertController.create({
      message: '您还未登录，请先登录',
      buttons: ['OK']
    });

    await alert.present();
  }
  ngOnInit() {
    this.loadmore();
    this.route.queryParams.subscribe((data)=>{
      console.log(data);
    })
    
  }
  loadmore(){
    this.route.params.subscribe((data)=>{
      //console.log(data);
      let url="http://travel123.applinzi.com/index/roads-details";
      let did=this.route.snapshot.queryParams['did'];//获取当前页面的参数值
      this.http.get(url,{params:{did:did}}).subscribe((res:any)=>{
        console.log(res.data);
        this.productDetails=res.data;
      })
    })
  }
  min(){
    this.productDetails[0].count>1?this.productDetails[0].count--:1;
  }
  add(){
    this.productDetails[0].count++;
  }
  addCart(){
    let uname=sessionStorage.getItem("uname")//用户id
    if(uname==""||uname==undefined||uname==null){
     this.presentAlert1();
    }else{
        let url="http://travel123.applinzi.com/index/add-cart";
        //let id=this.route.snapshot.queryParams['did'];//获取商品id
         let did=sessionStorage.getItem("did")//用户id
         let list= this.productDetails;
        this.http.get(url,
          {
            params:{ 
            id:this.productDetails[0].did,
            img_url:this.productDetails[0].img,
            title:this.productDetails[0].details,
            price:this.productDetails[0].price,
            count:this.productDetails[0].count,
            did:did
          }}).subscribe((res:any)=>{
         // console.log(res);
          if(res.code===1){
            this.presentAlert();
            this.loadmore();
          }else{
            return false;
          }
      })
  }
}
}
