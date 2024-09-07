import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NodeUtilityService } from '../node-utility.service';

@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.component.html',
  styleUrl: './homeadmin.component.css'
})
export class HomeadminComponent {
  constructor(private router : Router ,private util:NodeUtilityService) {

  }

  ngOnInit(): void {
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  logout(){
    localStorage.removeItem('user');
    this.router.navigateByUrl('/home');

  }
  del(){
    this.router.navigateByUrl('/del');
  }
  dis(){
    this.router.navigateByUrl('display');
  }

  upd(){
    this.router.navigateByUrl('update');
  }
}
