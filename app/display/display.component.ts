import { NodeUtilityService } from './../node-utility.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  msg:string="";
  userList:any[]=[];
  constructor(private util:NodeUtilityService){
    this.display();
  }
  display(){
    this.util.findAll().subscribe((data)=>{
      if(data.status){
        this.userList = data.list;
      }
      this.msg = data.message;});

    }
  }


