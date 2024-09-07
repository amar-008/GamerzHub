import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrl: './homeuser.component.css'
})
export class HomeuserComponent {
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  logout(){
    localStorage.removeItem('user');
    this.router.navigateByUrl('/home');
  }
}
