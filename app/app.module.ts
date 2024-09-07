import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NodeUtilityService } from './node-utility.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { DeleteComponent } from './delete/delete.component';
import { DisplayComponent } from './display/display.component';
import { DelComponent } from './del/del.component';
import { UpdateComponent } from './update/update.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HomeuserComponent,
    HomeadminComponent,
    DeleteComponent,
    DisplayComponent,
    DelComponent,
    UpdateComponent,
    NewsComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [NodeUtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
