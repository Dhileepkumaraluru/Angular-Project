import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';







@Injectable({
  providedIn: 'root'




})




export class DetailsService {
  getProducts() {
    throw new Error('Method not implemented.');
  }
  getDietById(id: any) :Observable<any>{
    return this.http.get("http://localhost:4500/d/"+id)
  
  }







  constructor(private http:HttpClient) { }







getDiet():Observable<any> {




return this.http.get("http://localhost:4500/d");




}




getDetails(id:number):Observable<any>{




  return this.http.get("http://localhost:4500/products/"+id);




}




}