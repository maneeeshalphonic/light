import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetcontactsService {

    url="http://localhost:3001/api/";
  constructor(private http: HttpClient) { }
  getContacts(): Observable<any> {
    return this.http.get(this.url+"contacts/");
  }
  getContactsById(id): Observable<any> {
    return this.http.get(this.url+"contacts/"+id);
  }
  setUser(User):Observable<any>{
    return this.http.post(this.url+"contacts/",User)
  }
  seteditUser(User,id):Observable<any>{
    return this.http.put(this.url+"contacts/"+id,User)
  }
  getUserByEmail(UserLogin):Observable<any> {
     return this.http.post(this.url+"/login",UserLogin)
  }
  deleteContacts(id):Observable<any>{
    return this.http.delete(this.url+"contacts/"+id);
  }
  //account service*******************************************************************************
  getaccounts(): Observable<any> {
    return this.http.get(this.url+"accounts/");
  }
  getaccountsById(id): Observable<any> {
    return this.http.get(this.url+"accounts/"+id);
  }
  setaccountsUser(User):Observable<any>{
    return this.http.post(this.url+"accounts/",User)
  }
  seteditaccounts(User,id):Observable<any>{
    return this.http.put(this.url+"accounts/"+id,User)
  }
  deleteAccounts(id):Observable<any>{
    return this.http.delete(this.url+"accounts/"+id);
  }

}
