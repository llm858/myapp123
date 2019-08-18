import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{
//显示要加载的商品
 private productToshow=[];
 slideOpts = {
  initialSlide: 1,
  speed: 400
};
   constructor(private route:ActivatedRoute,private http:HttpClient) {}
 ngOnInit() {
   //this.did=this.routerinfo.snapshot.params['did']
  this.route.params.subscribe((data)=>{
    //console.log(data);
    let url="http://travel123.applinzi.com/index";
    this.http.get(url).subscribe((res:any)=>{
      console.log(res);
      this.productToshow=res;
      //console.log(this.productToshow);
    })
  })
  
 }

}
