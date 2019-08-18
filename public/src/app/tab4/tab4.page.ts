import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page{
private productShow=[]
private totalPrice=0
private isSelect=false
  constructor(private route:ActivatedRoute,private http:HttpClient,private alertController:AlertController) { }

  ngOnInit() {
    this.loadMore();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: '支付成功',
      buttons: ['OK']
    });

    await alert.present();
  }
  loadMore(){
    this.route.params.subscribe((data)=>{
      let url="http://travel123.applinzi.com/index/cart";
      let did=sessionStorage.getItem("did")//获取用户id
      this.http.get(url,{params:{did:did}}).subscribe((data:any)=>{
       console.log(data);
       let rows=data.data;
       for(var items of rows){
         items.cb=false;
       }
        this.productShow=rows;
        sessionStorage.setItem("productShow",JSON.stringify(this.productShow));
      })
    })
  }
  min(id){
    var list=this.productShow;
    //console.log(list);
    for(var item of list){
      if(item.id==id&&item.count<=1){
        item.count=1;
      }else if(item.id==id&&item.count>1){
      item.count-=1;}
    }
    this.total();
  }
  add(id){
    var list=this.productShow;
                for(var item of list){
                  if(item.id==id)
                item.count+=1;
              }
    this.total();
  }
   selectAll(e){//全选
    let cb=e.target.checked;
    //console.log(cb);
    for(let items of this.productShow){
      items.cb=cb;
      //console.log(items.cb)
    }
    this.total();
  }
  select(){//单选及反选
    let index=0;
    for(let i=0;i<this.productShow.length;i++){
      if(this.productShow[i].cb==false){
        this.isSelect=false;
      }else if(this.productShow[i].cb==true){
           ++index;
        if(index==this.productShow.length){
          this.isSelect=true;
        }
      }
    }
    this.total();
  }
  total(){//总价格
    let totalPrice=0;
    for(var i=0;i<this.productShow.length;i++){
      if(this.productShow[i].cb){
        totalPrice+=this.productShow[i].count*this.productShow[i].price;
      }
      this.totalPrice=totalPrice;
    }
  }
  delete(){
    this.route.params.subscribe((data)=>{
      let url="http://travel123.applinzi.com/index/delItem";
      let Data=JSON.parse(sessionStorage.getItem("productShow"));
      console.log(Data);
      let a=[];
      for(let i=0;i<Data.length;i++){
        if(this.productShow[i].cb==true){
        a.push(Data[i].id);
      }
      }
      this.http.get(url,{params:{id:a}}).subscribe((data:any)=>{
       // console.log(data);
        if(data.code==1){
          this.loadMore();
          this.totalPrice=0;
          this.isSelect=false;
        }else{
          return false;
        }
      })
    })
  }
  submit(){
    let index=0;
    for(let item of this.productShow){
      if(item.cb==true){
        ++index
      }
  }if(index>0){
    this.presentAlert();
    this.delete();
    this.total();
  }
}
}
