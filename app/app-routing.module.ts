
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { DeleteComponent } from './delete/delete.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';

import { DisplayComponent } from './display/display.component';
import { DelComponent } from './del/del.component';
import { UpdateComponent } from './update/update.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'homeuser',component:HomeuserComponent},
  {path:'homeadmin',component:HomeadminComponent},
  {path:'delete',component:DeleteComponent},
  {path:'display',component:DisplayComponent},
  {path:'del',component:DelComponent},
  {path:'update',component:UpdateComponent},
  {path:'news',component:NewsComponent},
  {path:'events',component:EventsComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
