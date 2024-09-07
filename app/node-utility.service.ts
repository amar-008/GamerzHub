import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventsComponent } from './events/events.component';

@Injectable({
  providedIn: 'root'
})
export class NodeUtilityService {
  url:string="http://localhost:5000/";

  constructor(private httpClient : HttpClient) { }
  insert(username: string , password : string, cpassword : string ,phoneNumber : number):Observable<any>{
     return this.httpClient.get(
     this.url + 'insert?username=' + username + '&password=' + password + '&cpassword=' + cpassword + '&phoneNumber=' + phoneNumber);

   }

   gameinsert(username: string , gamename : string):Observable<any>{
    return this.httpClient.get( 
      this.url + 'gameinsert?username=' + username + '&gamename=' + gamename );

   }

   login(username: string, password: string):Observable<any>{

    return this.httpClient.get(
      this.url + 'check?username=' + username + '&password=' + password
    );
   }

   delete(username: string):Observable<any>{
    return this.httpClient.get(this.url+ 'delete?username=' + username);

   }
   findAll():Observable<any> {
    return this.httpClient.get(this.url+"findAll");
   }

   update(username:string,password:string):Observable<any> {
    return this.httpClient.get(this.url+ "update?username=" +username+ "&password=" +password);
   }


}
