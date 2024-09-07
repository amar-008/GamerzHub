import { Component } from '@angular/core';
import { NodeUtilityService } from '../node-utility.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  msg: string = '';
  constructor(private util:NodeUtilityService,private router : Router,private http: HttpClient){}
  onSubmit(form: any){

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.value.username)) {
      this.msg = "Please enter a valid email address.";
      return;
    }


    if (form.value.password !== form.value.cpassword) {
      this.msg = "Passwords do not match.";
      return;
    }

   
    const phoneNumberRegex = /^[0-9]{10}$/;
    if (!phoneNumberRegex.test(form.value.phoneNumber)) {
      this.msg = "Please enter a valid 10-digit phone number.";
      return;
    }


    this.util.insert(form.value.username, form.value.password, form.value.cpassword, form.value.phoneNumber)
      .subscribe((data) => {this.msg = data.message;
        if (data.status)
          if(this.msg = "Inserted Successfully")
           this.router.navigate(['/home']);
          else
            this.router.navigate(['/register']);


      });
  }
}
