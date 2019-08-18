import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  private uname:''
  private upwd:''
  constructor(private route:ActivatedRoute,private http:HttpClient,private alertController:AlertController) {}
  ngOnInit(){
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: '登录成功',
      buttons: ['OK']
    });

    await alert.present();
  }
  async presentAlert1() {
    const alert = await this.alertController.create({
      message: '用户名或者密码错误',
      buttons: ['OK']
    });

    await alert.present();
  }
  onSubmit(value){
      let url="http://travel123.applinzi.com/index/root"
      let data1={
        "uname":value.uname,
        "upwd":value.upwd
      }
      console.log(data1);
      sessionStorage.setItem("uname",value.uname);
      this.http.get(url,{params:data1}).subscribe((res:any)=>{
        //console.log(res);
         if(res.code==1){
          this.presentAlert();
           this.uname="";
           this.upwd="";
           let did=res.data[0].did;
           sessionStorage.setItem("did",did);
         }else{
          this.presentAlert1();
         }
      })
  }
}
