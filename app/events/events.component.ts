import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NodeUtilityService } from '../node-utility.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

  username: String = '';
  password: String = '';
  user: string = '';
  msg: string = '';
  show:boolean = false;
  ValidateMsg: string = '';
  adname: string = 'admin@gmail.com';
  constructor(private router: Router, private util: NodeUtilityService) { }

  ngOnInit(): void {
  }

  goToreg(): void {
    this.router.navigate(['/register']);
  }
  auth(form:any){

      this.util
      .gameinsert(form.value.username, form.value.gamename)
      }

  valid(){
    const userName = <HTMLInputElement>document.querySelector('#username');
    const passWord = <HTMLInputElement>document.querySelector('#password');
    var u1 = userName.value;
    var p1 = passWord.value;
    if (u1.length == 0) {
      this.ValidateMsg = 'Username is Missing';
      this.show = true;
      return false;
    }
    if (p1.length == 0) {
      this.ValidateMsg= 'Password is Missing';
      this.show = true;
      return false;
    }
    this.show = false;
    return true;
  }


}



