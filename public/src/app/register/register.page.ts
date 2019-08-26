import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController} from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
model={
uname:'',
upwd:'',
tel:'',
email:''
}
  constructor(
    private route:ActivatedRoute,
    private http:HttpClient,
    private alertController:AlertController,
    private nav:NavController
    ) { 
    }
  ngOnInit() {

  }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: '注册成功',
      buttons: ['OK']
    });

    await alert.present();
  }
  onSubmit(value){
    if(value.uname==''){
      console.log("不能为空");return;
    }
    if(value.upwd==''){
      console.log("不能为空");return;
    }
    if(value.tel==''){
      console.log("不能为空");return;
    }
    if(value.email==''){
      console.log("不能为空");return;
    }
    let url="http://travel123.applinzi.com/index/register";
    let data={
      "uname":value.uname,
      "upwd":value.upwd,
      "tel":value.tel,
      "email":value.email
    }
    this.http.get(url,{params:data}).subscribe((res:any)=>{
      console.log(res);
      if(res.code==1){
        this.presentAlert();
        this.nav.navigateForward('tabs/tab3');
        // this.model.email='';
        // this.model.tel='';
        // this.model.uname='';
        // this.model.upwd='';
      }
    });
    
  }
}
