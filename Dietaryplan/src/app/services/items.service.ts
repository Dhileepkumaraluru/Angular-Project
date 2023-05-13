import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';




@Injectable({

  providedIn: 'root'

})

export class ItemsService {

  getItemsById(id: any) {

    throw new Error('Method not implemented.');

  }




  constructor(private http:HttpClient) { }




  getitems():Observable<any> {

  return this.http.get("http://localhost:4500/products")

  }

}