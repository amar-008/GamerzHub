import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NodeUtilityService } from '../node-utility.service';

@Component({
  selector: 'app-del',
  templateUrl: './del.component.html',
  styleUrl: './del.component.css'
})
export class DelComponent {
  username: string = '';
  msg: string = '';

  constructor(private router:Router,private util:NodeUtilityService){

  }

  delete1(form:any){
    this.util.delete(this.username).subscribe((data)=>
    {if(data.status){
      this.msg = data.message;
      if(this.msg="No data found"){
          this.msg = data.message;
          this.router.navigateByUrl('del');}
      else if(this.msg = "deleted Successfully"){this.router.navigateByUrl('homeadmin');}
    }


  });


  }

}
