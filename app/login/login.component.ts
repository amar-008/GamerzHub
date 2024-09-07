import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NodeUtilityService } from '../node-utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

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
      .login(form.value.username, form.value.password)
      .subscribe((data) => {
        if(data.status) {
          localStorage.setItem('user',form.value.username);
          this.msg = data.message;
          this.show = false;
          if(form.value.username == this.adname){
            this.router.navigateByUrl('/homeadmin');}
          else{
            this.router.navigateByUrl('/homeuser');
          }
        }
        else{
          this.msg = data.message;
          this.show = true;
          this.ValidateMsg = 'Invalid creds';
          this.router.navigateByUrl('home');
        }
        });
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



